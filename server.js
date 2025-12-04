const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;

// 使用持久化目錄（Railway Volume 或本地 data 目錄）
const DATA_DIR = process.env.RAILWAY_VOLUME_MOUNT_PATH || path.join(__dirname, 'data');
const COUNTER_FILE = path.join(DATA_DIR, 'page-views.txt');

// 確保數據目錄存在
try {
    if (!fs.existsSync(DATA_DIR)) {
        console.log('📁 創建數據目錄:', DATA_DIR);
        fs.mkdirSync(DATA_DIR, { recursive: true });
    }
} catch (error) {
    console.error('❌ 創建數據目錄失敗:', error);
}

// 初始化計數器文件
try {
    if (!fs.existsSync(COUNTER_FILE)) {
        // 使用環境變量的初始值（如果 Volume 未配置）
        const initialValue = process.env.INITIAL_PAGE_VIEWS || '0';
        console.log('📄 創建計數器文件:', COUNTER_FILE);
        console.log('📊 初始計數值:', initialValue);
        fs.writeFileSync(COUNTER_FILE, initialValue);
        
        // 警告：如果多次看到這個消息，說明 Volume 未正確配置
        if (process.env.RAILWAY_ENVIRONMENT) {
            console.warn('⚠️ 警告：計數器文件不存在，創建新文件');
            console.warn('⚠️ 如果這不是首次部署，請檢查 Railway Volume 配置');
            console.warn('⚠️ 詳見：RAILWAY-VOLUME-SETUP.md');
        }
    } else {
        console.log('✅ 計數器文件已存在:', COUNTER_FILE);
        const currentCount = fs.readFileSync(COUNTER_FILE, 'utf8');
        console.log('📊 當前計數:', currentCount);
        console.log('🎉 數據持久化正常工作！');
    }
} catch (error) {
    console.error('❌ 初始化計數器失敗:', error);
}

console.log('💾 數據持久化路徑:', COUNTER_FILE);
console.log('🔧 Volume 掛載路徑:', process.env.RAILWAY_VOLUME_MOUNT_PATH || '未配置');
console.log('📝 初始值設定:', process.env.INITIAL_PAGE_VIEWS || '0 (默認)');

// MIME types
const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

// 讀取並增加計數器（帶文件鎖保護）
function incrementCounter() {
    try {
        // 讀取當前值
        const rawData = fs.readFileSync(COUNTER_FILE, 'utf8').trim();
        console.log('📖 讀取原始數據:', `"${rawData}"`);
        
        let count = parseInt(rawData);
        
        // 驗證解析結果
        if (isNaN(count) || count < 0) {
            console.warn('⚠️ 無效的計數值，重置為 0');
            count = 0;
        }
        
        console.log('🔢 解析後的計數:', count);
        
        // 增加計數
        count++;
        
        // 寫回文件
        fs.writeFileSync(COUNTER_FILE, count.toString(), 'utf8');
        
        // 驗證寫入
        const verify = fs.readFileSync(COUNTER_FILE, 'utf8').trim();
        console.log(`✅ 計數器增加: ${count}, 驗證: ${verify}`);
        
        return count;
    } catch (error) {
        console.error('❌ 計數器錯誤:', error);
        console.error('錯誤堆疊:', error.stack);
        
        // 嘗試讀取當前值返回，而不是返回 0
        try {
            const currentCount = parseInt(fs.readFileSync(COUNTER_FILE, 'utf8') || '0');
            return isNaN(currentCount) ? 1 : currentCount;
        } catch {
            return 1; // 錯誤時返回 1 而不是 0
        }
    }
}

// 只讀取計數器（不增加）
function getCounter() {
    try {
        const rawData = fs.readFileSync(COUNTER_FILE, 'utf8').trim();
        const count = parseInt(rawData);
        
        if (isNaN(count) || count < 0) {
            console.warn('⚠️ 讀取到無效的計數值:', rawData);
            return 0;
        }
        
        console.log(`📊 讀取計數: ${count}`);
        return count;
    } catch (error) {
        console.error('❌ 讀取計數器錯誤:', error);
        return 0;
    }
}

const server = http.createServer((req, res) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url}`);

    // 解析 URL（移除查詢字符串用於路由判斷）
    const urlPath = req.url.split('?')[0];

    // API 端點：獲取並增加訪問計數
    if (urlPath === '/api/pageviews/hit') {
        console.log('🔥 API hit 端點被調用');
        const count = incrementCounter();
        const response = { value: count };
        res.writeHead(200, { 
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0',
            'Access-Control-Allow-Origin': '*'
        });
        res.end(JSON.stringify(response));
        console.log('✅ 返回計數:', response);
        return;
    }

    // API 端點：只獲取訪問計數（不增加）
    if (urlPath === '/api/pageviews/get') {
        console.log('📊 API get 端點被調用');
        const count = getCounter();
        const response = { value: count };
        res.writeHead(200, { 
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0',
            'Access-Control-Allow-Origin': '*'
        });
        res.end(JSON.stringify(response));
        console.log('✅ 返回計數:', response);
        return;
    }

    // 處理根路徑
    // 移除查詢字符串（例如 ?v=3.0）
    const urlWithoutQuery = req.url.split('?')[0];
    let filePath = '.' + urlWithoutQuery;
    
    if (filePath === './') {
        filePath = './index.html';
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';
    
    console.log(`📂 請求文件: ${req.url} -> ${filePath}`);

    // v2.0: Allow iframe embedding from roster app
    const frameHeaders = {
        'X-Frame-Options': 'SAMEORIGIN',
        'Content-Security-Policy': "frame-ancestors 'self' https://ndhaedroster.up.railway.app https://ndhaedduty.up.railway.app https://*.up.railway.app http://localhost:* http://127.0.0.1:*"
    };

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                // 文件不存在，返回 index.html
                fs.readFile('./index.html', (error, content) => {
                    if (error) {
                        res.writeHead(500);
                        res.end('Error loading index.html');
                    } else {
                        res.writeHead(200, { 
                            'Content-Type': 'text/html',
                            'Cache-Control': 'no-cache, no-store, must-revalidate',
                            'Pragma': 'no-cache',
                            'Expires': '0',
                            ...frameHeaders
                        });
                        res.end(content, 'utf-8');
                    }
                });
            } else {
                res.writeHead(500);
                res.end('Server Error: ' + error.code);
            }
        } else {
            // 為 JavaScript 和 HTML 文件設置不緩存
            const headers = { 'Content-Type': contentType, ...frameHeaders };
            if (extname === '.js' || extname === '.html') {
                headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
                headers['Pragma'] = 'no-cache';
                headers['Expires'] = '0';
            } else {
                // 其他靜態資源可以緩存 1 小時
                headers['Cache-Control'] = 'public, max-age=3600';
            }
            
            res.writeHead(200, headers);
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}/`);
});

