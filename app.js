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
        specialtiesWarning: '✅ 大型教學醫院，提供全面專科服務（包括創傷、神經外科、心臟科）'
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
        specialtiesWarning: '⚠️ 地區醫院，嚴重創傷個案可能需轉送威爾斯親王醫院'
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
        specialtiesWarning: '✅ 大型綜合醫院，提供全面專科服務（包括兒科、婦產科、創傷）'
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
        specialtiesWarning: '⚠️ 地區醫院，複雜創傷或神經外科個案可能需轉送屯門醫院'
    },
    'TKO': {
        name: '將軍澳醫院',
        nameEn: 'Tseung Kwan O Hospital',
        cluster: 'KEC',
        clusterName: '九龍東聯網',
        district: '新界',
        address: '新界將軍澳坑口寶寧里2號',
        phone: '2208 0111',
        lat: 22.3147,
        lng: 114.2607,
        specialtiesWarning: '⚠️ 急症醫院，嚴重創傷或需專科介入個案可能轉送基督教聯合醫院'
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
        specialtiesWarning: '✅ 大型急症全科醫院，提供全面專科服務（包括創傷、神經外科、心臟科）'
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
        specialtiesWarning: '✅ 大型教學醫院，提供全面專科服務，設有創傷中心'
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
        specialtiesWarning: '✅ 提供全面急症服務，婦產科及兒科服務完善'
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
        specialtiesWarning: '✅ 大型急症醫院，提供全面專科服務（包括創傷、腫瘤科）'
    },
    'YCH': {
        name: '仁濟醫院',
        nameEn: 'Yan Chai Hospital',
        cluster: 'KWC',
        clusterName: '九龍西聯網',
        district: '新界',
        address: '新界荃灣仁濟街7-11號',
        phone: '2417 8383',
        lat: 22.3695,
        lng: 114.1175,
        specialtiesWarning: '⚠️ 急症醫院，複雜個案可能需轉送明愛醫院或瑪嘉烈醫院'
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
        specialtiesWarning: '✅ 大型醫院，提供全面專科服務，設傳染病中心'
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
        specialtiesWarning: '✅ 港島最大教學醫院，提供全面專科及高度專科服務，設創傷中心'
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
        specialtiesWarning: '✅ 大型急症全科醫院，提供全面專科服務（包括創傷、神經外科、心臟科）'
    },
    'NLTH': {
        name: '北大嶼山醫院',
        nameEn: 'North Lantau Hospital',
        cluster: 'KWC',
        clusterName: '九龍西聯網',
        district: '新界',
        address: '新界大嶼山東涌松仁路8號',
        phone: '3467 7000',
        lat: 22.2889,
        lng: 113.9431,
        specialtiesWarning: '⚠️ 中型醫院，嚴重創傷或複雜個案可能需轉送其他醫院'
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
        district: '新界',
        address: '香港長洲東灣東灣路2號',
        phone: '2981 9441',
        lat: 22.2084,
        lng: 114.0323,
        specialtiesWarning: '⚠️ 此為小型醫院，只提供基本急症服務'
    }
};

const DEFAULT_LOCATION = {
    lat: 22.3019,
    lng: 114.1742
};

const PRIMARY_WAIT_LABEL = '第 IV/V 類 95% 輪候時間';
const T3_WAIT_LABEL = '第 III 類 50%';
const T45_WAIT_LABEL = '第 IV/V 類 50%';

function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, (char) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    }[char]));
}

function sanitizePhoneNumber(phone) {
    return String(phone ?? '').replace(/[^\d+]/g, '');
}

function formatDateTimeInHongKong(date, includeSeconds = false) {
    if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
        return '--';
    }

    const formatter = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Hong_Kong',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: includeSeconds ? '2-digit' : undefined,
        hour12: false
    });

    const parts = Object.fromEntries(
        formatter
            .formatToParts(date)
            .filter((part) => part.type !== 'literal')
            .map((part) => [part.type, part.value])
    );

    return includeSeconds
        ? `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute}:${parts.second}`
        : `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute}`;
}

function formatOfficialUpdateTime(rawTime) {
    if (!rawTime) {
        return '未有資料';
    }

    const trimmed = String(rawTime).trim();
    const chineseMatch = trimmed.match(
        /^(\d{4})年(\d{1,2})月(\d{1,2})日\s*(上午|下午)?\s*(\d{1,2})時(\d{2})分$/
    );

    if (chineseMatch) {
        const [, year, month, day, meridiem, hourStr, minute] = chineseMatch;
        let hour = Number.parseInt(hourStr, 10);

        if (meridiem === '下午' && hour < 12) {
            hour += 12;
        } else if (meridiem === '上午' && hour === 12) {
            hour = 0;
        }

        return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')} ${String(hour).padStart(2, '0')}:${minute}`;
    }

    const parsed = new Date(trimmed);
    if (!Number.isNaN(parsed.getTime())) {
        return formatDateTimeInHongKong(parsed);
    }

    return trimmed;
}

// 全局變量
let userLocation = null;
let isUsingDefaultLocation = false; // 追踪是否使用默認位置
let currentData = [];
let refreshTimer = null;
let retryTimer = null;
let isConnected = false;
let isFetchingAEDData = false;
let currentSourceUpdateTime = '';
let lastSuccessfulFetchTime = null;
let lastWeatherFetchAt = 0;

