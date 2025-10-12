# 數據持久化說明

## 📦 頁面訪問計數器持久化

### 存儲位置

**Railway 生產環境：**
```
/app/data/page-views.txt
```
使用 Railway Volume 持久化存儲

**本地開發環境：**
```
./data/page-views.txt
```

### 配置說明

#### railway.json
```json
"volumes": [
  {
    "mountPath": "/app/data",
    "name": "pageviews-data"
  }
]
```

#### server.js
```javascript
const DATA_DIR = process.env.RAILWAY_VOLUME_MOUNT_PATH || path.join(__dirname, 'data');
const COUNTER_FILE = path.join(DATA_DIR, 'page-views.txt');
```

### 持久化保證

✅ **重新部署**：計數器不會重置  
✅ **應用重啟**：數據保持不變  
✅ **代碼更新**：訪問量持續累積  

### Railway Volume 設置

Railway 會自動創建並掛載 Volume。首次部署後：
1. Volume 會自動創建
2. 數據將永久保存
3. 即使刪除並重新部署，Volume 數據仍然存在（除非手動刪除 Volume）

### 查看當前計數

訪問 API 端點：
```
https://你的網址/api/pageviews/get
```

返回：
```json
{"value": 12345}
```

### 重置計數（僅供管理）

如需重置，需在 Railway Dashboard 中：
1. 進入 Service → Volumes
2. 刪除 `pageviews-data` Volume
3. 重新部署應用

---

**注意：** Volume 數據獨立於應用代碼，代碼更新不會影響已保存的數據。

