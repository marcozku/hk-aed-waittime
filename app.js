// 醫院數據庫 - 包含完整資訊
// 注意：specialtiesWarning 需要定期核實各醫院的專科服務範圍
// 建議參考醫院管理局官方網站或直接聯絡醫院確認
const HOSPITALS_DATA = {
    'PWH': {
        name: '威爾斯親王醫院',
        nameEn: 'Prince of Wales Hospital',
        cluster: 'NTE',
        clusterName: '新界東聯網',
        district: '新界',
        address: '新界沙田銀城街30-32號',
        phone: '3505 2211',
        lat: 22.3753,
        lng: 114.2026,
        specialtiesWarning: null
    },
    'AHNH': {
        name: '雅麗氏何妙齡那打素醫院',
        nameEn: 'Alice Ho Miu Ling Nethersole Hospital',
        cluster: 'NTE',
        clusterName: '新界東聯網',
        district: '新界',
        address: '新界大埔全安路11號',
        phone: '2689 2000',
        lat: 22.4520,
        lng: 114.1748,
        specialtiesWarning: null
    },
    'NDH': {
        name: '北區醫院',
        nameEn: 'North District Hospital',
        cluster: 'NTE',
        clusterName: '新界東聯網',
        district: '新界',
        address: '新界上水保健路9號',
        phone: '2683 8888',
        lat: 22.4969,
        lng: 114.1386,
        specialtiesWarning: '⚠️ 此醫院沒有兒科、婦產科、神經外科住院服務'
    },
    'TMH': {
        name: '屯門醫院',
        nameEn: 'Tuen Mun Hospital',
        cluster: 'NTW',
        clusterName: '新界西聯網',
        district: '新界',
        address: '新界屯門青松觀路23號',
        phone: '2468 5111',
        lat: 22.4128,
        lng: 113.9770,
        specialtiesWarning: null
    },
    'PYNEH': {
        name: '博愛醫院',
        nameEn: 'Pok Oi Hospital',
        cluster: 'NTW',
        clusterName: '新界西聯網',
        district: '新界',
        address: '新界元朗坳頭坳頭村',
        phone: '2486 8000',
        lat: 22.4447,
        lng: 114.0251,
        specialtiesWarning: null
    },
    'TKO': {
        name: '將軍澳醫院',
        nameEn: 'Tseung Kwan O Hospital',
        cluster: 'KEC',
        clusterName: '九龍東聯網',
        district: '九龍',
        address: '新界將軍澳坑口寶寧里2號',
        phone: '2208 0111',
        lat: 22.3147,
        lng: 114.2607,
        specialtiesWarning: null
    },
    'UCH': {
        name: '基督教聯合醫院',
        nameEn: 'United Christian Hospital',
        cluster: 'KEC',
        clusterName: '九龍東聯網',
        district: '九龍',
        address: '九龍觀塘協和街130號',
        phone: '3513 5000',
        lat: 22.3089,
        lng: 114.2244,
        specialtiesWarning: null
    },
    'QEH': {
        name: '伊利沙伯醫院',
        nameEn: 'Queen Elizabeth Hospital',
        cluster: 'KCC',
        clusterName: '九龍中聯網',
        district: '九龍',
        address: '九龍油麻地加士居道30號',
        phone: '3506 8888',
        lat: 22.3089,
        lng: 114.1747,
        specialtiesWarning: null
    },
    'KWH': {
        name: '廣華醫院',
        nameEn: 'Kwong Wah Hospital',
        cluster: 'KCC',
        clusterName: '九龍中聯網',
        district: '九龍',
        address: '九龍油麻地窩打老道25號',
        phone: '3517 5000',
        lat: 22.3126,
        lng: 114.1722,
        specialtiesWarning: null
    },
    'CMC': {
        name: '明愛醫院',
        nameEn: 'Caritas Medical Centre',
        cluster: 'KWC',
        clusterName: '九龍西聯網',
        district: '九龍',
        address: '九龍深水埗永康街111號',
        phone: '3408 5678',
        lat: 22.3366,
        lng: 114.1616,
        specialtiesWarning: null
    },
    'YCH': {
        name: '仁濟醫院',
        nameEn: 'Yan Chai Hospital',
        cluster: 'KWC',
        clusterName: '九龍西聯網',
        district: '九龍',
        address: '新界荃灣仁濟街7-11號',
        phone: '2417 8383',
        lat: 22.3695,
        lng: 114.1175,
        specialtiesWarning: null
    },
    'PMH': {
        name: '瑪嘉烈醫院',
        nameEn: 'Princess Margaret Hospital',
        cluster: 'KWC',
        clusterName: '九龍西聯網',
        district: '九龍',
        address: '九龍荔枝角瑪嘉烈醫院道2-10號',
        phone: '2990 1111',
        lat: 22.3386,
        lng: 114.1457,
        specialtiesWarning: null
    },
    'QMH': {
        name: '瑪麗醫院',
        nameEn: 'Queen Mary Hospital',
        cluster: 'HKW',
        clusterName: '港島西聯網',
        district: '香港島',
        address: '香港薄扶林道102號',
        phone: '2255 3838',
        lat: 22.2697,
        lng: 114.1316,
        specialtiesWarning: null
    },
    'RH': {
        name: '律敦治醫院',
        nameEn: 'Ruttonjee Hospital',
        cluster: 'HKE',
        clusterName: '港島東聯網',
        district: '香港島',
        address: '香港灣仔皇后大道東266號',
        phone: '2291 2000',
        lat: 22.2740,
        lng: 114.1726,
        specialtiesWarning: '⚠️ 此醫院主要提供胸肺科及復康服務，建議先致電查詢專科服務'
    },
    'POME': {
        name: '東區尤德夫人那打素醫院',
        nameEn: 'Pamela Youde Nethersole Eastern Hospital',
        cluster: 'HKE',
        clusterName: '港島東聯網',
        district: '香港島',
        address: '香港柴灣樂民道3號',
        phone: '2595 6111',
        lat: 22.2634,
        lng: 114.2370,
        specialtiesWarning: null
    },
    'NLTH': {
        name: '北大嶼山醫院',
        nameEn: 'North Lantau Hospital',
        cluster: 'KWC',
        clusterName: '九龍西聯網',
        district: '九龍',
        address: '新界大嶼山東涌松仁路8號',
        phone: '3467 7000',
        lat: 22.2889,
        lng: 113.9431,
        specialtiesWarning: null
    },
    'TSWH': {
        name: '天水圍醫院',
        nameEn: 'Tin Shui Wai Hospital',
        cluster: 'NTW',
        clusterName: '新界西聯網',
        district: '新界',
        address: '新界天水圍天壇街11號',
        phone: '3513 8000',
        lat: 22.4590,
        lng: 113.9975,
        specialtiesWarning: '⚠️ 建議先致電查詢所需專科服務是否提供'
    },
    'CCH': {
        name: '長洲醫院',
        nameEn: 'Cheung Chau Hospital',
        cluster: 'HKE',
        clusterName: '港島東聯網',
        district: '香港島',
        address: '香港長洲東灣東灣路2號',
        phone: '2981 9441',
        lat: 22.2084,
        lng: 114.0323,
        specialtiesWarning: '⚠️ 此為小型醫院，只提供基本急症服務'
    }
};

