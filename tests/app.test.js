const test = require('node:test');
const assert = require('node:assert/strict');

const {
    PRIMARY_WAIT_LABEL,
    T3_WAIT_LABEL,
    T45_WAIT_LABEL,
    calculateQuickStats,
    createHospitalCard,
    formatOfficialUpdateTime,
    getFilteredAndSortedHospitals,
    normalizeWeatherWarnings,
    parseWaitingTime,
    recalculateHospitalDistances
} = require('../app.js');

test('parseWaitingTime handles official HA formats', () => {
    assert.equal(parseWaitingTime('4.5 小時'), 270);
    assert.equal(parseWaitingTime('33 分鐘'), 33);
    assert.equal(parseWaitingTime('少於 15 分鐘'), 15);
    assert.equal(parseWaitingTime('未有資料'), 999999);
});

test('formatOfficialUpdateTime normalizes Chinese and ISO timestamps', () => {
    assert.equal(formatOfficialUpdateTime('2026年4月14日 下午11時00分'), '2026-04-14 23:00');
    assert.equal(formatOfficialUpdateTime('2026-04-14T23:02:00+08:00'), '2026-04-14 23:02');
});

test('normalizeWeatherWarnings reads the warnsum object schema', () => {
    const warnings = normalizeWeatherWarnings({
        WFIREY: { code: 'WFIREY', name: '黃色火災危險警告' },
        TC8NE: { code: 'TC8NE', name: '八號東北烈風或暴風信號' }
    });

    assert.deepEqual(warnings, ['黃色火災危險警告', '八號東北烈風或暴風信號']);
});

test('filtering, sorting, and quick stats use the same filtered dataset', () => {
    const hospitals = [
        { name: '甲醫院', cluster: 'NTE', district: '新界', distance: 4.2, topWait: '4 小時' },
        { name: '乙醫院', cluster: 'NTE', district: '新界', distance: 1.8, topWait: '30 分鐘' },
        { name: '丙醫院', cluster: 'HKW', district: '香港島', distance: 0.5, topWait: '8 小時' }
    ];

    const filtered = getFilteredAndSortedHospitals(hospitals, {
        sortBy: 'distance',
        filterCluster: 'NTE',
        filterDistrict: '新界'
    });

    assert.deepEqual(filtered.map((hospital) => hospital.name), ['乙醫院', '甲醫院']);

    const stats = calculateQuickStats(filtered);
    assert.deepEqual(stats, {
        fastestWait: '30 分鐘',
        averageWait: '2.3 小時',
        hospitalCount: '2'
    });
});

test('recalculateHospitalDistances updates distances after location changes', () => {
    const hospitals = [
        { name: '近', lat: 22.3019, lng: 114.1742, distance: 999 },
        { name: '遠', lat: 22.4519, lng: 114.2742, distance: 999 }
    ];

    const updated = recalculateHospitalDistances(hospitals, { lat: 22.3019, lng: 114.1742 });

    assert.ok(updated[0].distance < updated[1].distance);
    assert.equal(updated[0].distance, 0);
});

test('hospital card uses accurate labels and hardened external links', () => {
    const html = createHospitalCard({
        name: '測試醫院',
        nameEn: 'Test Hospital',
        clusterName: '九龍西聯網',
        district: '新界',
        topWait: '6.5 小時',
        t3p50: '33 分鐘',
        t45p50: '4 小時',
        distance: 12.3,
        address: '測試地址',
        phone: '1234 5678',
        lat: 22.3,
        lng: 114.1,
        specialtiesWarning: '⚠️ 測試'
    }, 0);

    assert.match(html, new RegExp(PRIMARY_WAIT_LABEL));
    assert.match(html, new RegExp(T3_WAIT_LABEL));
    assert.match(html, new RegExp(T45_WAIT_LABEL));
    assert.match(html, /rel="noopener noreferrer"/);
    assert.match(html, /tel:12345678/);
});