// API URLs - 醫管局 API 已於 2025-10-13 更新
const AED_API_URL = 'https://www.ha.org.hk/opendata/aed/aedwtdata2-tc.json';
const WEATHER_WARNINGS_URL = 'https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=warnsum&lang=tc';

function cloneDefaultLocation() {
    return { ...DEFAULT_LOCATION };
}

function setLiveSyncState(state, text) {
    const badge = document.getElementById('live-badge');
    const badgeText = document.getElementById('live-badge-text');
    const defaultText = {
        connected: '官方資料正常',
        connecting: '同步中',
        stale: '資料暫緩',
        error: '同步失敗'
    };

    if (badge) {
        badge.className = `live-badge ${state}`;
    }

    if (badgeText) {
        badgeText.textContent = text || defaultText[state] || defaultText.connecting;
    }
}

function setSelectValueIfValid(selectId, requestedValue, fallbackValue) {
    const select = document.getElementById(selectId);
    if (!select) {
        return;
    }

    const hasRequestedValue = Array.from(select.options).some((option) => option.value === requestedValue);
    select.value = hasRequestedValue ? requestedValue : fallbackValue;
}

function initializeFiltersFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    setSelectValueIfValid('sort-by', urlParams.get('sort') || 'distance', 'distance');
    setSelectValueIfValid('filter-cluster', urlParams.get('cluster') || 'all', 'all');
    setSelectValueIfValid('filter-district', urlParams.get('district') || 'all', 'all');
}

function recalculateHospitalDistances(hospitals, location) {
    if (!Array.isArray(hospitals) || !location) {
        return [];
    }

    return hospitals.map((hospital) => ({
        ...hospital,
        distance: calculateDistance(location.lat, location.lng, hospital.lat, hospital.lng)
    }));
}

function getFilteredAndSortedHospitals(hospitals, { sortBy, filterCluster, filterDistrict }) {
    const filteredData = hospitals.filter((hospital) => {
        if (filterCluster !== 'all' && hospital.cluster !== filterCluster) {
            return false;
        }

        if (filterDistrict !== 'all' && hospital.district !== filterDistrict) {
            return false;
        }

        return true;
    });

    filteredData.sort((a, b) => {
        if (sortBy === 'distance') {
            return a.distance - b.distance;
        }

        if (sortBy === 'waiting-time') {
            const timeA = parseWaitingTime(a.topWait);
            const timeB = parseWaitingTime(b.topWait);
            return timeA - timeB;
        }

        if (sortBy === 'name') {
            return a.name.localeCompare(b.name, 'zh-HK');
        }

        return 0;
    });

    return filteredData;
}

function calculateQuickStats(hospitals) {
    if (!Array.isArray(hospitals) || hospitals.length === 0) {
        return {
            fastestWait: '--',
            averageWait: '--',
            hospitalCount: '0'
        };
    }

    let fastestTime = Infinity;
    let fastestWait = '--';
    let totalMinutes = 0;
    let validCount = 0;

    hospitals.forEach((hospital) => {
        const minutes = parseWaitingTime(hospital.topWait);
        if (minutes < 999999) {
            if (minutes < fastestTime) {
                fastestTime = minutes;
                fastestWait = hospital.topWait;
            }
            totalMinutes += minutes;
            validCount += 1;
        }
    });

    let averageWait = '--';
    if (validCount > 0) {
        const avgMinutes = Math.round(totalMinutes / validCount);
        averageWait = avgMinutes < 60 ? `${avgMinutes} 分鐘` : `${(avgMinutes / 60).toFixed(1)} 小時`;
    }

    return {
        fastestWait,
        averageWait,
        hospitalCount: hospitals.length.toString()
    };
}

function normalizeWeatherWarnings(data) {
    if (!data || typeof data !== 'object') {
        return [];
    }

    if (Array.isArray(data.WTMSGC)) {
        return data.WTMSGC
            .map((warning) => warning?.name)
            .filter(Boolean);
    }

    return Object.values(data)
        .filter((warning) => warning && typeof warning === 'object')
        .map((warning) => warning.name || warning.code)
        .filter(Boolean);
}

function shouldRefreshWeather() {
    return Date.now() - lastWeatherFetchAt > 10 * 60 * 1000;
}

// Fetch 帶超時功能
async function fetchWithTimeout(url, timeout = 10000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    
    try {
        const response = await fetch(url, { 
            signal: controller.signal,
            cache: 'no-store'
        });
        clearTimeout(timeoutId);
        return response;
    } catch (error) {
        clearTimeout(timeoutId);
        if (error.name === 'AbortError') {
            throw new Error('請求超時');
        }
        throw error;
    }
}