// 全局變量
let userLocation = null;
let currentData = [];
let refreshTimer = null;
let retryTimer = null;
let isConnected = false;

// API URLs
const AED_API_URL = 'https://www.ha.org.hk/opendata/aed/aedwtdata-tc.json';
const WEATHER_WARNINGS_URL = 'https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=warnsum&lang=tc';

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    // 啟動實時時鐘
    startRealtimeClock();
});

async function initializeApp() {
    updateLoadingStatus('正在獲取您的位置...');
    await getUserLocation();
    
    updateLoadingStatus('正在連接急症室數據系統...');
    await fetchAEDData();
    
    // 設置控制面板事件監聽器
    document.getElementById('sort-by').addEventListener('change', renderHospitals);
    document.getElementById('filter-cluster').addEventListener('change', renderHospitals);
    document.getElementById('filter-district').addEventListener('change', renderHospitals);
}

function updateLoadingStatus(message) {
    const statusEl = document.getElementById('loading-status');
    if (statusEl) {
        statusEl.textContent = message;
    }
}

// 啟動實時時鐘
function startRealtimeClock() {
    function updateClock() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        const weekday = weekdays[now.getDay()];
        
        const timeString = `${year}年${month}月${day}日 ${weekday} ${hours}:${minutes}:${seconds}`;
        
        const clockEl = document.getElementById('current-time');
        if (clockEl) {
            clockEl.textContent = timeString;
        }
    }
    
    // 立即更新一次
    updateClock();
    // 每秒更新
    setInterval(updateClock, 1000);
}

