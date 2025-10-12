# Railway 設置指南

## 🔧 手動配置 Railway Volume（數據持久化）

### 重要！計數器會在重新部署時重置的解決方案

Railway 的臨時文件系統在每次部署時會被清除。要保持訪問計數，需要手動配置 Volume：

### 步驟 1：在 Railway Dashboard 添加 Volume

1. 進入你的 Railway 項目
2. 點擊你的服務（Service）
3. 進入「**Settings**」標籤
4. 找到「**Volumes**」部分
5. 點擊「**+ New Volume**」
6. 配置：
   - **Mount Path**: `/app/data`
   - **Name**: `pageviews-data`
7. 點擊「**Add Volume**」

### 步驟 2：添加環境變量（可選）

如果 Volume 路徑不同，可以設置環境變量：

1. 進入「**Variables**」標籤
2. 添加變量：
   ```
   RAILWAY_VOLUME_MOUNT_PATH=/app/data
   ```

### 步驟 3：重新部署

1. 返回「**Deployments**」標籤
2. 點擊「**Deploy**」重新部署

---

## 📊 驗證 Volume 是否工作

部署完成後，查看日誌應該看到：

```
📁 創建數據目錄: /app/data
📄 創建計數器文件: /app/data/page-views.txt
💾 數據持久化路徑: /app/data/page-views.txt
```

或者（如果已存在）：

```
✅ 計數器文件已存在: /app/data/page-views.txt
📊 當前計數: 123
💾 數據持久化路徑: /app/data/page-views.txt
```

---

## 🚨 臨時解決方案（如果無法配置 Volume）

如果無法配置 Volume，可以使用環境變量存儲初始計數：

1. 在 Railway Variables 中添加：
   ```
   INITIAL_PAGE_VIEWS=100
   ```
   
2. 這樣每次重新部署會從 100 開始計數，而不是從 0 開始

---

## 🔍 診斷問題

如果計數器仍然重置，檢查：

1. **查看 Railway 日誌**
   - 搜尋「數據持久化路徑」
   - 確認使用的是 `/app/data/` 而不是 `./data/`

2. **確認 Volume 已掛載**
   - 在 Settings → Volumes 中確認 Volume 存在
   - Mount Path 必須是 `/app/data`

3. **檢查文件權限**
   - Railway 應該自動處理權限問題
   - 如果有權限錯誤，會在日誌中顯示

---

## 💡 為什麼需要 Volume？

Railway 使用**容器化部署**：
- ✅ 每次部署都會創建新容器
- ❌ 容器內的文件在重新部署時會被刪除
- ✅ Volume 提供持久化存儲，獨立於容器生命週期
- ✅ 即使容器重啟或重新部署，Volume 中的數據都會保留

---

需要協助？請查看 Railway 官方文檔：
https://docs.railway.app/reference/volumes

