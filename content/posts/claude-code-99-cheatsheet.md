---
title: 附录 · Claude Code 命令速查表 + 官方资料
description: 全套常用命令和快捷键,新手随用随查。再附上官方文档链接(会持续更新)和一份"今天就动手"的落地清单。
date: 2026-06-02
tag: Claude Code
---

> 这是《Claude Code 实战课》的收尾篇。**建议收藏**,干活时随手翻一翻。

---

## 附录 A：常用命令速查表

| 命令 / 快捷键 | 什么时候你会用到它 |
|---|---|
| `claude` | 开工。打开它,开始跟你的实习生面对面聊 |
| `claude -p "..."` | 不用面聊,丢一句话让它自己跑完——写脚本、做自动化时用 |
| `claude --continue` | 接着上次那摊活儿继续聊,记忆都还在 |
| `claude --resume` | 翻出之前一堆会话,挑一个接着干 |
| `Shift + Tab` | 切换它的"放手程度"(含 Plan Mode 计划模式:先出方案再动手) |
| `Esc` | 喊停!打断它正在做的事,但桌上的东西都还留着 |
| `Esc + Esc` | 后悔了,打开"时光倒流"菜单 |
| `Ctrl + G` | 在编辑器里改它给的计划 |
| `/init` | 第一次进项目,让它自动写一份 CLAUDE.md 守则草稿 |
| `/clear` | 一把扫干净桌子,换活儿前必备 |
| `/compact <指示>` | 桌子太满又舍不得全扫?告诉它留哪些,帮你定向收拾 |
| `/btw` | 顺口问个小问题,问完就走,不占桌子 |
| `/rewind` | 时光倒流:把对话或代码退回之前某一步 |
| `/rename` | 给当前这摊会话起个名字,方便以后找 |
| `/permissions` | 管它能动哪些工具、能上哪些网站 |
| `/sandbox` | 把它关进一个隔离的小屋里干活,出不来 |
| `/hooks` | 看看你在门口装了哪些绊线机关 |
| `/plugin` | 逛逛插件市场,看有什么现成的好东西 |
| `/loop <间隔> <提示词>` | 让它在这次会话里,隔一会儿就自动干一遍同一件事 |
| `/goal` | 给它定个"这回合算不算成"的及格线 |
| `/code-review` | 派个干净的助手去隔壁,专门挑这次改动的毛病 |
| `@文件名` | 把某个文件直接摊到桌上给它看 |

> 速查口诀:**管记忆,看 `/clear` `/compact` `/btw` `/rewind`;管流程,看 `Shift+Tab` `/init` `/hooks`;管自动化,看 `claude -p` `/loop` `/code-review`。**

---

## 附录 B：八个模块速链

从头按顺序读,或者照下面的路线挑着读:

- **开篇**:一个人,也是一支队伍(底层逻辑 + 学习路线)
- **模块一**:换脑子——从"下指令"到"管理一个干活的人"
- **模块二**:提问的精度,决定返工的次数
- **模块三**:黄金工作流——探索 → 计划 → 实现 → 提交
- **模块四**:验证闭环——让 Claude 自己检查自己
- **模块五**:上下文管理——高手和普通用户的分水岭
- **模块六**:环境配置——一次配置,长期省力
- **模块七**:自动化——让 Claude 在你不在场时干活 ⭐
- **模块八**:五大典型翻车现场——症状 + 解药

**新手路线：** 开篇 → ① → ② → ③ → ⑧(先把地基打牢)
**进阶路线：** 加学 ④ ⑤ ⑥
**实战路线：** 再加 ⑦

---

## 附录 C：官方文档来源（持续更新）

这门课的主干,全部来自 Anthropic 官方文档。想往深里挖,直接去喝头道泉水:

- **最佳实践**(本课主干):https://code.claude.com/docs/en/best-practices
- **定时任务**:https://code.claude.com/docs/en/scheduled-tasks
- **Hooks 自动化指南**:https://code.claude.com/docs/en/hooks-guide
- **无头 / 编程式调用(Agent SDK)**:https://code.claude.com/docs/en/headless
- **Agent Teams**:https://code.claude.com/docs/en/agent-teams
- **GitHub Actions**:https://code.claude.com/docs/en/github-actions
- **Channels(事件推送)**:https://code.claude.com/docs/en/channels
- **功能总览(何时用 Skill / Hook / MCP / 子代理)**:https://code.claude.com/docs/en/features-overview
- **常见工作流**:https://code.claude.com/docs/en/common-workflows
- **完整文档索引**:https://code.claude.com/docs/llms.txt

---

## 附录 D：从今天起就动手（落地清单）

学完十篇,不如真上手做三件。给自己定个小目标——**带走三个自动化**:

- [ ] **配一份 CLAUDE.md**:先跑 `/init` 让它出草稿,再对着模块六那张黄金标准表,狠心删到只剩干货。
- [ ] **装一个 Hook**:让 Claude 帮你装个门口的绊线机关——"每次改完文件,自动跑一遍格式化 / lint"。
- [ ] **设一个定时任务**:用 `/loop` 或云端定时任务,让它替你隔三差五盯一件事(构建、部署、PR 状态)。

外加三个**每天的小习惯**:

- [ ] 换不相关的活儿,先 `/clear` 扫桌子。
- [ ] 每件活儿,都给它一把"自己能用的尺子"去量对错。
- [ ] 同一个问题纠两次还不对,就清空重来,别硬刚。

> **"带走三个自动化",比"听懂十个概念"更有交付感。** 这门课到此结束,但你那支"一个人的队伍",才刚刚开始招兵买马。

—— 完 ·  备课人 Basion Wang
