const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;
const COUNTER_FILE = path.join(__dirname, 'page-views.txt');

// 初始化計數器文件
try {
    if (!fs.existsSync(COUNTER_FILE)) {
        console.log('創建計數器文件:', COUNTER_FILE);
        fs.writeFileSync(COUNTER_FILE, '0');
    } else {
        console.log('計數器文件已存在:', COUNTER_FILE);
        const currentCount = fs.readFileSync(COUNTER_FILE, 'utf8');
        console.log('當前計數:', currentCount);
    }
} catch (error) {
    console.error('初始化計數器失敗:', error);
}

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
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html';
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                // 文件不存在，返回 index.html
                fs.readFile('./index.html', (error, content) => {
                    if (error) {
                        res.writeHead(500);
                        res.end('Error loading index.html');
                    } else {
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        res.end(content, 'utf-8');
                    }
                });
            } else {
                res.writeHead(500);
                res.end('Server Error: ' + error.code);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}/`);
});