// 初始化
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('📱 頁面開始初始化...');
        setLiveSyncState('connecting');
        
        // 安全機制：15秒後強制顯示頁面（防止卡住）
        const safetyTimeout = setTimeout(() => {
            console.warn('⚠️ 初始化超時，強制顯示頁面');
            const loadingScreen = document.getElementById('loading-screen');
            const mainContent = document.getElementById('main-content');
            if (loadingScreen && mainContent) {
                loadingScreen.classList.add('hidden');
                mainContent.classList.remove('hidden');
                
                // 顯示超時警告
                const container = document.getElementById('hospitals-container');
                if (container && !container.innerHTML) {
                    container.innerHTML = `
                        <div style="text-align: center; padding: 40px; color: #666;">
                            <h3>⚠️ 系統載入時間過長</h3>
                            <p>請檢查網絡連接後重新整理頁面</p>
                            <button onclick="location.reload()" style="margin-top: 20px; padding: 10px 20px; font-size: 16px; cursor: pointer;">
                                🔄 重新整理
                            </button>
                        </div>
                    `;
                }
            }
        }, 15000);
        
        // 主應用初始化
        initializeApp()
            .then(() => {
                clearTimeout(safetyTimeout);
                console.log('✅ 主應用初始化成功');
            })
            .catch((error) => {
                clearTimeout(safetyTimeout);
                console.error('❌ 主應用初始化失敗:', error);
                setLiveSyncState('error');
                // 即使失敗也要顯示頁面
                document.getElementById('loading-screen').classList.add('hidden');
                document.getElementById('main-content').classList.remove('hidden');
            });
        
        // 啟動實時時鐘
        startRealtimeClock();
        
        // 延遲啟動頁面計數器，不阻塞主流程
        setTimeout(() => {
            initPageViewCounter().catch((error) => {
                console.error('⚠️ 頁面計數器初始化失敗（不影響主功能）:', error);
            });
        }, 1000);
    });
}

async function initializeApp() {
    initializeFiltersFromUrl();
    document.getElementById('sort-by').addEventListener('change', renderHospitals);
    document.getElementById('filter-cluster').addEventListener('change', renderHospitals);
    document.getElementById('filter-district').addEventListener('change', renderHospitals);

    updateLoadingStatus('正在獲取您的位置...');
    await getUserLocation();
    
    updateLoadingStatus('正在連接急症室數據系統...');
    await fetchAEDData();
    
    // 檢查是否使用默認位置，顯示提示
    checkAndShowLocationPrompt();
}

// 檢查並顯示位置提示
function checkAndShowLocationPrompt() {
    if (isUsingDefaultLocation) {
        console.log('⚠️ 正在使用默認位置，顯示真實位置授權提示');
        showLocationPrompt();
    }
}

