#!/usr/bin/env bash
# Build locally and deploy basion-ai-hut to the server.
# Usage: ./deploy.sh

set -euo pipefail

KEY="$HOME/Desktop/Aicourse.pem"
HOST="ubuntu@111.229.115.113"
REMOTE_DIR="~/basion-ai-hut"
APP_NAME="basion-ai-hut"

cd "$(dirname "$0")"

echo "🛖 [1/4] 本地构建..."
npm run build

echo "📦 [2/4] 打包 standalone..."
rm -rf deploy
mkdir -p deploy
cp -R .next/standalone/. deploy/
mkdir -p deploy/.next
cp -R .next/static deploy/.next/static
cp -R public deploy/public

echo "🚀 [3/4] 同步到服务器..."
rsync -az --delete \
  -e "ssh -i $KEY -o StrictHostKeyChecking=no" \
  deploy/ "$HOST:$REMOTE_DIR/"

echo "🔄 [4/4] 重启 PM2..."
ssh -i "$KEY" -o StrictHostKeyChecking=no "$HOST" "pm2 restart $APP_NAME --update-env && pm2 save"

echo
echo "✅ 完成！http://111.229.115.113/"
