# 嵌入指南 - Embedding Guide

## 如何在其他應用中嵌入急症室等候時間系統

### 🎯 基本嵌入方式

```html
<iframe 
    src="https://hkaedwaittime.up.railway.app/" 
    allow="geolocation"
    width="100%" 
    height="800"
    style="border: none; border-radius: 8px;">
</iframe>
```

### ⚠️ 重要：必須添加 `allow="geolocation"` 屬性

沒有此屬性，瀏覽器會阻止地理位置訪問，導致：
- ❌ 無法獲取用戶實際位置
- ❌ 無法正確計算最近醫院距離
- ⚠️ 會退回使用香港天文台位置（22.3019, 114.1742）

### 📝 完整範例（React/Next.js）

```jsx
export default function AEDWaitTimeEmbed() {
    return (
        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
            <h2>急症室等候時間</h2>
            <iframe 
                src="https://hkaedwaittime.up.railway.app/?sort=distance" 
                allow="geolocation"
                width="100%" 
                height="800"
                style={{ 
                    border: 'none', 
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}
                title="急症室等候時間"
            />
        </div>
    );
}
```

### 🔧 URL 參數支援

#### 排序方式
- `?sort=distance` - 按距離排序（預設）
- `?sort=waiting-time` - 按等候時間排序
- `?sort=name` - 按醫院名稱排序

#### 篩選選項
- `?cluster=NTE` - 只顯示新界東聯網
- `?district=新界` - 只顯示新界地區
- `?district=九龍` - 只顯示九龍地區
- `?district=香港` - 只顯示香港島地區

#### 位置相關
- `?refresh_location=1` - 強制刷新地理位置（忽略緩存）

#### 組合使用
```html
<!-- 顯示新界東聯網，按距離排序，強制刷新位置 -->
<iframe 
    src="https://hkaedwaittime.up.railway.app/?sort=distance&cluster=NTE&refresh_location=1" 
    allow="geolocation"
    width="100%" 
    height="800">
</iframe>
```

### 🔒 安全性說明

此應用已配置以下安全策略：

#### Content-Security-Policy
允許以下來源嵌入：
- ✅ `https://ndhaedroster.up.railway.app`
- ✅ `https://*.up.railway.app`
- ✅ `http://localhost:*` (開發環境)
- ✅ `http://127.0.0.1:*` (開發環境)

#### Permissions-Policy
允許以下來源使用地理位置：
- ✅ 自身網域 (self)
- ✅ `https://ndhaedroster.up.railway.app`
- ✅ `https://*.up.railway.app`
- ✅ `http://localhost:*` (開發環境)
- ✅ `http://127.0.0.1:*` (開發環境)

### 🚨 常見問題排查

#### 1. 地理位置無法使用

**錯誤訊息**：
```
Permissions policy violation: Geolocation access has been blocked
```

**解決方法**：
- ✅ 確保 iframe 標籤有 `allow="geolocation"` 屬性
- ✅ 確保父頁面也有地理位置權限
- ✅ 檢查瀏覽器是否允許網站使用地理位置

#### 2. 無法嵌入（被阻擋）

**錯誤訊息**：
```
Refused to frame 'https://hkaedwaittime.up.railway.app/' because it violates the following Content Security Policy directive
```

**解決方法**：
- 確認您的網域是否在允許列表中
- 聯繫管理員將您的網域加入白名單

#### 3. 位置數據不準確

**解決方法**：
```html
<!-- 添加 refresh_location=1 參數強制刷新 -->
<iframe 
    src="https://hkaedwaittime.up.railway.app/?refresh_location=1" 
    allow="geolocation"
    width="100%" 
    height="800">
</iframe>
```

### 📱 響應式設計

```html
<style>
    .aed-embed-container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 1rem;
    }
    
    .aed-embed-iframe {
        width: 100%;
        height: 800px;
        border: none;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    
    @media (max-width: 768px) {
        .aed-embed-iframe {
            height: 600px;
        }
    }
</style>

<div class="aed-embed-container">
    <iframe 
        class="aed-embed-iframe"
        src="https://hkaedwaittime.up.railway.app/" 
        allow="geolocation"
        title="急症室等候時間">
    </iframe>
</div>
```

### 🔄 數據更新頻率

- **自動刷新**：每 15 秒更新一次急症室數據
- **天氣更新**：每 5 分鐘更新一次天氣資訊
- **位置緩存**：24 小時有效期

### 📞 技術支援

如需將其他網域加入白名單，或遇到其他技術問題，請聯繫開發團隊。

---

**最後更新**: 2025-12-05  
**版本**: v8.1+