// 顯示位置授權提示
function showLocationPrompt() {
    // 檢查是否已存在提示
    if (document.getElementById('location-prompt')) {
        return;
    }
    
    // 檢查是否為 iframe 權限錯誤
    const geolocationError = localStorage.getItem('geolocationError') || '';
    const isIframePermissionsError = geolocationError.includes('Permissions policy');
    
    const prompt = document.createElement('div');
    prompt.id = 'location-prompt';
    prompt.style.cssText = `
        position: fixed;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
        background: ${isIframePermissionsError ? 'linear-gradient(135deg, #f56565 0%, #c53030 100%)' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 16px;
        max-width: 90%;
        animation: slideDown 0.3s ease-out;
    `;
    
    if (isIframePermissionsError) {
        // iframe 權限錯誤提示
        prompt.innerHTML = `
            <span style="font-size: 24px;">⚠️</span>
            <div style="flex: 1;">
                <div style="font-weight: 600; margin-bottom: 4px;">無法使用地理位置功能</div>
                <div style="font-size: 13px; opacity: 0.9; margin-bottom: 8px;">此頁面嵌入在 iframe 中，但父頁面未授予地理位置權限</div>
                <div style="font-size: 12px; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 6px; font-family: monospace;">
                    請在嵌入頁面添加：<br>
                    &lt;iframe src="..." <strong>allow="geolocation"</strong>&gt;
                </div>
            </div>
            <button id="dismiss-location-btn" style="
                background: white;
                color: #f56565;
                border: none;
                padding: 10px 16px;
                border-radius: 8px;
                cursor: pointer;
                font-weight: 600;
                font-size: 14px;
            ">知道了</button>
        `;
    } else {
        // 正常授權提示
        prompt.innerHTML = `
            <span style="font-size: 24px;">📍</span>
            <div style="flex: 1;">
                <div style="font-weight: 600; margin-bottom: 4px;">使用真實位置以獲得更準確的距離</div>
                <div style="font-size: 13px; opacity: 0.9;">目前使用香港天文台位置，點擊授權以使用您的實際位置</div>
            </div>
            <button id="enable-location-btn" style="
                background: white;
                color: #667eea;
                border: none;
                padding: 10px 20px;
                border-radius: 8px;
                font-weight: 600;
                cursor: pointer;
                font-size: 14px;
                transition: all 0.2s;
            ">授權位置</button>
            <button id="dismiss-location-btn" style="
                background: transparent;
                color: white;
                border: 1px solid rgba(255,255,255,0.3);
                padding: 10px 16px;
                border-radius: 8px;
                cursor: pointer;
                font-size: 14px;
                transition: all 0.2s;
            ">×</button>
        `;
    }
    
    // 添加動畫樣式
    if (!document.getElementById('location-prompt-styles')) {
        const style = document.createElement('style');
        style.id = 'location-prompt-styles';
        style.textContent = `
            @keyframes slideDown {
                from {
                    opacity: 0;
                    transform: translateX(-50%) translateY(-20px);
                }
                to {
                    opacity: 1;
                    transform: translateX(-50%) translateY(0);
                }
            }
            #enable-location-btn:hover {
                transform: scale(1.05);
                box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            }
            #dismiss-location-btn:hover {
                background: rgba(255,255,255,0.1);
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(prompt);
    
    // 授權位置按鈕（只在非 iframe 錯誤時存在）
    const enableBtn = document.getElementById('enable-location-btn');
    if (enableBtn) {
        enableBtn.addEventListener('click', async () => {
            await requestRealLocation();
        });
    }
    
    // 關閉按鈕
    const dismissBtn = document.getElementById('dismiss-location-btn');
    if (dismissBtn) {
        dismissBtn.addEventListener('click', () => {
            prompt.style.animation = 'slideDown 0.3s ease-out reverse';
            setTimeout(() => prompt.remove(), 300);
        });
    }
}

// 請求真實位置
async function requestRealLocation() {
    const prompt = document.getElementById('location-prompt');
    const btn = document.getElementById('enable-location-btn');
    
    if (btn) {
        btn.textContent = '正在獲取...';
        btn.disabled = true;
    }
    
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                isUsingDefaultLocation = false;
                
                console.log('✅ 成功獲取真實位置:', userLocation);
                
                // 更新緩存
                localStorage.setItem('userLocation', JSON.stringify(userLocation));
                localStorage.setItem('locationTimestamp', Date.now().toString());
                localStorage.removeItem('isDefaultLocation');
                localStorage.removeItem('geolocationError');
                
                // 重新計算距離並渲染醫院列表
                currentData = recalculateHospitalDistances(currentData, userLocation);
                renderHospitals();
                
                // 顯示成功提示
                if (prompt) {
                    prompt.style.background = 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)';
                    prompt.innerHTML = `
                        <span style="font-size: 24px;">✅</span>
                        <div style="flex: 1; font-weight: 600;">已啟用真實位置！距離計算更準確了</div>
                    `;
                    setTimeout(() => {
                        prompt.style.animation = 'slideDown 0.3s ease-out reverse';
                        setTimeout(() => prompt.remove(), 300);
                    }, 2000);
                }
            },
            (error) => {
                console.error('❌ 獲取位置失敗:', error.message);
                
                if (prompt) {
                    prompt.style.background = 'linear-gradient(135deg, #f56565 0%, #c53030 100%)';
                    prompt.innerHTML = `
                        <span style="font-size: 24px;">⚠️</span>
                        <div style="flex: 1;">
                            <div style="font-weight: 600;">無法獲取位置</div>
                            <div style="font-size: 13px; opacity: 0.9; margin-top: 4px;">
                                ${error.code === 1 ? '您拒絕了位置授權' : 
                                  error.code === 2 ? '無法取得位置資訊' : 
                                  '位置請求超時'}
                            </div>
                        </div>
                        <button onclick="this.parentElement.remove()" style="
                            background: white;
                            color: #f56565;
                            border: none;
                            padding: 8px 16px;
                            border-radius: 6px;
                            cursor: pointer;
                            font-weight: 600;
                        ">關閉</button>
                    `;
                    
                    setTimeout(() => {
                        if (prompt.parentElement) {
                            prompt.style.animation = 'slideDown 0.3s ease-out reverse';
                            setTimeout(() => prompt.remove(), 300);
                        }
                    }, 4000);
                }
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            }
        );
    } else {
        console.error('❌ 瀏覽器不支持地理位置');
        if (prompt) {
            prompt.style.background = 'linear-gradient(135deg, #f56565 0%, #c53030 100%)';
            prompt.innerHTML = `
                <span style="font-size: 24px;">❌</span>
                <div style="flex: 1; font-weight: 600;">您的瀏覽器不支持地理位置功能</div>
                <button onclick="this.parentElement.remove()" style="
                    background: white;
                    color: #f56565;
                    border: none;
                    padding: 8px 16px;
                    border-radius: 6px;
                    cursor: pointer;
                    font-weight: 600;
                ">關閉</button>
            `;
        }
    }
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
        // 檢查 URL 參數是否要求強制刷新位置
        const urlParams = new URLSearchParams(window.location.search);
        const forceRefresh = urlParams.has('refresh_location');
        
        if (forceRefresh) {
            console.log('🔄 URL參數要求強制刷新地理位置');
            localStorage.removeItem('userLocation');
            localStorage.removeItem('locationTimestamp');
        }
        
        // 檢查是否已有緩存的位置且未過期（24小時）
        const cachedLocation = localStorage.getItem('userLocation');
        const locationTimestamp = localStorage.getItem('locationTimestamp');
        
        if (cachedLocation && locationTimestamp && !forceRefresh) {
            try {
                const cacheAge = Date.now() - parseInt(locationTimestamp);
                const twentyFourHours = 24 * 60 * 60 * 1000;
                
                if (cacheAge < twentyFourHours) {
                    userLocation = JSON.parse(cachedLocation);
                    // 檢查是否為默認位置（香港天文台座標）
                    const isDefault = localStorage.getItem('isDefaultLocation') === 'true' ||
                                    (userLocation.lat === DEFAULT_LOCATION.lat && userLocation.lng === DEFAULT_LOCATION.lng);
                    isUsingDefaultLocation = isDefault;
                    const hoursLeft = Math.round((twentyFourHours - cacheAge) / 3600000);
                    const locationType = isDefault ? '⚠️ 默認位置（香港天文台）' : '✅ 真實位置';
                    console.log(`${locationType} (有效期剩餘: ${hoursLeft}小時):`, userLocation);
                    
                    // 如果是默認位置，清除緩存並重新請求
                    if (isDefault) {
                        console.log('🔄 檢測到默認位置，清除緩存並請求真實位置...');
                        localStorage.removeItem('userLocation');
                        localStorage.removeItem('locationTimestamp');
                        localStorage.removeItem('isDefaultLocation');
                        // 不返回，繼續執行下面的地理位置請求
                    } else {
                        localStorage.removeItem('geolocationError');
                        resolve();
                        return;
                    }
                } else {
                    console.log('⏰ 緩存位置已過期 (超過24小時)，重新獲取地理位置...');
                    localStorage.removeItem('userLocation');
                    localStorage.removeItem('locationTimestamp');
                    localStorage.removeItem('isDefaultLocation');
                }
            } catch (e) {
                console.log('❌ 緩存位置解析失敗，將重新獲取:', e);
                localStorage.removeItem('userLocation');
                localStorage.removeItem('locationTimestamp');
                localStorage.removeItem('isDefaultLocation');
            }
        }
        
        // 設置5秒超時（給予更多時間獲取真實位置）
        const timeout = setTimeout(() => {
            console.log('⏱️ 地理位置請求超時，使用香港天文台位置（將顯示授權提示）');
            if (!userLocation) {
                userLocation = cloneDefaultLocation();
                isUsingDefaultLocation = true;
                // 緩存默認位置（也設置 timestamp 避免重複請求）
                localStorage.setItem('userLocation', JSON.stringify(userLocation));
                localStorage.setItem('locationTimestamp', Date.now().toString());
                localStorage.setItem('isDefaultLocation', 'true');
            }
            resolve();
        }, 5000);
        
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    clearTimeout(timeout);
                    userLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    isUsingDefaultLocation = false;
                    console.log('✅ 已獲取用戶真實位置:', userLocation);
                    // 緩存用戶位置（24小時有效）
                    localStorage.setItem('userLocation', JSON.stringify(userLocation));
                    localStorage.setItem('locationTimestamp', Date.now().toString());
                    localStorage.removeItem('isDefaultLocation');
                    localStorage.removeItem('geolocationError');
                    resolve();
                },
                (error) => {
                    clearTimeout(timeout);
                    
                    // 檢查是否為 Permissions Policy 錯誤（iframe 權限問題）
                    const isPermissionsPolicyError = error.message && error.message.includes('Permissions policy');
                    
                    if (isPermissionsPolicyError) {
                        console.error('❌ iframe 權限錯誤：父頁面的 <iframe> 標籤缺少 allow="geolocation" 屬性');
                        console.error('📝 請在嵌入頁面中添加：<iframe src="..." allow="geolocation">');
                    } else {
                        console.log('⚠️ 無法獲取位置 (用戶拒絕或其他錯誤):', error.message);
                    }
                    
                    // 用戶拒絕或無法獲取，使用默認位置
                    userLocation = cloneDefaultLocation();
                    isUsingDefaultLocation = true;
                    // 緩存默認位置（也設置 timestamp 避免重複請求）
                    localStorage.setItem('userLocation', JSON.stringify(userLocation));
                    localStorage.setItem('locationTimestamp', Date.now().toString());
                    localStorage.setItem('isDefaultLocation', 'true');
                    localStorage.setItem('geolocationError', error.message);
                    resolve();
                },
                {
                    timeout: 5000,
                    enableHighAccuracy: true,
                    maximumAge: 0 // 不接受緩存，強制獲取最新位置
                }
            );
        } else {
            clearTimeout(timeout);
            console.log('❌ 瀏覽器不支持地理位置 API');
            userLocation = cloneDefaultLocation();
            isUsingDefaultLocation = true;
            localStorage.setItem('userLocation', JSON.stringify(userLocation));
            localStorage.setItem('locationTimestamp', Date.now().toString());
            localStorage.setItem('isDefaultLocation', 'true');
            resolve();
        }
    });
}

// 獲取急症室數據
async function fetchAEDData() {
    if (isFetchingAEDData) {
        console.log('⏭️ 已有急症室數據請求進行中，略過重複請求');
        return;
    }

    isFetchingAEDData = true;

    try {
        updateConnectionStatus('connecting', '正在連接...');
        setLiveSyncState('connecting');
        
        const response = await fetchWithTimeout(AED_API_URL, 10000);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: 無法獲取數據`);
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
        const mergedHospitals = data.waitTime.map((hospital) => {
            const hospCode = nameToCodeMap[hospital.hospName];
            const hospitalInfo = hospCode ? HOSPITALS_DATA[hospCode] : {
                name: hospital.hospName,
                nameEn: hospital.hospName,
                cluster: 'unknown',
                clusterName: '未知',
                district: '未知',
                address: '未知',
                phone: '未知',
                lat: DEFAULT_LOCATION.lat,
                lng: DEFAULT_LOCATION.lng,
                specialtiesWarning: null
            };
            
            return {
                ...hospital,
                ...hospitalInfo,
                hospCode: hospCode || 'unknown',
                // 以醫管局 IV/V 類 95 百分位作為主要參考值。
                topWait: hospital.t45p95 || '未有資料',
                sourceUpdateTime: data.updateTime
            };
        });

        currentData = recalculateHospitalDistances(mergedHospitals, userLocation);
        currentSourceUpdateTime = data.updateTime;
        lastSuccessfulFetchTime = new Date();
        isConnected = true;

        if (retryTimer) {
            clearTimeout(retryTimer);
            retryTimer = null;
        }
        
        // 更新最後更新時間
        updateLastUpdateTime(data.updateTime);
        
        // 渲染醫院列表
        renderHospitals();

        // 顯示主頁面，隱藏加載畫面
        document.getElementById('loading-screen').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
        
        // 更新連接狀態
        updateConnectionStatus('connected', `已連接 | 官方更新: ${formatOfficialUpdateTime(data.updateTime)}`);
        setLiveSyncState('connected');
        
        // 設置15秒後自動刷新
        scheduleRefresh();

        if (shouldRefreshWeather()) {
            fetchWeatherData().catch((weatherError) => {
                console.error('⚠️ 天氣數據更新失敗（不影響主功能）:', weatherError);
            });
        }
        
    } catch (error) {
        console.error('獲取數據失敗:', error);
        isConnected = false;
        
        // 即使失敗也要顯示主頁面，避免卡在加載畫面
        document.getElementById('loading-screen').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
        
        // 顯示友好的錯誤信息
        const errorMsg = error.message.includes('請求超時') 
            ? '連接超時，請檢查網絡連接'
            : error.message.includes('Failed to fetch') || error.message.includes('NetworkError')
            ? '網絡連接失敗，請檢查網絡設定'
            : `連接失敗: ${error.message}`;
        
        if (currentData.length > 0 && currentSourceUpdateTime) {
            updateConnectionStatus(
                'stale',
                `${errorMsg} | 顯示上次成功資料（官方更新: ${formatOfficialUpdateTime(currentSourceUpdateTime)}） | 5秒後重試`
            );
            setLiveSyncState('stale');
        } else {
            updateConnectionStatus('error', `${errorMsg} | 將在5秒後重試...`);
            setLiveSyncState('error');
        }
        
        // 在醫院列表區域顯示錯誤提示
        const container = document.getElementById('hospitals-container');
        if (container && currentData.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 40px; color: #666;">
                    <h3>⚠️ 無法連接到急症室數據系統</h3>
                    <p>${errorMsg}</p>
                    <p>系統將自動重試連接...</p>
                </div>
            `;
        }
        
        // 5秒後重試
        if (retryTimer) clearTimeout(retryTimer);
        retryTimer = setTimeout(() => {
            fetchAEDData();
        }, 5000);
    } finally {
        isFetchingAEDData = false;
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
    
    const filteredData = getFilteredAndSortedHospitals(currentData, {
        sortBy,
        filterCluster,
        filterDistrict
    });
    
    // 生成HTML with staggered animation
    if (filteredData.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #666;">
                <h3>找不到符合條件的醫院</h3>
                <p>請調整排序或篩選條件後再試。</p>
            </div>
        `;
    } else {
        container.innerHTML = filteredData.map((hospital, index) => createHospitalCard(hospital, index)).join('');
    }
    
    // 更新快速統計
    updateQuickStats(filteredData);
}

