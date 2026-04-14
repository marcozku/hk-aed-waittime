const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;

const TEXT_FILE_EXTENSIONS = new Set(['.html', '.js', '.css', '.json', '.svg']);
const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml; charset=utf-8',
    '.ico': 'image/x-icon'
};

const PUBLIC_FILES = new Set([
    'index.html',
    'app.js',
    'styles.css',
    'manifest.json',
    'favicon.svg',
    'favicon-16.png',
    'favicon-32.png',
    'apple-touch-icon.png',
    'icon-192.png',
    'icon-512.png'
]);

const FRAME_HEADERS = {
    'Content-Security-Policy': "frame-ancestors 'self' https://ndhaedroster.up.railway.app https://*.up.railway.app http://localhost:* http://127.0.0.1:*",
    'Permissions-Policy': 'geolocation=(self "https://ndhaedroster.up.railway.app" "https://*.up.railway.app" "http://localhost:*" "http://127.0.0.1:*")',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'X-Content-Type-Options': 'nosniff'
};

function getDataDir(env = process.env) {
    return env.RAILWAY_VOLUME_MOUNT_PATH || path.join(__dirname, 'data');
}

function getCounterFile(env = process.env) {
    return path.join(getDataDir(env), 'page-views.txt');
}

function sanitizeInitialCounterValue(rawValue) {
    const parsed = Number.parseInt(rawValue, 10);
    return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
}

function ensureDataStorage(counterFile = getCounterFile(), env = process.env) {
    const dataDir = path.dirname(counterFile);

    try {
        if (!fs.existsSync(dataDir)) {
            console.log('📁 創建數據目錄:', dataDir);
            fs.mkdirSync(dataDir, { recursive: true });
        }
    } catch (error) {
        console.error('❌ 創建數據目錄失敗:', error);
    }

    try {
        if (!fs.existsSync(counterFile)) {
            const initialValue = sanitizeInitialCounterValue(env.INITIAL_PAGE_VIEWS || '0');
            console.log('📄 創建計數器文件:', counterFile);
            console.log('📊 初始計數值:', initialValue);
            fs.writeFileSync(counterFile, initialValue.toString(), 'utf8');

            if (env.RAILWAY_ENVIRONMENT) {
                console.warn('⚠️ 警告：計數器文件不存在，創建新文件');
                console.warn('⚠️ 如果這不是首次部署，請檢查 Railway Volume 配置');
                console.warn('⚠️ 詳見：RAILWAY-VOLUME-SETUP.md');
            }
        } else {
            const currentCount = fs.readFileSync(counterFile, 'utf8').trim();
            console.log('✅ 計數器文件已存在:', counterFile);
            console.log('📊 當前計數:', currentCount);
            console.log('🎉 數據持久化正常工作！');
        }
    } catch (error) {
        console.error('❌ 初始化計數器失敗:', error);
    }

    console.log('💾 數據持久化路徑:', counterFile);
    console.log('🔧 Volume 掛載路徑:', env.RAILWAY_VOLUME_MOUNT_PATH || '未配置');
    console.log('📝 初始值設定:', sanitizeInitialCounterValue(env.INITIAL_PAGE_VIEWS || '0'));
}

function readCounter(counterFile) {
    const rawData = fs.readFileSync(counterFile, 'utf8').trim();
    const count = Number.parseInt(rawData, 10);

    if (!Number.isFinite(count) || count < 0) {
        console.warn('⚠️ 讀取到無效的計數值:', rawData);
        return 0;
    }

    return count;
}

// 使用同步文件操作，確保單進程內請求順序一致。
function incrementCounter(counterFile = getCounterFile()) {
    try {
        const count = readCounter(counterFile) + 1;
        fs.writeFileSync(counterFile, count.toString(), 'utf8');
        return count;
    } catch (error) {
        console.error('❌ 計數器錯誤:', error);
        console.error('錯誤堆疊:', error.stack);

        try {
            const currentCount = readCounter(counterFile);
            return currentCount > 0 ? currentCount : 1;
        } catch {
            return 1;
        }
    }
}

