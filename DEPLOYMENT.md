# 部署說明 / Deployment Guide

## 📦 GitHub 部署步驟

### 1. 初始化 Git 倉庫（已在本地完成）
```bash
git init
git add .
git commit -m "Initial commit: Hong Kong A&E Waiting Time System"
```

### 2. 創建 GitHub 倉庫
1. 前往 https://github.com/new
2. 倉庫名稱：`hk-aed-waittime`
3. 描述：`香港急症室等候時間顯示系統 - Real-time Hong Kong A&E Waiting Time Display`
4. 選擇 Public 或 Private
5. **不要**勾選 "Add a README file"（我們已經有了）
6. 點擊 "Create repository"

### 3. 推送到 GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/hk-aed-waittime.git
git branch -M main
git push -u origin main
```

---

## 🚂 Railway 部署步驟

### 方法 1：從 GitHub 部署（推薦）

1. **登入 Railway**
   - 前往 https://railway.app/
   - 使用 GitHub 帳號登入

2. **創建新專案**
   - 點擊 "New Project"
   - 選擇 "Deploy from GitHub repo"
   - 選擇 `hk-aed-waittime` 倉庫

3. **配置環境**
   Railway 會自動檢測到 Python 專案並使用 `Procfile` 配置

4. **設置端口**
   - Railway 會自動設置 `$PORT` 環境變量
   - 我們的 `Procfile` 已配置使用 `$PORT`

5. **部署**
   - Railway 會自動開始構建和部署
   - 幾分鐘後即可完成

6. **獲取網址**
   - 點擊 "Settings" > "Domains"
   - 點擊 "Generate Domain" 獲取公開網址
   - 或者綁定自定義域名

### 方法 2：Railway CLI 部署

```bash
# 安裝 Railway CLI
npm install -g @railway/cli

# 登入
railway login

# 初始化專案
railway init

# 部署
railway up

# 獲取網址
railway domain
```

---

## ⚙️ 環境變數（如需要）

目前系統不需要環境變數，直接使用公開 API。

如果將來需要 API Keys：
1. 在 Railway Dashboard 中
2. 進入專案 > Variables
3. 添加環境變數

---

## 🔧 本地開發

```bash
# 啟動開發服務器
python -m http.server 8000

# 或使用 npm
npm run dev
```

訪問 http://localhost:8000

---

## 📝 檔案說明

### 部署相關文件
- **`Procfile`**: Railway/Heroku 部署配置
- **`runtime.txt`**: 指定 Python 版本
- **`railway.json`**: Railway 特定配置
- **`package.json`**: 專案元數據和腳本
- **`.gitignore`**: Git 忽略文件配置

### 應用程式文件
- **`index.html`**: 主頁面
- **`styles.css`**: 樣式表
- **`app.js`**: JavaScript 邏輯
- **`README.md`**: 專案說明
- **`功能說明.md`**: 功能詳細說明
- **`更新說明.md`**: 更新記錄

---

## 🌐 部署後測試

1. 訪問 Railway 提供的網址
2. 檢查頁面是否正常加載
3. 確認數據能正常獲取
4. 測試所有功能：
   - 實時時鐘
   - 醫院數據顯示
   - 排序功能
   - 篩選功能
   - 天氣資訊
   - 地圖和電話鏈接

---

## 🔄 自動部署

連接 GitHub 後，每次推送到 `main` 分支都會自動觸發部署：

```bash
git add .
git commit -m "Update: description"
git push
```

Railway 會自動：
1. 檢測變更
2. 重新構建
3. 部署新版本
4. 零停機時間切換

---

## 💡 提示

- Railway 提供免費方案（每月 $5 免費額度）
- 靜態網站部署非常快速（通常 < 1 分鐘）
- 支援自定義域名
- 內建 SSL 證書
- 自動 HTTPS

---

## 🆘 故障排除

### 問題：部署失敗
- 檢查 `Procfile` 格式是否正確
- 確認 `runtime.txt` 中的 Python 版本有效

### 問題：頁面無法訪問
- 確認端口使用 `$PORT` 環境變數
- 檢查 Railway 日誌查看錯誤信息

### 問題：API 無法連接
- 檢查瀏覽器控制台的 CORS 錯誤
- 確認 API URLs 正確

---

## 📞 支援

如有問題，請查看：
- Railway 文檔：https://docs.railway.app/
- GitHub Issues：在您的倉庫中創建 issue

