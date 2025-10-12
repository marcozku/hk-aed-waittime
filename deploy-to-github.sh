#!/bin/bash

# 香港急症室等候時間系統 - GitHub 部署腳本

echo "🚀 GitHub 部署腳本"
echo "=================="
echo ""

# 檢查是否已有 remote
if git remote | grep -q "origin"; then
    echo "✓ 已檢測到 origin remote"
    echo "  $(git remote get-url origin)"
    echo ""
    read -p "是否要更新 remote URL? (y/N): " update_remote
    if [[ $update_remote =~ ^[Yy]$ ]]; then
        read -p "請輸入新的 GitHub 倉庫 URL: " repo_url
        git remote set-url origin "$repo_url"
        echo "✓ Remote URL 已更新"
    fi
else
    echo "請輸入您的 GitHub 倉庫 URL"
    echo "格式: https://github.com/YOUR_USERNAME/hk-aed-waittime.git"
    read -p "URL: " repo_url
    
    if [ -z "$repo_url" ]; then
        echo "❌ 錯誤：未提供 URL"
        exit 1
    fi
    
    git remote add origin "$repo_url"
    echo "✓ Remote 已添加"
fi

echo ""
echo "準備推送到 GitHub..."
echo ""

# 確保在 main 分支
git branch -M main

# 推送到 GitHub
echo "正在推送..."
if git push -u origin main; then
    echo ""
    echo "✅ 成功推送到 GitHub!"
    echo ""
    echo "下一步："
    echo "1. 前往 https://railway.app/"
    echo "2. 使用 GitHub 登入"
    echo "3. 點擊 'New Project'"
    echo "4. 選擇 'Deploy from GitHub repo'"
    echo "5. 選擇 'hk-aed-waittime' 倉庫"
    echo "6. 等待部署完成"
    echo "7. 在 Settings > Domains 中生成域名"
    echo ""
    echo "詳細說明請參考 DEPLOYMENT.md"
else
    echo ""
    echo "❌ 推送失敗"
    echo ""
    echo "可能的原因："
    echo "1. GitHub 倉庫不存在 - 請先在 GitHub 創建倉庫"
    echo "2. 沒有推送權限 - 檢查 SSH key 或使用 HTTPS"
    echo "3. 網絡問題 - 檢查網絡連接"
    echo ""
    echo "詳細說明請參考 DEPLOYMENT.md"
    exit 1
fi

