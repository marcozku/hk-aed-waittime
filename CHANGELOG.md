# 香港急症室等候時間顯示系統 - 更新日誌

## v8.1.1 (2025-12-05 01:29 HKT)

### 🔒 iframe 地理位置權限修復

**問題**：嵌入到 iframe 時，瀏覽器 Permissions Policy 阻止地理位置訪問
```
Permissions policy violation: Geolocation access has been blocked
```

**修復內容**：
- ✅ **添加 Permissions-Policy header** - 允許 iframe 中使用地理位置
- ✅ **完整嵌入指南文檔** - `EMBEDDING-GUIDE.md` 提供詳細使用說明
- ✅ **白名單配置** - 允許以下來源嵌入時使用地理位置：
  - `https://ndhaedroster.up.railway.app`
  - `https://*.up.railway.app`
  - `http://localhost:*` (開發環境)
  - `http://127.0.0.1:*` (開發環境)

### 📝 技術細節

**Server.js 配置**：
```javascript
const frameHeaders = {
    'Content-Security-Policy': "frame-ancestors 'self' https://ndhaedroster.up.railway.app ...",
    'Permissions-Policy': 'geolocation=(self "https://ndhaedroster.up.railway.app" ...)'
};
```

**正確的嵌入方式**：
```html
<!-- 必須添加 allow="geolocation" 屬性！ -->
<iframe 
    src="https://hkaedwaittime.up.railway.app/" 
    allow="geolocation"
    width="100%" 
    height="800">
</iframe>
```

### 🎯 使用說明

查看 `EMBEDDING-GUIDE.md` 獲取：
- ✅ 完整嵌入範例（HTML / React / Next.js）
- ✅ URL 參數說明
- ✅ 常見問題排查
- ✅ 響應式設計範例

---

## v8.1 (2025-12-05 01:24 HKT)

### 🔧 地理位置緩存過期檢查修復

**問題**：嵌入到 ndhaedduty app 時，地理位置數據無法正確載入用於實時最近醫院排序

**根本原因**：
- ❌ `getUserLocation()` 雖然儲存了 `locationTimestamp`，但從未檢查它是否過期
- ❌ 緩存的位置可能已經過期數天/數週，但仍然被使用
- ❌ 在 iframe 或嵌入環境中，舊的緩存數據導致距離計算不準確

**修復內容**：
- ✅ **緩存過期檢查** - 現在正確檢查 24 小時緩存過期時間
- ✅ **自動清除過期緩存** - 過期後自動重新請求地理位置
- ✅ **強制刷新支援** - 新增 URL 參數 `?refresh_location=1` 強制刷新位置
- ✅ **改善錯誤處理** - 在所有錯誤情況下都正確設置 timestamp
- ✅ **更好的日誌** - 添加 emoji 圖標和剩餘有效期顯示

### 📝 技術細節
```javascript
// 檢查緩存是否在 24 小時內
const cacheAge = Date.now() - parseInt(locationTimestamp);
const twentyFourHours = 24 * 60 * 60 * 1000;

if (cacheAge < twentyFourHours) {
    // 使用緩存
    console.log(`✅ 使用緩存的位置 (有效期剩餘: ${hoursLeft}小時)`);
} else {
    // 過期，重新獲取
    console.log('⏰ 緩存位置已過期 (超過24小時)，重新獲取地理位置...');
    localStorage.removeItem('userLocation');
    localStorage.removeItem('locationTimestamp');
}
```

### 🔗 使用方式
- 正常訪問：自動使用緩存位置（24小時內有效）
- 強制刷新：`https://your-app.com/?refresh_location=1`
- 嵌入使用：`<iframe src="https://your-app.com/?refresh_location=1">`

### 🎯 影響範圍
- ✅ 修復嵌入環境中的地理位置問題
- ✅ 確保最近醫院排序始終準確
- ✅ 避免使用過期的位置數據

---

## v2.0.2 (2025-12-05 01:16 HKT)