// 獲取用戶位置 - 只詢問一次，並記住選擇
async function getUserLocation() {
    return new Promise((resolve) => {
        // 檢查是否已有緩存的位置
        const cachedLocation = localStorage.getItem('userLocation');
        if (cachedLocation) {
            try {
                userLocation = JSON.parse(cachedLocation);
                console.log('使用緩存的位置:', userLocation);
                resolve();
                return;
            } catch (e) {
                console.log('緩存位置解析失敗，將重新獲取');
            }
        }
        
        // 設置3秒超時（減少等待時間）
        const timeout = setTimeout(() => {
            console.log('地理位置請求超時，使用香港天文台位置');
            if (!userLocation) {
                userLocation = { lat: 22.3019, lng: 114.1742 };
                // 緩存默認位置
                localStorage.setItem('userLocation', JSON.stringify(userLocation));
            }
            resolve();
        }, 3000);
        
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    clearTimeout(timeout);
                    userLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    console.log('已獲取用戶位置:', userLocation);
                    // 緩存用戶位置（24小時有效）
                    localStorage.setItem('userLocation', JSON.stringify(userLocation));
                    localStorage.setItem('locationTimestamp', Date.now().toString());
                    resolve();
                },
                (error) => {
                    clearTimeout(timeout);
                    console.log('無法獲取位置，將使用香港天文台位置', error);
                    // 用戶拒絕或無法獲取，使用默認位置
                    userLocation = { lat: 22.3019, lng: 114.1742 };
                    // 緩存默認位置
                    localStorage.setItem('userLocation', JSON.stringify(userLocation));
                    resolve();
                },
                {
                    timeout: 3000,
                    enableHighAccuracy: false,
                    maximumAge: 86400000 // 接受24小時內的緩存位置
                }
            );
        } else {
            clearTimeout(timeout);
            console.log('瀏覽器不支持地理位置');
            userLocation = { lat: 22.3019, lng: 114.1742 };
            localStorage.setItem('userLocation', JSON.stringify(userLocation));
            resolve();
        }
    });
}

