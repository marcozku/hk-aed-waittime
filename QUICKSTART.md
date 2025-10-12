# 🚀 快速開始指南

## 步驟 1: 創建 GitHub 倉庫

1. 前往 https://github.com/new
2. 填寫資訊：
   - **Repository name**: `hk-aed-waittime`
   - **Description**: `香港急症室等候時間顯示系統`
   - **Public** 或 **Private** (建議 Public)
   - ❌ **不要**勾選任何初始化選項
3. 點擊 **"Create repository"**

## 步驟 2: 推送到 GitHub

### Windows 用戶：
```bash
# 雙擊運行
deploy-to-github.bat
```

### Mac/Linux 用戶：
```bash
# 給予執行權限
chmod +x deploy-to-github.sh

# 運行腳本
./deploy-to-github.sh
```

### 手動推送（所有平台）：
```bash
# 添加 remote（替換 YOUR_USERNAME）
git remote add origin https://github.com/YOUR_USERNAME/hk-aed-waittime.git

# 推送
git branch -M main
git push -u origin main
```

## 步驟 3: 部署到 Railway

### 方法 A: 網頁界面（推薦）

1. **登入 Railway**
   - 前往 https://railway.app/
   - 點擊 **"Login"** 並選擇 **"Login with GitHub"**

2. **創建新專案**
   - 點擊 **"New Project"**
   - 選擇 **"Deploy from GitHub repo"**
   - 授權 Railway 訪問您的 GitHub
   - 選擇 **"hk-aed-waittime"** 倉庫

3. **等待部署**
   - Railway 會自動檢測配置並開始部署
   - 通常需要 1-2 分鐘

4. **獲取網址**
   - 部署完成後，點擊專案
   - 進入 **"Settings"** > **"Domains"**
   - 點擊 **"Generate Domain"**
   - 您的網站就上線了！🎉

### 方法 B: Railway CLI

```bash
# 安裝 Railway CLI
npm install -g @railway/cli

# 登入
railway login

# 初始化專案
railway init

# 連接到 GitHub 倉庫
railway link

# 部署
railway up

# 獲取網址
railway domain
```

## 步驟 4: 測試網站

訪問 Railway 提供的網址，確認：
- ✅ 頁面正常加載
- ✅ 實時時鐘運作
- ✅ 醫院數據顯示
- ✅ 天氣資訊顯示
- ✅ 所有功能正常

## 🎯 完成！

您的香港急症室等候時間系統現已上線！

---

## 📝 後續更新

每次修改代碼後：

```bash
# 提交更改
git add .
git commit -m "Update: 描述您的更改"
git push

# Railway 會自動檢測並重新部署
```

---

## 💡 提示

### 自定義域名
在 Railway Dashboard > Settings > Domains 中可以綁定自己的域名。

### 查看日誌
在 Railway Dashboard > Deployments 中可以查看部署日誌和錯誤。

### 環境變數
如果需要添加環境變數，在 Railway Dashboard > Variables 中添加。

---

## 🆘 常見問題

### Q: 推送到 GitHub 時要求輸入密碼？
A: GitHub 已停止支援密碼驗證。請使用：
- Personal Access Token (https://github.com/settings/tokens)
- 或配置 SSH Key (https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

### Q: Railway 部署失敗？
A: 檢查：
1. `Procfile` 格式是否正確
2. 在 Railway Dashboard > Deployments 中查看錯誤日誌
3. 確認所有文件都已推送到 GitHub

### Q: 網站顯示 404？
A: 確保：
1. Railway 已完成部署（綠色✓）
2. Domain 已正確生成
3. 等待 DNS 傳播（可能需要幾分鐘）

### Q: API 無法連接？
A: 這是正常的，API 是公開的。如果有問題：
1. 檢查瀏覽器控制台的錯誤
2. 確認網絡連接正常
3. 醫管局 API 可能暫時維護

---

## 📞 需要幫助？

參考詳細文檔：
- **DEPLOYMENT.md** - 完整部署指南
- **README.md** - 專案說明
- **功能說明.md** - 功能詳情

---

## 🌟 分享您的專案

專案上線後，可以分享給朋友和家人使用！

祝您部署順利！🎉