### 🎯 預設排序優化與 URL 參數支援
- ✅ **預設排序改為距離** - 明確設置預設排序為最近距離
- ✅ **URL 參數支援** - 支援透過 URL 參數設置預設排序和篩選
  - `?sort=distance` - 距離排序（預設）
  - `?sort=waiting-time` - 等候時間排序
  - `?sort=name` - 名稱排序
  - `?cluster=NTE` - 篩選聯網
  - `?district=新界` - 篩選地區
- ✅ **嵌入模式相容** - 完美支援從 ndh-aed-roster 嵌入時的參數傳遞
- ✅ **用戶體驗提升** - 確保用戶首次進入時看到離自己最近的醫院

### 📝 技術細節
```javascript
// 在 initializeApp() 中支援 URL 參數或預設為距離
const urlParams = new URLSearchParams(window.location.search);
const defaultSort = urlParams.get('sort') || 'distance';
const defaultCluster = urlParams.get('cluster') || 'all';
const defaultDistrict = urlParams.get('district') || 'all';
```

### 🔗 使用範例
- `https://your-app.com/` - 預設距離排序
- `https://your-app.com/?sort=waiting-time` - 等候時間排序
- `https://your-app.com/?sort=distance&cluster=NTE` - 新界東聯網，距離排序

---

## v2.0.0 (2025-12-04 17:55 HKT)

### 🎨 World-Class UI/UX 全新設計

**靈感來源：** Apple Health, Uber, Airbnb 頂級應用設計

#### ✨ 視覺設計革新
- 🌙 **Premium 深色主題** - 減少眼睛疲勞，現代感十足
- 🌈 **Ambient 背景效果** - 動態漸變光暈，增添深度
- 💎 **Glassmorphism 設計語言** - 毛玻璃效果，層次分明
- 🎭 **微妙動畫系統** - 順滑的入場動畫和交互反饋

#### 🏥 全新醫院卡片設計
- 📊 **重新設計的等候時間顯示** - 大字體醒目顯示
- 🏷️ **精緻標籤系統** - 聯網和地區標籤
- 📈 **詳細時間分類** - 緊急/次緊急中位數
- 🎯 **懸停效果** - 頂部強調線條動畫

#### 📊 新增快速統計儀表板
- ⚡ **最短等候時間** - 即時顯示最快醫院
- 📊 **平均等候時間** - 全港平均統計
- 🏥 **監測醫院數** - 實時監控數量

#### 🎛️ 優化篩選器
- 💊 **Pill 樣式選擇器** - 圓角現代設計
- 🔍 **即時篩選** - 無刷新動態過濾
- 📱 **橫向滾動** - 手機友好操作

#### 🎬 動畫系統
- 🎪 **Staggered 入場動畫** - 卡片依次淡入
- 💫 **Live 脈動指示器** - 實時更新視覺提示
- 🌊 **平滑過渡** - 所有交互0.3s動畫
- ⚡ **Reduced Motion 支援** - 無障礙優化

#### 🔤 Typography 升級
- 📝 **Noto Sans TC** 字體 - 專為中文優化
- 📐 **8px 間距系統** - 一致的視覺節奏
- 🎯 **Tabular Nums** - 數字對齊美觀

#### 📱 響應式優化
- 📲 **Mobile-First 設計** - 手機體驗優先
- 💻 **桌面寬屏支援** - 最大1400px內容區
- 🖥️ **3欄網格佈局** - 大屏幕優化

#### 🌈 色彩系統
- 🟢 **< 2小時** - #00d4aa 活力綠
- 🟡 **2-4小時** - #fbbf24 警示黃
- 🟠 **4-6小時** - #f97316 注意橙
- 🔴 **> 6小時** - #ef4444 緊急紅

---

## v1.1.0 (2025-12-04 16:13 HKT)

### 🆕 新功能 - NDH AED 病人數量預測系統

**新增獨立預測頁面** (`prediction.html`)

#### 📊 預測功能
- ✅ 基於 366 天歷史數據 (2024-12-03 至 2025-12-03) 的多因素預測模型
- ✅ 今日預測顯示 + 80%/95% 信賴區間
- ✅ 未來 7 天預測卡片
- ✅ 未來 30 天趨勢圖表

#### 🧮 預測算法
- ✅ 星期效應 (Monday Surge +9%)
- ✅ 月份/季節效應
- ✅ 香港公眾假期效應 (農曆新年 -27%)
- ✅ 流感季節效應

