# 🔧 Railway Volume 配置指南

## ⚠️ 重要說明

Railway 的容器文件系統是**臨時的**，每次重新部署時會被清除。
要讓訪問計數永久保存，**必須配置 Volume**。

---

## 📋 配置步驟（約 2 分鐘）

### 步驟 1：進入 Railway Dashboard

1. 登入 https://railway.app/
2. 選擇你的項目（hk-aed-waittime）
3. 點擊你的服務（Service）

### 步驟 2：添加 Volume

1. 點擊上方的「**Settings**」標籤
2. 向下滾動找到「**Volumes**」部分
3. 點擊「**+ New Volume**」按鈕

### 步驟 3：配置 Volume

填入以下信息：

```
Mount Path: /app/data
```

**重要：** 路徑必須是 `/app/data`（不是 `./data` 或其他）

### 步驟 4：保存並重新部署

1. 點擊「**Add**」或「**Save**」
2. Railway 會自動觸發重新部署
3. 等待 1-2 分鐘部署完成

---

## ✅ 驗證 Volume 是否工作

部署完成後，查看 Railway Logs：

**成功的日誌：**
```
✅ 計數器文件已存在: /app/data/page-views.txt
📊 當前計數: 123
💾 數據持久化路徑: /app/data/page-views.txt
```

**如果 Volume 未配置（會看到）：**
```
📁 創建數據目錄: /app/data
📄 創建計數器文件: /app/data/page-views.txt
💾 數據持久化路徑: /app/data/page-views.txt
```
然後下次部署又從 0 開始。

---

## 📊 測試持久化

1. 記下當前訪問量（例如：123）
2. 在 Railway Dashboard 點擊「**Redeploy**」
3. 等待部署完成
4. 刷新網站
5. **訪問量應該從 123 繼續，而不是重置為 0**

---

## 🚨 如果配置後還是重置

### 檢查 1：確認 Mount Path

在 Railway Dashboard → Settings → Volumes 確認：
- Mount Path 必須是：`/app/data`
- ✅ 正確：`/app/data`
- ❌ 錯誤：`./data` 或 `/data` 或 `data/`

### 檢查 2：查看環境變量

在 Railway Dashboard → Variables 查看是否有：
```
RAILWAY_VOLUME_MOUNT_PATH
```

這個變量由 Railway 自動設置，不需要手動添加。

### 檢查 3：檢查 Railway Logs

搜尋關鍵字：`💾 數據持久化路徑`

應該看到：
```
💾 數據持久化路徑: /app/data/page-views.txt
```

如果看到 `./data/page-views.txt`，表示 Volume 未正確掛載。

---

## 🎯 Volume 的好處

✅ **持久化**：數據在重新部署後保留  
✅ **可靠性**：即使容器重啟，數據也不會丟失  
✅ **獨立性**：刪除代碼不會影響數據  
✅ **可管理**：可以在 Railway Dashboard 中管理 Volume  

---

## 📝 管理 Volume

### 查看 Volume 使用情況
Settings → Volumes → 點擊 Volume 名稱

### 刪除 Volume（重置計數）
Settings → Volumes → 點擊刪除圖示

**注意：** 刪除 Volume 會永久刪除所有數據，包括訪問計數！

### 備份數據
目前沒有直接備份功能，但數據很簡單：
- 文件：`/app/data/page-views.txt`
- 內容：一個數字（例如：`123`）

---

## 💡 無法配置 Volume 的替代方案

如果你的 Railway 計劃不支持 Volume，可以使用環境變量設置初始值：

1. 在 Railway Dashboard → Variables 添加：
   ```
   INITIAL_PAGE_VIEWS=100
   ```

2. 每次重新部署會從 100 開始計數

但這不是永久解決方案，仍建議配置 Volume。

---

## 🆘 需要幫助？

Railway Volume 文檔：
https://docs.railway.app/reference/volumes

如果仍有問題，請檢查：
1. Railway 計劃是否支持 Volumes
2. Mount Path 是否正確（`/app/data`）
3. Railway Logs 中的錯誤信息

