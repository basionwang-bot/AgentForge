#!/usr/bin/env bash
# 链接健康检查 · 防 132 门课锚定的外部开源项目链接腐烂
#
# 只做【检测和报告】,绝不自动修改课程内容。
#
# 用法:
#   bash scripts/check-links.sh             # 只扫描、列出去重后的外部链接数(不联网)
#   bash scripts/check-links.sh --check     # 联网检查每个链接的 HTTP 状态(慢)
#   bash scripts/check-links.sh --check --report   # 把失效清单追加到 agent-school/体检报告.md 附录

set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
COURSES="$ROOT/agent-school/courses"
REPORT="$ROOT/agent-school/体检报告.md"

CHECK=0; WRITE=0
for a in "$@"; do case "$a" in --check) CHECK=1 ;; --report) WRITE=1 ;; esac; done

echo "链接健康检查"
echo "============"

# 提取所有 http(s) 链接,去尾部标点,去重
links="$(grep -rhoE 'https?://[^ )"]+' "$COURSES" --include='*.md' 2>/dev/null | sed 's/[.,;:]*$//' | sort -u)"
total="$(printf '%s\n' "$links" | grep -c . || true)"
echo "扫描到 $total 个去重外部链接(在 agent-school/courses/ 下)。"

if [ "$CHECK" = 0 ]; then
  echo "(未联网检查。加 --check 检查 HTTP 状态;再加 --report 写入体检报告附录。)"
  exit 0
fi

echo "正在联网检查(每个链接最多 15s)……"
broken=""
while IFS= read -r url; do
  [ -z "$url" ] && continue
  code="$(curl -s -o /dev/null -w '%{http_code}' -L --max-time 15 -A 'agentforge-linkcheck' "$url" 2>/dev/null || echo 000)"
  if [ "$code" = "000" ] || [ "$code" -ge 400 ]; then
    echo "  ✗ [$code] $url"
    broken="${broken}- [\`$code\`] $url"$'\n'
  fi
done <<< "$links"

if [ -z "$broken" ]; then
  echo "✅ 所有外部链接可达。"
else
  echo "⚠ 发现失效链接(见上)。"
  if [ "$WRITE" = 1 ]; then
    { echo ""; echo "## 附录 · 链接健康检查($(date +%F))"; echo ""; printf '%s' "$broken"; } >> "$REPORT"
    echo "已把失效清单追加到 $REPORT"
  fi
fi
