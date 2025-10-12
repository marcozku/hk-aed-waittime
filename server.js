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
        console.log('📄 創建計數器文件:', COUNTER_FILE);
        fs.writeFileSync(COUNTER_FILE, '0');
    } else {
        console.log('✅ 計數器文件已存在:', COUNTER_FILE);
        const currentCount = fs.readFileSync(COUNTER_FILE, 'utf8');
        console.log('📊 當前計數:', currentCount);
    }
} catch (error) {
    console.error('❌ 初始化計數器失敗:', error);
}

console.log('💾 數據持久化路徑:', COUNTER_FILE);

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

// 讀取並增加計數器
function incrementCounter() {
    try {
        let count = parseInt(fs.readFileSync(COUNTER_FILE, 'utf8') || '0');
        count++;
        fs.writeFileSync(COUNTER_FILE, count.toString());
        console.log(`✅ 計數器增加: ${count}`);
        return count;
    } catch (error) {
        console.error('❌ 計數器錯誤:', error);
        return 0;
    }
}

// 只讀取計數器（不增加）
function getCounter() {
    try {
        const count = parseInt(fs.readFileSync(COUNTER_FILE, 'utf8') || '0');
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

    // API 端點：獲取並增加訪問計數
    if (req.url === '/api/pageviews/hit') {
        console.log('🔥 API hit 端點被調用');
        const count = incrementCounter();
        const response = { value: count };
        res.writeHead(200, { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        res.end(JSON.stringify(response));
        console.log('✅ 返回計數:', response);
        return;
    }

    // API 端點：只獲取訪問計數（不增加）
    if (req.url === '/api/pageviews/get') {
        console.log('📊 API get 端點被調用');
        const count = getCounter();
        const response = { value: count };
        res.writeHead(200, { 
            'Content-Type': 'application/json',
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
                            'Expires': '0'
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
            const headers = { 'Content-Type': contentType };
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