// 解析等候時間（轉換為分鐘）
function parseWaitingTime(waitStr) {
    if (!waitStr || waitStr === '未有資料' || waitStr.includes('未能')) {
        return 999999; // 未知時間排在最後
    }
    
    // 匹配 "X.X 小時" 或 "X 小時"（新格式）
    const hourMatch = waitStr.match(/([\d.]+)\s*小時/);
    if (hourMatch) {
        return parseFloat(hourMatch[1]) * 60;
    }
    
    // 匹配 "X 分鐘" 或 "X分鐘"
    const minMatch = waitStr.match(/([\d.]+)\s*分鐘/);
    if (minMatch) {
        return parseFloat(minMatch[1]);
    }
    
    // 匹配 "少於 X 分鐘"
    if (waitStr.includes('少於')) {
        const match = waitStr.match(/([\d.]+)/);
        if (match) {
            return parseFloat(match[1]);
        }
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

// 創建醫院卡片 - 世界級 UI 設計
function createHospitalCard(hospital, index) {
    const waitLevel = getWaitingTimeLevel(hospital.topWait);
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${hospital.lat},${hospital.lng}`;
    const telHref = sanitizePhoneNumber(hospital.phone);
    const distanceText = Number.isFinite(hospital.distance)
        ? `${isUsingDefaultLocation ? '約 ' : ''}${hospital.distance.toFixed(1)} 公里`
        : '未有資料';
    
    // Animation delay for staggered reveal
    const animDelay = Math.min(index * 0.05, 0.5);
    
    return `
        <div class="hospital-card" style="animation-delay: ${animDelay}s">
            <div class="hospital-header">
                <div class="hospital-name">${escapeHtml(hospital.name)}</div>
                <div class="hospital-name-en">${escapeHtml(hospital.nameEn)}</div>
                <div class="hospital-tags">
                    <span class="hospital-cluster">${escapeHtml(hospital.clusterName)}</span>
                    <span class="hospital-district">${escapeHtml(hospital.district)}</span>
                </div>
            </div>
            
            <div class="waiting-time-display wait-level-${waitLevel}">
                <div class="waiting-label">${PRIMARY_WAIT_LABEL}</div>
                <div class="waiting-time">${escapeHtml(hospital.topWait)}</div>
            </div>
            
            ${(hospital.t3p50 || hospital.t45p50) ? `
                <div class="detail-times">
                    ${hospital.t3p50 ? `
                        <div class="detail-time-item">
                            <span class="detail-time-label">${T3_WAIT_LABEL}</span>
                            <span class="detail-time-value">${escapeHtml(hospital.t3p50)}</span>
                        </div>
                    ` : ''}
                    ${hospital.t45p50 ? `
                        <div class="detail-time-item">
                            <span class="detail-time-label">${T45_WAIT_LABEL}</span>
                            <span class="detail-time-value">${escapeHtml(hospital.t45p50)}</span>
                        </div>
                    ` : ''}
                </div>
            ` : ''}
            
            <div class="hospital-distance">
                <span>📍</span>
                <span>${distanceText}</span>
            </div>
            
            <div class="hospital-info">
                <div><strong>地址</strong> ${escapeHtml(hospital.address)}</div>
                <div><strong>電話</strong> ${escapeHtml(hospital.phone)}</div>
            </div>
            
            ${hospital.specialtiesWarning ? `
                <div class="specialties-info">
                    <strong>${escapeHtml(hospital.specialtiesWarning)}</strong>
                    <div>請以醫院最新公布及分流安排為準。</div>
                </div>
            ` : ''}
            
            <div class="hospital-actions">
                <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-map">
                    <span>🗺️</span>
                    <span>導航</span>
                </a>
                <a href="${telHref ? `tel:${telHref}` : '#'}" class="btn btn-call${telHref ? '' : ' btn-disabled'}"${telHref ? '' : ' aria-disabled="true" tabindex="-1"'}>
                    <span>📞</span>
                    <span>${telHref ? '致電' : '電話待核實'}</span>
                </a>
            </div>
        </div>
    `;
}

// 更新快速統計
function updateQuickStats(hospitals = currentData) {
    const stats = calculateQuickStats(hospitals);
    const fastestEl = document.getElementById('stat-fastest');
    const averageEl = document.getElementById('stat-average');
    const hospitalsEl = document.getElementById('stat-hospitals');
    
    if (fastestEl) {
        fastestEl.textContent = stats.fastestWait;
    }
    
    if (averageEl) {
        averageEl.textContent = stats.averageWait;
    }
    
    if (hospitalsEl) {
        hospitalsEl.textContent = stats.hospitalCount;
    }
}

// 更新最後更新時間
function updateLastUpdateTime(timeStr) {
    const el = document.getElementById('last-update-time');
    if (!el) {
        return;
    }

    const formatted = formatOfficialUpdateTime(timeStr);
    el.textContent = formatted;
    el.title = `醫管局官方更新時間：${timeStr}`;
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
        // 獲取實時溫度
        const weatherUrl = 'https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc';
        const response = await fetchWithTimeout(weatherUrl, 8000);
        
        if (!response.ok) throw new Error('無法獲取天氣數據');
        
        const data = await response.json();
        const primaryStation = data.temperature?.data?.find((item) => item.place === '香港天文台') || data.temperature?.data?.[0];
        const temp = primaryStation?.value || '未知';
        
        // 獲取降雨機率（從預報數據）
        const forecastUrl = 'https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=tc';
        const forecastResponse = await fetchWithTimeout(forecastUrl, 8000);
        
        let rainChance = '未知';
        if (forecastResponse.ok) {
            const forecastData = await forecastResponse.json();
            const todayForecast = forecastData.weatherForecast?.[0];
            if (todayForecast?.PSR) {
                rainChance = todayForecast.PSR;
            }
        }
        
        document.getElementById('weather-temp').textContent = `🌡️ ${temp}°C`;
        document.getElementById('weather-desc').textContent = `🌧️ 降雨機率: ${rainChance}`;
        lastWeatherFetchAt = Date.now();
        
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
        const response = await fetchWithTimeout(WEATHER_WARNINGS_URL, 8000);
        if (!response.ok) throw new Error('無法獲取天氣警告');
        
        const data = await response.json();
        const warningsContainer = document.getElementById('weather-warnings');

        if (!warningsContainer) {
            return;
        }

        const activeWarnings = normalizeWeatherWarnings(data);
        
        if (activeWarnings.length > 0) {
            const warningsHTML = activeWarnings
                .map((warningName) => `<span class="warning-badge">${escapeHtml(warningName)}</span>`)
                .join('');
            warningsContainer.innerHTML = warningsHTML;
        } else {
            warningsContainer.innerHTML = '';
        }
        
    } catch (error) {
        console.error('獲取天氣警告失敗:', error);
    }
}

// 使用 XMLHttpRequest 獲取數據（Safari 兼容）
function fetchPageViewsXHR(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.setRequestHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        xhr.setRequestHeader('Pragma', 'no-cache');
        
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                try {
                    const data = JSON.parse(xhr.responseText);
                    resolve(data);
                } catch (e) {
                    reject(new Error('JSON 解析失敗: ' + e.message));
                }
            } else {
                reject(new Error(`HTTP ${xhr.status}: ${xhr.statusText}`));
            }
        };
        
        xhr.onerror = function() {
            reject(new Error('網絡請求失敗'));
        };
        
        xhr.ontimeout = function() {
            reject(new Error('請求超時'));
        };
        
        xhr.timeout = 10000; // 10 秒超時
        xhr.send();
    });
}

// 頁面訪問統計（全站統計）
async function initPageViewCounter() {
    const viewsCountEl = document.getElementById('views-count');
    
    try {
        console.log('🚀 開始初始化頁面計數器...');
        console.log('📱 瀏覽器:', navigator.userAgent);
        console.log('🔧 Safari 檢測:', /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent));
        
        // 首次訪問：增加計數
        // 添加時間戳參數和隨機數避免 Safari 緩存
        const timestamp = Date.now();
        const random = Math.random().toString(36).substring(7);
        const hitUrl = `/api/pageviews/hit?_t=${timestamp}&_r=${random}`;
        console.log('📡 正在請求:', hitUrl);
        
        let data;
        const isSafari = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
        
        if (isSafari) {
            console.log('🍎 使用 XMLHttpRequest（Safari 兼容模式）');
            data = await fetchPageViewsXHR(hitUrl);
        } else {
            console.log('🌐 使用 Fetch API');
            const response = await fetch(hitUrl, {
                method: 'GET',
                cache: 'no-store',
                headers: {
                    'Cache-Control': 'no-cache, no-store, must-revalidate',
                    'Pragma': 'no-cache',
                    'Expires': '0'
                }
            });
            
            console.log('📥 收到回應:', response.status, response.statusText);
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: 無法連接計數 API`);
            }
            
            data = await response.json();
        }
        
        console.log('📦 解析數據:', data);
        
        if (data && typeof data.value === 'number') {
            // 格式化數字（添加千分位符號）
            const formattedViews = data.value.toLocaleString('zh-HK');
            viewsCountEl.textContent = formattedViews;
            console.log(`✅ 全站訪問次數: ${data.value}`);
            
            // 啟動實時更新（每10秒更新一次）
            startRealtimeViewsUpdate();
        } else {
            throw new Error(`無效的 API 回應: ${JSON.stringify(data)}`);
        }
        
    } catch (error) {
        console.error('❌ 初始化頁面計數器失敗:', error);
        console.error('錯誤詳情:', error.message);
        console.error('錯誤堆疊:', error.stack);
        
        // 失敗時回退到本地統計
        try {
            console.log('⚠️ 回退到本地統計模式');
            let localViews = parseInt(localStorage.getItem('pageViews') || '0');
            localViews++;
            localStorage.setItem('pageViews', localViews.toString());
            
            const formattedViews = localViews.toLocaleString('zh-HK');
            viewsCountEl.textContent = `${formattedViews} (本地)`;
            console.log('📍 本地計數:', localViews);
        } catch (localError) {
            console.error('❌ 本地統計也失敗:', localError);
            viewsCountEl.textContent = '無法載入';
        }
    }
}

