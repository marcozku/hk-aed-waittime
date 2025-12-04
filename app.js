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
        district: '九龍',
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
        district: '九龍',
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
        district: '九龍',
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

// API URLs - 醫管局 API 已於 2025-10-13 更新
const AED_API_URL = 'https://www.ha.org.hk/opendata/aed/aedwtdata2-tc.json';
const WEATHER_WARNINGS_URL = 'https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=warnsum&lang=tc';

// Fetch 帶超時功能
async function fetchWithTimeout(url, timeout = 10000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    
    try {
        const response = await fetch(url, { 
            signal: controller.signal,
            cache: 'no-cache'
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
document.addEventListener('DOMContentLoaded', () => {
    console.log('📱 頁面開始初始化...');
    
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
        .catch(error => {
            clearTimeout(safetyTimeout);
            console.error('❌ 主應用初始化失敗:', error);
            // 即使失敗也要顯示頁面
            document.getElementById('loading-screen').classList.add('hidden');
            document.getElementById('main-content').classList.remove('hidden');
        });
    
    // 啟動實時時鐘
    startRealtimeClock();
    
    // 延遲啟動頁面計數器，不阻塞主流程
    setTimeout(() => {
        initPageViewCounter().catch(error => {
            console.error('⚠️ 頁面計數器初始化失敗（不影響主功能）:', error);
        });
    }, 1000);
});

async function initializeApp() {
    updateLoadingStatus('正在獲取您的位置...');
    await getUserLocation();
    
    updateLoadingStatus('正在連接急症室數據系統...');
    await fetchAEDData();
    
    // 從 URL 參數或預設為距離排序
    const urlParams = new URLSearchParams(window.location.search);
    const defaultSort = urlParams.get('sort') || 'distance';
    const defaultCluster = urlParams.get('cluster') || 'all';
    const defaultDistrict = urlParams.get('district') || 'all';
    
    document.getElementById('sort-by').value = defaultSort;
    document.getElementById('filter-cluster').value = defaultCluster;
    document.getElementById('filter-district').value = defaultDistrict;
    
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
                    const hoursLeft = Math.round((twentyFourHours - cacheAge) / 3600000);
                    console.log(`✅ 使用緩存的位置 (有效期剩餘: ${hoursLeft}小時):`, userLocation);
                    resolve();
                    return;
                } else {
                    console.log('⏰ 緩存位置已過期 (超過24小時)，重新獲取地理位置...');
                    localStorage.removeItem('userLocation');
                    localStorage.removeItem('locationTimestamp');
                }
            } catch (e) {
                console.log('❌ 緩存位置解析失敗，將重新獲取:', e);
                localStorage.removeItem('userLocation');
                localStorage.removeItem('locationTimestamp');
            }
        }
        
        // 設置3秒超時（減少等待時間）
        const timeout = setTimeout(() => {
            console.log('⏱️ 地理位置請求超時，使用香港天文台位置');
            if (!userLocation) {
                userLocation = { lat: 22.3019, lng: 114.1742 };
                // 緩存默認位置（也設置 timestamp 避免重複請求）
                localStorage.setItem('userLocation', JSON.stringify(userLocation));
                localStorage.setItem('locationTimestamp', Date.now().toString());
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
                    console.log('⚠️ 無法獲取位置 (可能在 iframe 中或用戶拒絕)，使用香港天文台位置', error.message);
                    // 用戶拒絕或無法獲取，使用默認位置
                    userLocation = { lat: 22.3019, lng: 114.1742 };
                    // 緩存默認位置（也設置 timestamp 避免重複請求）
                    localStorage.setItem('userLocation', JSON.stringify(userLocation));
                    localStorage.setItem('locationTimestamp', Date.now().toString());
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
            console.log('❌ 瀏覽器不支持地理位置 API');
            userLocation = { lat: 22.3019, lng: 114.1742 };
            localStorage.setItem('userLocation', JSON.stringify(userLocation));
            localStorage.setItem('locationTimestamp', Date.now().toString());
            resolve();
        }
    });
}

// 獲取急症室數據
async function fetchAEDData() {
    try {
        updateConnectionStatus('connecting', '正在連接...');
        
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
                // 使用 t45p95 作為最長等候時間（次緊急/非緊急類別）
                topWait: hospital.t45p95 || '未有資料',
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
        
        // 即使失敗也要顯示主頁面，避免卡在加載畫面
        document.getElementById('loading-screen').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
        
        // 顯示友好的錯誤信息
        const errorMsg = error.message.includes('請求超時') 
            ? '連接超時，請檢查網絡連接'
            : error.message.includes('Failed to fetch') || error.message.includes('NetworkError')
            ? '網絡連接失敗，請檢查網絡設定'
            : `連接失敗: ${error.message}`;
        
        updateConnectionStatus('error', `${errorMsg} | 將在5秒後重試...`);
        
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
    
    // 生成HTML with staggered animation
    container.innerHTML = filteredData.map((hospital, index) => createHospitalCard(hospital, index)).join('');
    
    // 更新快速統計
    updateQuickStats();
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
    
    // Animation delay for staggered reveal
    const animDelay = Math.min(index * 0.05, 0.5);
    
    return `
        <div class="hospital-card" style="animation-delay: ${animDelay}s">
            <div class="hospital-header">
                <div class="hospital-name">${hospital.name}</div>
                <div class="hospital-name-en">${hospital.nameEn}</div>
                <div class="hospital-tags">
                    <span class="hospital-cluster">${hospital.clusterName}</span>
                    <span class="hospital-district">${hospital.district}</span>
                </div>
            </div>
            
            <div class="waiting-time-display wait-level-${waitLevel}">
                <div class="waiting-label">預計等候時間</div>
                <div class="waiting-time">${hospital.topWait}</div>
            </div>
            
            ${(hospital.t3p50 || hospital.t45p50) ? `
                <div class="detail-times">
                    ${hospital.t3p50 ? `
                        <div class="detail-time-item">
                            <span class="detail-time-label">🟡 緊急</span>
                            <span class="detail-time-value">${hospital.t3p50}</span>
                        </div>
                    ` : ''}
                    ${hospital.t45p50 ? `
                        <div class="detail-time-item">
                            <span class="detail-time-label">🔵 次緊急</span>
                            <span class="detail-time-value">${hospital.t45p50}</span>
                        </div>
                    ` : ''}
                </div>
            ` : ''}
            
            <div class="hospital-distance">
                <span>📍</span>
                <span>${hospital.distance.toFixed(1)} 公里</span>
            </div>
            
            <div class="hospital-info">
                <div><strong>地址</strong> ${hospital.address}</div>
                <div><strong>電話</strong> ${hospital.phone}</div>
            </div>
            
            ${hospital.specialtiesWarning ? `
                <div class="specialties-info">
                    <strong>${hospital.specialtiesWarning}</strong>
                </div>
            ` : ''}
            
            <div class="hospital-actions">
                <a href="${mapUrl}" target="_blank" class="btn btn-map">
                    <span>🗺️</span>
                    <span>導航</span>
                </a>
                <a href="tel:${hospital.phone.replace(/\s/g, '')}" class="btn btn-call">
                    <span>📞</span>
                    <span>致電</span>
                </a>
            </div>
        </div>
    `;
}

// 更新快速統計
function updateQuickStats() {
    if (currentData.length === 0) return;
    
    // 計算最短等候時間
    let fastestTime = Infinity;
    let fastestHospital = '';
    let totalMinutes = 0;
    let validCount = 0;
    
    currentData.forEach(hospital => {
        const minutes = parseWaitingTime(hospital.topWait);
        if (minutes < 999999) {
            if (minutes < fastestTime) {
                fastestTime = minutes;
                fastestHospital = hospital.topWait;
            }
            totalMinutes += minutes;
            validCount++;
        }
    });
    
    // 更新 UI
    const fastestEl = document.getElementById('stat-fastest');
    const averageEl = document.getElementById('stat-average');
    const hospitalsEl = document.getElementById('stat-hospitals');
    
    if (fastestEl && fastestTime < Infinity) {
        fastestEl.textContent = fastestHospital;
    }
    
    if (averageEl && validCount > 0) {
        const avgMinutes = Math.round(totalMinutes / validCount);
        if (avgMinutes < 60) {
            averageEl.textContent = `${avgMinutes} 分鐘`;
        } else {
            const hours = (avgMinutes / 60).toFixed(1);
            averageEl.textContent = `${hours} 小時`;
        }
    }
    
    if (hospitalsEl) {
        hospitalsEl.textContent = currentData.length.toString();
    }
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
        // 獲取實時溫度
        const weatherUrl = 'https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc';
        const response = await fetchWithTimeout(weatherUrl, 8000);
        
        if (!response.ok) throw new Error('無法獲取天氣數據');
        
        const data = await response.json();
        const temp = data.temperature?.data?.[0]?.value || '未知';
        
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