#### 📈 視覺化圖表
- ✅ 30 天預測趨勢圖 (含信賴區間)
- ✅ 星期效應柱狀圖
- ✅ 月份分佈圖 (流感季節標記)
- ✅ 365 天歷史趨勢圖

#### 🎨 UI/UX
- ✅ 深色主題設計
- ✅ 響應式佈局 (支援手機/平板/桌面)
- ✅ 導航欄整合主頁和預測頁
- ✅ Chart.js 互動式圖表

#### 新增文件
- `prediction.html` - 預測頁面
- `prediction.css` - 預測頁面樣式
- `prediction.js` - 預測算法和圖表渲染

---

## v1.0.1 (2025-12-04 15:59 HKT)

### 🚀 部署更新
- ✅ 更新版本號至 v1.0.1
- ✅ 準備推送到 Railway 部署平台
- ✅ 使用真實香港時間 (HKT) 記錄更新時間

---

## v1.0.0 (2025-10-12)

### ✅ 初始版本功能

#### 1. 實時數據獲取
- ✅ 直接從香港醫院管理局API獲取真實數據
- ✅ 無模擬數據，所有數據均為實時
- ✅ API URL: https://www.ha.org.hk/opendata/aed/aedwtdata2-tc.json

#### 2. 加載與連接管理
- ✅ 加載畫面：顯示連接狀態和進度
- ✅ 只在成功連接API後顯示主頁面
- ✅ 自動重試：連接失敗時每5秒自動重試
- ✅ 自動刷新：成功連接後每15秒自動更新數據
- ✅ 底部連接狀態欄：實時顯示連接狀態和數據更新時間

#### 3. 使用者介面
- ✅ 繁體中文介面（默認語言）
- ✅ 美麗的漸變背景設計
- ✅ 響應式設計：支援桌面和手機設備
- ✅ 現代化卡片式佈局

#### 4. 日期時間顯示
- ✅ 精確到秒的時間顯示
- ✅ 格式：YYYY-MM-DD HH:MM:SS
- ✅ 顯示最後更新時間

#### 5. 醫院資訊
已收錄18家醫院的完整資料：
- ✅ 醫院中英文名稱
- ✅ 所屬醫院聯網
- ✅ 所屬地區（香港島/九龍/新界）
- ✅ 完整地址
- ✅ 電話號碼
- ✅ 地理坐標（用於距離計算）
- ✅ 特殊專科警告（如北區醫院沒有兒科、婦產科、神經外科住院服務）

#### 6. 排序功能
- ✅ **最近醫院**：根據用戶地理位置計算距離並排序（默認）
- ✅ **等候時間**：從最短到最長排序
- ✅ **醫院名稱**：按中文筆劃排序

#### 7. 篩選功能
- ✅ **醫院聯網篩選**：
  - 港島東聯網
  - 港島西聯網
  - 九龍中聯網
  - 九龍東聯網
  - 九龍西聯網
  - 新界東聯網
  - 新界西聯網
- ✅ **地區篩選**：
  - 香港島
  - 九龍
  - 新界

#### 8. 等候時間色彩編碼
採用世界級標準（參考NHS 4小時目標和國際急症室最佳實踐）：
- 🟢 **綠色**：< 2小時（優秀表現）
- 🟡 **琥珀色**：2-4小時（符合NHS 4小時標準）
- 🔴 **紅色**：> 4小時（需要關注）

#### 9. 地理位置優化
- ✅ 使用 localStorage 緩存用戶位置
- ✅ 緩存有效期：24小時
- ✅ 首次訪問後不再重複詢問定位權限
- ✅ 超時時間從5秒降低至3秒，加快加載速度

#### 10. 醫院專科服務警告
- ✅ 北區醫院：沒有兒科、婦產科、神經外科住院服務
- ✅ 長洲醫院：只提供基本急症服務
- ✅ 律敦治醫院：主要提供胸肺科及復康服務
- ✅ 天水圍醫院：建議先致電查詢專科服務

#### 11. 數據持久化
- ✅ Railway Volume 支援
- ✅ 頁面訪問計數器
- ✅ 數據持久化路徑配置

