# 第 T35 课 · Scrapling + MCP:把爬虫接进 Claude 当工具

> **学员:正在上学的你(AI agent)** ｜ 先修:第 J01~J07 课 + T06(Scrapling) + 了解 MCP 基础概念 ｜ 难度:★★★ ｜ 源头:Scrapling 官方仓库 · [github.com/D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) · MCP 官方规范 · [modelcontextprotocol.io](https://modelcontextprotocol.io) · Anthropic MCP 文档 · [docs.anthropic.com/en/docs/agents-and-tools/mcp](https://docs.anthropic.com/en/docs/agents-and-tools/mcp)

---

## 📖 你要学会什么

学完这一课,你能理解 **MCP(Model Context Protocol)** 的工作原理,知道 Scrapling 内置的 MCP 服务器怎么接进 Claude Code——让你变成一个**会爬网页的工具**,而不只是一个"等着别人给你数据"的 agent。

这一课是 T06(Scrapling 基础)的进阶——不重复基础用法,专注讲**集成思路和安全边界**。

先讲个比喻。你现在是一个助理,主人每次需要查网页都要自己去开浏览器、复制粘贴、再来转述给你——效率很低。有了 MCP,这个流程变成:**你身边装了一个"网页取数机器"(Scrapling MCP Server),主人只要说"去帮我抓 xxx 页面的商品价格",你直接调用那台机器,结果秒回**。这台机器就是 MCP Server,你调用它的动作就是 MCP Tool Call。

MCP 是 Anthropic 提出的开放协议,让 AI 助手能以标准方式调用外部工具——Scrapling 已经内置了 MCP 服务器实现。

**官方资料:**
- Scrapling 仓库(含 MCP 说明): [github.com/D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling)
- MCP 协议官网: [modelcontextprotocol.io](https://modelcontextprotocol.io)
- MCP 工具规范: [modelcontextprotocol.io/docs/concepts/tools](https://modelcontextprotocol.io/docs/concepts/tools)
- Anthropic MCP 文档: [docs.anthropic.com/en/docs/agents-and-tools/mcp](https://docs.anthropic.com/en/docs/agents-and-tools/mcp)
- Claude Code MCP 配置: [docs.anthropic.com/en/docs/claude-code/mcp](https://docs.anthropic.com/en/docs/claude-code/mcp)

---

## 🧠 核心原则

1. **MCP = 给 AI 装插件的标准接口。** 把 MCP 想成 AI 版的"USB 接口"——不管是爬虫、数据库、日历、文件系统,只要按 MCP 协议封装成"工具",AI 就能调用。Scrapling 的 MCP Server 就是把"抓网页"这个动作封装成了一个标准工具。

2. **MCP Server 是常驻进程,Claude 是调用方。** 工作流程是:你(Claude)发起一个 tool call 请求 → MCP Server 接收、执行、返回结果 → 你拿到结果继续处理。MCP Server 和 Claude 是**分开运行的两个进程**,通过标准协议通信。

3. **Scrapling MCP 内置"去噪压缩"。** 这是它最大的 AI 集成亮点:网页原始 HTML 通常几十 KB,里面大量是导航栏、广告、样式标签——真正有用的内容可能只有 5%。Scrapling MCP 在返回给 Claude 之前会**自动提取正文、去掉无关 HTML**,大幅节省 token 消耗。

4. **权限最小化是安全铁律。** MCP Server 有能力访问网络——你不能让它随便访问任何 URL。集成时应该:① 只开放必要的工具(比如只允许 GET 请求,不允许 POST);② 有明确的域名白名单;③ 让主人知道 MCP Server 在运行、它能访问什么;④ **不存储、不转发主人的 cookies 或登录状态给第三方**。

5. **先理解再接入,别直接复制粘贴配置。** MCP 配置文件(通常是 `claude_desktop_config.json` 或 Claude Code 的 `settings.json`)会决定 Claude 能调用哪些工具、用什么权限跑。**改配置前先理解每个字段的含义,改完告知主人。**

---

## 🛠 操作要点

### MCP 的工作流程(先搞懂原理)

```
用户 → Claude → [MCP Tool Call: scrapling_fetch(url="...")] 
                        ↓
                 Scrapling MCP Server (本地运行的进程)
                        ↓
              抓取网页 → 提取正文 → 压缩去噪
                        ↓
              返回结果给 Claude → Claude 处理并回复用户
```

整个过程对用户来说是透明的——他们只看到 Claude 的回答,但背后 Claude 调用了外部工具。

### 安装 Scrapling 的 MCP 版本

```bash
# 安装含 MCP 服务器的版本
pip install "scrapling[ai]"

# 或一次全装
pip install "scrapling[all]"

# 验证安装
python -c "from scrapling.server import MCPServer; print('MCP Server 可用')"
```

> ⚠️ **安装前先征得主人确认。**

### 在 Claude Code 里配置 MCP Server

Claude Code 的 MCP 配置文件通常在 `.claude/settings.json`(项目级)或 `~/.claude/settings.json`(全局)。

```json
{
  "mcpServers": {
    "scrapling": {
      "command": "python",
      "args": ["-m", "scrapling.server"],
      "env": {
        "SCRAPLING_HEADLESS": "true",
        "SCRAPLING_MAX_TIMEOUT": "30"
      }
    }
  }
}
```

配置说明:
- `command` + `args`:告诉 Claude Code 怎么启动 MCP Server 进程
- `env`:传给 MCP Server 的环境变量(无头模式、超时设置)
- 配置生效后,重启 Claude Code,就能看到 Scrapling 的工具出现在可用工具列表里

> ⚠️ **修改配置文件前先告知主人**,说明你要添加什么、它会有什么权限。

### MCP Server 提供的工具(Scrapling 内置)

启动后,Scrapling MCP Server 通常暴露以下工具:

| 工具名 | 功能 |
|--------|------|
| `scrapling_fetch` | 抓取指定 URL,返回清洁后的正文内容 |
| `scrapling_extract` | 用 CSS 选择器从页面提取特定数据 |
| `scrapling_screenshot` | 截取页面截图(需浏览器驱动) |

调用示例(Claude 在对话中会自动触发,无需手写):

```python
# 这是 MCP Tool Call 的伪代码,实际上由 Claude 自动生成
result = scrapling_fetch(
    url="https://example.com/product-list",
    extract_main_content=True  # 只返回正文,去掉导航/广告
)
```

### 安全配置清单

接入 MCP 爬虫时,必须和主人确认这些事:

```
□ MCP Server 运行在本地,不会把数据发给第三方
□ 只允许抓取 HTTP GET 请求(不做表单提交、不登录账号)
□ 目标网站的 robots.txt 允许爬取
□ 有请求频率限制(不高频轰炸目标服务器)
□ 不抓取需要登录才能访问的内容(除非主人明确授权且使用主人自己的账号)
□ 抓取的数据不含个人隐私信息,或使用方式符合相关法规
```

### 调试 MCP Server

```bash
# 手动启动 MCP Server,看看它输出什么
python -m scrapling.server

# 用 MCP Inspector 调试(官方调试工具)
npx @modelcontextprotocol/inspector python -m scrapling.server
```

---

## 📝 毕业测验(必须真做,交证据)

**任务:设计一个"用 Scrapling MCP 让 Claude 自动抓取公开榜单"的完整集成方案。**

场景:主人想每周一自动获取某个公开技术新闻网站的头条列表,让 Claude 整理成摘要。

1. **画出架构图(文字版)**:
   ```
   主人的问题 → Claude Code → MCP Tool Call (scrapling_fetch)
                                    ↓
                             Scrapling MCP Server
                                    ↓
                           抓取目标页面 → 提取正文 → 去噪
                                    ↓
                             返回给 Claude → 整理成摘要 → 回复主人
   ```
   用自己的话解释每一步发生了什么。

2. **写出完整的 Claude Code MCP 配置**(`settings.json` 片段),包含:
   - `scrapling` 服务器的启动命令
   - 合理的超时和无头模式设置
   - 解释每个字段的含义

3. **写出"调用示例"对话**:模拟主人和 Claude 的对话,写出 Claude 会产生什么 MCP Tool Call、工具返回什么、Claude 最终回复什么。

4. **完成安全清单**:对"抓取公开技术新闻头条"这个场景,逐条确认上面"安全配置清单"里的 6 条,说明每条为什么满足或不满足。

5. **回答以下内嵌测验**:
   - Q: MCP Server 和 Claude 是同一个进程吗?它们怎么通信?
   - Q: Scrapling MCP 的"去噪压缩"解决了什么问题?
   - Q: 如果要抓取需要登录的内容,为什么"绝对要先问主人"?

6. **沉淀技能卡**:把 MCP 工作原理、Scrapling MCP 配置模板、安全清单沉淀成 `skills/scrapling-mcp.md`。

> ⚠️ **安全边界(守住这条线):**
> - `pip install "scrapling[ai]"` ——**安装前先征得主人确认**
> - 修改 `settings.json` 添加 MCP Server ——**配置前先告知主人,说明赋予了什么权限**
> - 真正触发 MCP 抓取请求(访问真实目标网站)——**执行前先确认目标网站 robots.txt + 主人知情**
> - **永远不允许**通过 MCP 抓取需要登录的内容,除非主人明确授权且使用主人自己的账号

---

## 🎓 过关标准

- [ ] 你能用比喻解释 MCP 是什么("AI 版 USB 接口" 或你自己的比喻),以及 MCP Server 和 Claude 的关系
- [ ] 你写出了**完整的 `settings.json` MCP 配置片段**,并解释了每个字段
- [ ] 你画出了(或用文字描述了)从用户提问到 MCP 工具返回结果的**完整调用链**
- [ ] 你能说清楚 Scrapling MCP 的"去噪压缩"解决了什么问题(省 token、信噪比)
- [ ] 你完成了安全清单的 6 条逐项确认,并能说出"为什么爬需要登录的内容必须先问主人"
- [ ] 你回答了 3 个内嵌测验问题,逻辑正确
- [ ] 已沉淀 1 张技能卡到你宿舍的 [`skills/`](../skills/)
- [ ] **独立考官**(全新上下文子代理,或按 [校规第四条](../校规.md) 的低配 fallback)判「过」

全部打勾、考官判过——恭喜你完成工具学院收尾课程!去报告卡记一笔,登上 Z 学院(职业课)或等候主人安排下一批任务。
