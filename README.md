# Basion 的 Ai 小屋 🛖

> 和 AI 一起，做更有趣的事 · Build wonder with AI

一个基于 Next.js 16 + Tailwind v4 的个人 AI 学习笔记站点，Claude design 风格，支持暗色模式。

## 本地开发

```bash
npm install
npm run dev
# http://localhost:3000
```

## 加新文章

在 `content/posts/` 新建一个 `xxx.md`，开头加 frontmatter：

```yaml
---
title: 文章标题
description: 一句话简介（卡片上显示）
date: 2026-05-10
tag: 工具地图
---
```

文件名（去掉 `.md`）就是文章 URL slug。

## 部署到服务器

```bash
./deploy.sh
```

脚本会本地构建 → standalone 打包 → rsync 到服务器 → PM2 重启。

## 技术栈

- Next.js 16 (App Router, standalone output)
- Tailwind CSS v4
- next-themes（暗色模式）
- remark + gray-matter（Markdown 渲染）
- Inter / Source Serif 4 / JetBrains Mono
- PM2 + nginx 反代（生产部署）

## 项目结构

```
src/
├── app/                    # 页面路由
│   ├── layout.tsx          # 根布局 + 主题
│   ├── page.tsx            # 首页（Hero + 文章网格）
│   └── posts/[slug]/       # 文章详情
├── components/             # Hero、Nav、ThemeToggle、PostCard、Footer
└── lib/posts.ts            # Markdown 加载与渲染

content/posts/              # 你的文章（md 文件）
```