function getCounter(counterFile = getCounterFile()) {
    try {
        const count = readCounter(counterFile);
        console.log(`📊 讀取計數: ${count}`);
        return count;
    } catch (error) {
        console.error('❌ 讀取計數器錯誤:', error);
        return 0;
    }
}

function buildStaticHeaders(filePath) {
    const extname = String(path.extname(filePath)).toLowerCase();
    const headers = {
        'Content-Type': MIME_TYPES[extname] || 'application/octet-stream',
        ...FRAME_HEADERS
    };

    if (TEXT_FILE_EXTENSIONS.has(extname)) {
        headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
        headers['Pragma'] = 'no-cache';
        headers['Expires'] = '0';
    } else {
        headers['Cache-Control'] = 'public, max-age=3600';
    }

    return headers;
}

function sendJson(res, statusCode, payload) {
    res.writeHead(statusCode, {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Access-Control-Allow-Origin': '*',
        'X-Content-Type-Options': 'nosniff'
    });
    res.end(JSON.stringify(payload));
}

function sendText(res, statusCode, message) {
    res.writeHead(statusCode, {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'X-Content-Type-Options': 'nosniff'
    });
    res.end(message);
}

function resolvePublicFilePath(urlPath, baseDir = __dirname) {
    if (urlPath === '/') {
        return path.join(baseDir, 'index.html');
    }

    const relativePath = decodeURIComponent(urlPath).replace(/^\/+/, '');

    if (!relativePath || relativePath.includes('\0')) {
        return null;
    }

    if (relativePath.includes('/') || relativePath.includes('\\') || relativePath.startsWith('.')) {
        return null;
    }

    if (!PUBLIC_FILES.has(relativePath)) {
        return null;
    }

    return path.join(baseDir, relativePath);
}

function createRequestHandler(options = {}) {
    const env = options.env || process.env;
    const baseDir = options.baseDir || __dirname;
    const counterFile = options.counterFile || getCounterFile(env);

    ensureDataStorage(counterFile, env);

    return (req, res) => {
        const timestamp = new Date().toISOString();
        const requestUrl = new URL(req.url, 'http://127.0.0.1');
        const urlPath = requestUrl.pathname;

        console.log(`[${timestamp}] ${req.method} ${req.url}`);

        if (req.method !== 'GET' && req.method !== 'HEAD') {
            res.writeHead(405, { Allow: 'GET, HEAD' });
            res.end();
            return;
        }

        if (urlPath === '/api/pageviews/hit') {
            const count = incrementCounter(counterFile);
            sendJson(res, 200, { value: count });
            return;
        }

        if (urlPath === '/api/pageviews/get') {
            const count = getCounter(counterFile);
            sendJson(res, 200, { value: count });
            return;
        }

        if (urlPath.includes('..') || urlPath.startsWith('/.')) {
            sendText(res, 403, 'Forbidden');
            return;
        }

        const filePath = resolvePublicFilePath(urlPath, baseDir);

        if (!filePath) {
            sendText(res, 404, 'Not Found');
            return;
        }

        fs.readFile(filePath, (error, content) => {
            if (error) {
                if (error.code === 'ENOENT') {
                    sendText(res, 404, 'Not Found');
                    return;
                }

                console.error('❌ 讀取靜態文件失敗:', error);
                sendText(res, 500, `Server Error: ${error.code}`);
                return;
            }

            const headers = buildStaticHeaders(filePath);
            res.writeHead(200, headers);

            if (req.method === 'HEAD') {
                res.end();
                return;
            }

            res.end(content);
        });
    };
}

function createServer(options = {}) {
    return http.createServer(createRequestHandler(options));
}

if (require.main === module) {
    const server = createServer();
    server.listen(PORT, '0.0.0.0', () => {
        console.log(`Server running at http://0.0.0.0:${PORT}/`);
    });
}

module.exports = {
    PUBLIC_FILES,
    createRequestHandler,
    createServer,
    ensureDataStorage,
    getCounter,
    getCounterFile,
    incrementCounter,
    resolvePublicFilePath
};