// 實時更新訪問量（不增加計數，只獲取）
async function updatePageViews() {
    const viewsCountEl = document.getElementById('views-count');
    
    try {
        // 添加時間戳和隨機數避免 Safari 緩存
        const timestamp = Date.now();
        const random = Math.random().toString(36).substring(7);
        const getUrl = `/api/pageviews/get?_t=${timestamp}&_r=${random}`;
        
        let data;
        const isSafari = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
        
        if (isSafari) {
            // Safari 使用 XHR
            data = await fetchPageViewsXHR(getUrl);
        } else {
            // 其他瀏覽器使用 Fetch
            const response = await fetch(getUrl, {
                method: 'GET',
                cache: 'no-store',
                headers: {
                    'Cache-Control': 'no-cache, no-store, must-revalidate',
                    'Pragma': 'no-cache'
                }
            });
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            
            data = await response.json();
        }
        
        if (data && typeof data.value === 'number') {
            const currentText = viewsCountEl.textContent.replace(/[^0-9]/g, '');
            const currentValue = parseInt(currentText) || 0;
            
            // 只在數字變化時更新並添加動畫
            if (data.value !== currentValue) {
                const formattedViews = data.value.toLocaleString('zh-HK');
                viewsCountEl.textContent = formattedViews;
                
                // 添加脈衝動畫
                viewsCountEl.style.transform = 'scale(1.2)';
                viewsCountEl.style.transition = 'transform 0.3s ease';
                
                setTimeout(() => {
                    viewsCountEl.style.transform = 'scale(1)';
                }, 300);
                
                console.log(`訪問量更新: ${currentValue} → ${data.value}`);
            }
        }
    } catch (error) {
        // 靜默失敗，不影響用戶體驗
        console.log('更新訪問量失敗:', error.message);
    }
}

// 啟動實時更新
function startRealtimeViewsUpdate() {
    // 每10秒更新一次訪問量
    setInterval(() => {
        updatePageViews();
    }, 10000);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        DEFAULT_LOCATION,
        PRIMARY_WAIT_LABEL,
        T3_WAIT_LABEL,
        T45_WAIT_LABEL,
        calculateDistance,
        calculateQuickStats,
        createHospitalCard,
        escapeHtml,
        formatOfficialUpdateTime,
        getFilteredAndSortedHospitals,
        getWaitingTimeLevel,
        normalizeWeatherWarnings,
        parseWaitingTime,
        recalculateHospitalDistances,
        sanitizePhoneNumber
    };
}