// 獲取急症室數據
async function fetchAEDData() {
    try {
        updateConnectionStatus('connecting', '正在連接...');
        
        const response = await fetch(AED_API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (!data || !data.waitTime || data.waitTime.length === 0) {
            throw new Error('無效的數據格式');
        }
        
        // 建立醫院名稱到代碼的映射
        const nameToCodeMap = {};
        for (const [code, info] of Object.entries(HOSPITALS_DATA)) {
            nameToCodeMap[info.name] = code;
        }
        
        // 處理數據
        currentData = data.waitTime.map(hospital => {
            const hospCode = nameToCodeMap[hospital.hospName];
            const hospitalInfo = hospCode ? HOSPITALS_DATA[hospCode] : {
                name: hospital.hospName,
                nameEn: hospital.hospName,
                cluster: 'unknown',
                clusterName: '未知',
                district: '未知',
                address: '未知',
                phone: '未知',
                lat: 22.3019,
                lng: 114.1742,
                specialtiesWarning: null
            };
            
            return {
                ...hospital,
                ...hospitalInfo,
                hospCode: hospCode || 'unknown',
                distance: calculateDistance(
                    userLocation.lat,
                    userLocation.lng,
                    hospitalInfo.lat,
                    hospitalInfo.lng
                )
            };
        });
        
        // 更新最後更新時間
        updateLastUpdateTime(data.updateTime);
        
        // 渲染醫院列表
        renderHospitals();
        
        // 獲取天氣數據
        await fetchWeatherData();
        
        // 顯示主頁面，隱藏加載畫面
        document.getElementById('loading-screen').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
        
        // 更新連接狀態
        isConnected = true;
        updateConnectionStatus('connected', `已連接 | 數據更新時間: ${data.updateTime}`);
        
        // 設置15秒後自動刷新
        scheduleRefresh();
        
    } catch (error) {
        console.error('獲取數據失敗:', error);
        updateConnectionStatus('error', `連接失敗: ${error.message} | 將在5秒後重試...`);
        
        // 5秒後重試
        if (retryTimer) clearTimeout(retryTimer);
        retryTimer = setTimeout(() => {
            fetchAEDData();
        }, 5000);
    }
}

// 計算距離 (使用 Haversine 公式)
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // 地球半徑（公里）
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function toRad(deg) {
    return deg * (Math.PI / 180);
}

// 渲染醫院列表
function renderHospitals() {
    const container = document.getElementById('hospitals-container');
    const sortBy = document.getElementById('sort-by').value;
    const filterCluster = document.getElementById('filter-cluster').value;
    const filterDistrict = document.getElementById('filter-district').value;
    
    // 過濾數據
    let filteredData = currentData.filter(hospital => {
        if (filterCluster !== 'all' && hospital.cluster !== filterCluster) {
            return false;
        }
        if (filterDistrict !== 'all' && hospital.district !== filterDistrict) {
            return false;
        }
        return true;
    });
    
    // 排序數據
    filteredData.sort((a, b) => {
        if (sortBy === 'distance') {
            return a.distance - b.distance;
        } else if (sortBy === 'waiting-time') {
            const timeA = parseWaitingTime(a.topWait);
            const timeB = parseWaitingTime(b.topWait);
            return timeA - timeB;
        } else if (sortBy === 'name') {
            return a.name.localeCompare(b.name, 'zh-HK');
        }
        return 0;
    });
    
    // 生成HTML
    container.innerHTML = filteredData.map(hospital => createHospitalCard(hospital)).join('');
}

// 解析等候時間（轉換為分鐘）
function parseWaitingTime(waitStr) {
    if (!waitStr || waitStr === '未有資料' || waitStr.includes('未能')) {
        return 999999; // 未知時間排在最後
    }
    
    // 匹配 "超過X小時" 或 "X小時以上"
    const match = waitStr.match(/(\d+)/);
    if (match) {
        return parseInt(match[1]) * 60;
    }
    
    return 999999;
}

// 獲取等候時間級別（用於顏色）- 基於國際標準
// 參考NHS 4小時標準和全球急症室最佳實踐
function getWaitingTimeLevel(waitStr) {
    const minutes = parseWaitingTime(waitStr);
    
    if (minutes === 999999) return 'unknown';
    if (minutes < 120) return 0; // < 2小時：綠色（良好）
    if (minutes < 240) return 1; // 2-4小時：琥珀色/黃色（可接受）
    if (minutes < 360) return 2; // 4-6小時：橙色（需關注）
    return 3; // > 6小時：紅色（嚴重）
}

// 創建醫院卡片
function createHospitalCard(hospital) {
    const waitLevel = getWaitingTimeLevel(hospital.topWait);
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${hospital.lat},${hospital.lng}`;
    
    return `
        <div class="hospital-card">
            <div class="hospital-header">
                <div class="hospital-name">${hospital.name}</div>
                <div class="hospital-name-en">${hospital.nameEn}</div>
                <span class="hospital-cluster">${hospital.clusterName}</span>
                <span class="hospital-district">${hospital.district}</span>
            </div>
            
            <div class="waiting-time-display wait-level-${waitLevel}">
                <div class="waiting-label">最長等候時間</div>
                <div class="waiting-time">${hospital.topWait}</div>
            </div>
            
            <div class="hospital-distance">
                📍 距離: ${hospital.distance.toFixed(1)} 公里
            </div>
            
            <div class="hospital-info">
                <div><strong>地址:</strong> ${hospital.address}</div>
                <div><strong>電話:</strong> ${hospital.phone}</div>
            </div>
            
            ${hospital.specialtiesWarning ? `
                <div class="specialties-info">
                    <strong>${hospital.specialtiesWarning}</strong>
                </div>
            ` : ''}
            
            <div class="hospital-actions">
                <a href="${mapUrl}" target="_blank" class="btn btn-map">🗺️ 地圖</a>
                <a href="tel:${hospital.phone.replace(/\s/g, '')}" class="btn btn-call">📞 致電</a>
            </div>
        </div>
    `;
}

// 更新最後更新時間
function updateLastUpdateTime(timeStr) {
    const now = new Date();
    const formatted = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    document.getElementById('last-update-time').textContent = formatted;
}

// 更新連接狀態
function updateConnectionStatus(status, message) {
    const statusIndicator = document.querySelector('.status-indicator');
    const statusText = document.querySelector('.status-text');
    
    if (statusIndicator) {
        statusIndicator.className = `status-indicator ${status}`;
    }
    
    if (statusText) {
        statusText.textContent = message;
    }
}

// 設置自動刷新
function scheduleRefresh() {
    if (refreshTimer) clearTimeout(refreshTimer);
    
    refreshTimer = setTimeout(() => {
        console.log('自動刷新數據...');
        fetchAEDData();
    }, 15000); // 15秒
}

// 獲取天氣數據
async function fetchWeatherData() {
    try {
        // 使用香港天文台API
        const weatherUrl = 'https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc';
        const response = await fetch(weatherUrl);
        
        if (!response.ok) throw new Error('無法獲取天氣數據');
        
        const data = await response.json();
        
        // 顯示溫度和天氣描述
        const temp = data.temperature?.data?.[0]?.value || '未知';
        const humidity = data.humidity?.data?.[0]?.value || '未知';
        
        document.getElementById('weather-temp').textContent = `🌡️ ${temp}°C`;
        document.getElementById('weather-desc').textContent = `💧 濕度 ${humidity}%`;
        
        // 獲取天氣警告
        await fetchWeatherWarnings();
        
    } catch (error) {
        console.error('獲取天氣數據失敗:', error);
        document.getElementById('weather-temp').textContent = '天氣數據暫時無法獲取';
    }
}

// 獲取天氣警告
async function fetchWeatherWarnings() {
    try {
        const response = await fetch(WEATHER_WARNINGS_URL);
        if (!response.ok) throw new Error('無法獲取天氣警告');
        
        const data = await response.json();
        const warningsContainer = document.getElementById('weather-warnings');
        
        if (data.WTMSGC && data.WTMSGC.length > 0) {
            const warningsHTML = data.WTMSGC.map(warning => 
                `<span class="warning-badge">${warning.name}</span>`
            ).join('');
            warningsContainer.innerHTML = warningsHTML;
        } else {
            warningsContainer.innerHTML = '';
        }
        
    } catch (error) {
        console.error('獲取天氣警告失敗:', error);
    }
}

