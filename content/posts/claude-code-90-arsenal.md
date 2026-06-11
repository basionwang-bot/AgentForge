---
title: 加餐 · 技能武器库｜给你的 agent 装上现成的好工具
description: 别什么都自己从头搭。社区和官方已经造好了一大堆「技能」和「工作流」，拿来就能用。这篇帮你挑出真正值钱的那些，按"你想让它干哪类活"分门别类，附获取方式。
date: 2026-06-02
tag: Claude Code
---

> **这篇是加餐。** 前面八个模块教你「怎么把 AI 当同事带」，这一篇告诉你：**别什么都自己从零造——现成的好工具一大把，拿来给你的 agent 装上就行。**

---

## 先打个比方：什么叫"给 agent 装工具"

还记得模块六那几个画面吗？再用一次:

- **技能(Skill)** = 一个个**工具抽屉**。平时收着不占地方,干某类活时拉开就用。
- **子代理(Subagent)** = 你能**临时调来的专家助手**(比如"代码审查员""安全审查员")。
- **钩子(Hook)** = 门口的**自动机关**,某个动作一发生就必然触发。
- **插件(Plugin)** = 把上面这些**打包成一个礼盒**,一键装好一整套。

好消息是:这些抽屉、助手、机关、礼盒,**社区和官方已经造好了成千上万个。** 你要做的不是自己造,而是**挑对的装上**。这篇就是帮你挑。

> 💡 一句话:**新手别急着自己写技能,先把现成的好货用熟。** 等你清楚自己缺什么了,再回头看模块六自己造。

---

## 怎么把它们装到自己电脑上

三条路,从最省事到最 DIY:

1. **逛官方插件市场(最简单)** —— 在 Claude Code 里输入 `/plugin`,像逛应用商店一样浏览、一键安装。新手从这里开始。
2. **官方技能仓库** —— Anthropic 自己维护的一份高质量技能合集:[github.com/anthropics/skills](https://github.com/anthropics/skills)。质量有保证,适合"照着抄"。
3. **社区精选合集** —— 民间高手整理的"全网最好用清单",量大管饱:
   - [awesome-claude-skills(travisvn)](https://github.com/travisvn/awesome-claude-skills)
   - [awesome-claude-skills(Composio)](https://github.com/ComposioHQ/awesome-claude-skills)
   - [awesome-claude-code-and-skills](https://github.com/GetBindu/awesome-claude-code-and-skills)

装好之后怎么用?**相关时它自己就会用**,或者你用 `/技能名` 手动喊它出来(回看模块六)。

---

## 按"你想让它干哪类活"挑(武器库正文)

下面每一类,我都挑了**口碑最好、最常被装**的几样。不用全装,**对着你的痛点拿。**

### 🖋 写作 / 文档处理

| 工具 | 它替你干嘛 |
|------|-----------|
| **文档套件(Document Skills)** | 一个抽屉搞定 PDF / Word / Excel / PPT 的读取与生成——这是非技术岗的刚需,务必装 |
| **协作写作(Doc Co-Authoring)** | 边写边带版本记录的合写助手,适合长稿 |
| **去 AI 腔(humanize-writing)** | 把"一看就是 AI 写的"那股味儿洗掉,变得像人话 |
| **内部沟通(Internal Communications)** | 几秒钟产出像样的公告、通知、备忘 |

### 📊 数据 / 表格

| 工具 | 它替你干嘛 |
|------|-----------|
| **CSV 清洗 / 数据问答** | 把乱七八糟的表格洗干净,用大白话问"上个月哪个渠道转化最差",不用写公式 |
| **看板生成** | 把一堆数据变成一张能看的可视化页面,不用懂图表代码 |

### 🔍 质量把关(交给"专家助手")

这几样是**子代理**——专门派来挑刺的:

| 工具 | 它替你干嘛 |
|------|-----------|
| **code-reviewer** | 全网最常被装的技能之一,派个"干净眼睛"的审查员挑毛病 |
| **code-simplifier** | Anthropic 官方自用的插件:把刚写的东西做一遍精简,删重复、理逻辑 |
| **git-commit-writer / pr-description-writer** | 自动写清楚的提交说明和改动总结,省得你憋词 |
| **changelog / readme 生成** | 一键产出更新日志、项目说明 |

> 即便你不写代码,这类"自动留痕、自动总结"的工具也常常用得上——把"代码"换成"你的项目文件"就懂了。

### ⚡ 效率 / 省记忆

| 工具 | 它替你干嘛 |
|------|-----------|
| **Context Mode(省桌面)** | 自动把啰嗦的命令输出挡在"写字台"外,让会话从"半小时就卡死"撑到能跑几小时 |
| **每日小结(Daily Summary)** | 每天读完你所有会话,归类整理成"今天干到哪了",第二天一目了然 |
| **SEO 优化(seo-optimizer)** | 做内容的可以装,自动给文章做搜索优化 |

### 🏗 一整套工作流框架(进阶)

| 工具 | 它替你干嘛 |
|------|-----------|
| **Superpowers** | 目前社区最火的"全流程框架",把一件事拆成"头脑风暴 → 规格 → 计划 → 测试 → 执行 → 审查 → 收尾"七步走,逼着 agent 规规矩矩干活。在 `/plugin` 市场里能搜到 |
| **wshobson/agents** | 一个大型"专家助手市场",几十上百号各领域的子代理任你调 —— [github.com/wshobson/agents](https://github.com/wshobson/agents) |
| **awesome-claude-code-subagents** | 100+ 个现成专家助手合集 —— [github.com/VoltAgent/awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents) |

---

## 🔧 趁手兵器:能装进你电脑、真能干活的真家伙

技能(Skill)教 agent **怎么想**;但有些活,光会想不够,得有**真家伙**。下面这些是**能装到你电脑上、agent 直接调用就能干重活**的开源工具——也是 agent 上完学最该"**带回家**"的东西:它回来不只是习惯好了,而是真的多了一身战斗力。

### 🕷 旗舰推荐:Scrapling(从网页上扒数据)

| | |
|---|---|
| **它干嘛** | 一个会"自适应"的网页爬虫框架。网站改版后能**自动重新定位**元素、能**绕过反爬**(Cloudflare 等)、解析极快(比 BeautifulSoup 快几百倍) |
| **杀手锏** | **自带 MCP 服务器,直接插进 Claude/Cursor**——抓完的内容在喂给 AI 前先压一遍,省 token、省钱 |
| **怎么装** | `pip install "scrapling[fetchers]"` 然后 `scrapling install` |
| **适合谁** | 任何要"从网页/电商/榜单**批量扒数据**"的人:运营、市场、电商、做研究的 |
| **链接** | [github.com/D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) |

> 为什么单拎出来讲?因为它把"agent 带回真本事"诠释得最好:**装上它,你的 agent 当场就会扒数据了**,这是看一百篇文章都换不来的实打实能力。

### 其它常备兵器(按你要干的活挑)

| 你要干的活 | 趁手工具 | 一句话 |
|------------|----------|--------|
| 下载音/视频 | **yt-dlp** | 几乎能下全网视频和音频 |
| 处理音/视频 | **ffmpeg** | 转码、剪切、提取音轨的瑞士军刀 |
| 啃大表格数据 | **pandas / DuckDB** | 几百万行数据,用代码秒级清洗、聚合 |
| 文档格式互转 | **pandoc** | Markdown / Word / PDF 一键互转 |
| 从 PDF 抠内容 | **pdfplumber** | 精准抠出 PDF 里的文字和表格 |
| 像人一样操作网页 | **Playwright** | 让 agent 自动点按钮、填表单、截图 |
| 管 GitHub | **gh(GitHub CLI)** | 命令行管 PR / issue,最省上下文 |

> 💡 回扣模块六那句话:**CLI 和现成库,是 agent 最省力的"外挂"。** 它甚至能现学——
> 跟它说"先跑 `工具名 --help` 学会这个工具,然后用它完成 A、B、C",它就上手了。

> 🎓 **这正是「Agent 学校」(仓库里的 `agent-school/`)里『带回的装备』的精髓**:让你的 agent 学会一个真实工具、装到你电脑上、并在结业报告里推荐给你——上一趟学,换回一身真本事。

---

## 🎨 内容创作者专属:写作 + 全平台分发(2026 实测精选)

如果你是做公众号、小红书、自媒体的,这一节单独给你。下面都是**真实存在、口碑靠前**的开源技能,按"写好一篇 → 一稿多发 → 中文平台专属"三步给你配齐。

> ⚠️ 先说句大实话:这个圈子 2026 年爆发式生长,**鱼龙混杂、星标注水的不少**。下面这些是相对靠谱的,但**装之前自己点进去瞄一眼 SKILL.md** 再决定。

### 第一步 · 写好一篇(写作 / 改稿 / 查证)

| 工具 | 替你干嘛 | 链接 |
|------|----------|------|
| **humanizer**(去 AI 腔头号) | 揪出 30 多种"一看就是 AI 写的"毛病并改掉,可校准成你的文风 | [blader/humanizer](https://github.com/blader/humanizer) |
| **Brand Voice**(官方·品牌口吻) | Anthropic 官方出品,把你的品牌调性固化成护栏,全渠道统一 | [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) |
| **content-research-writer** | 边写边查资料、加引用、强化开头钩子、逐段给反馈,还保留你的声音 | [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) |
| **claude-blog**(长文工厂) | 整条长文流水线,**会逐条 fetch 引用源做事实核查**、卡 AI 味、过质量门才放行 | [AgriciDaniel/claude-blog](https://github.com/AgriciDaniel/claude-blog) |
| **SEO Machine** | 完整 SEO 文章工作台(选题→写 2000+ 字→优化→发 WordPress),主打"零编造事实" | [TheCraigHewitt/seomachine](https://github.com/TheCraigHewitt/seomachine) |

### 第二步 · 一稿多发(一篇 → 各平台版本)

| 工具 | 替你干嘛 | 链接 |
|------|----------|------|
| **claudecode-writer** | 喂它你的文风样本,一条思路自动产出长文 + LinkedIn/推文/Newsletter 各平台版 | [WomenDefiningAI/claudecode-writer](https://github.com/WomenDefiningAI/claudecode-writer) |
| **cn-content-matrix** | **真·风格迁移**(不是套模板),一个主题改写成小红书/公众号/抖音/B站原生口吻 | [skill-cn-content-matrix](https://github.com/fullstackcrew-alpha/skill-cn-content-matrix) |

> 💡 懒人最低门槛:不想配 API,就让 Claude 直接导出一份排期 CSV,导进 Buffer / Typefully 去发——零密钥。

### 第三步 · 中文平台专属(小红书 / 公众号 / 抖音)

**公众号(目前最成熟)**

| 工具 | 替你干嘛 | 链接 |
|------|----------|------|
| **wewrite** | 公众号全流程 8 段:抓热点→选题→找素材→带风格写作→SEO 校验→配图→排版发草稿箱 | [oaker-io/wewrite](https://github.com/oaker-io/wewrite) |
| **md2wechat-skill** | Markdown 一键转公众号排版 + 配图 + 批量发,免费档够用 | [geekjourneyx/md2wechat-skill](https://github.com/geekjourneyx/md2wechat-skill) |

**小红书**

| 工具 | 替你干嘛 | 链接 |
|------|----------|------|
| **xhs-studio** | 小红书全流程:热点搜索→内容创作→一键发布 | [waynefu2020/xhs-studio](https://github.com/waynefu2020/xhs-studio) |
| **归藏社交卡片** | 生成小红书 3:4 图文卡 / 公众号封面,28 种排版、设计感强(作者是知名 AI 创作者归藏) | [op7418/guizang-social-card-skill](https://github.com/op7418/guizang-social-card-skill) |

**抖音 / 短视频**

| 工具 | 替你干嘛 | 链接 |
|------|----------|------|
| **短视频爆款开头** | 100 个钩子公式 + 10 种心理触发,给你 3 个可测试的开场白 | [laolaoshiren/claude-code-skills-zh](https://github.com/laolaoshiren/claude-code-skills-zh) |
| **videocut-skills** | 基于 Claude Code 的剪辑代理:转写→AI 审片→剪 | [Ceeon/videocut-skills](https://github.com/Ceeon/videocut-skills) |

### 中文创作者的找货入口

- **[laolaoshiren/claude-code-skills-zh](https://github.com/laolaoshiren/claude-code-skills-zh)** —— 中文平台技能**最好的枢纽**,100+ 精选、分类清楚,上面大半工具都能在这儿找到。
- 英文世界则看 [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) 和官方 [anthropics/skills](https://github.com/anthropics/skills)。

> 📌 一个诚实的空白:**视频号、知乎** 目前几乎没有成熟的专门技能,只能靠通用写作技能 + 手动搬运。这反过来也是机会——等你学会了模块六,说不定第一个补这个坑的就是你。

---

## ⚠️ 三条选装原则(别犯新手的贪心病)

1. **缺什么装什么,别囤货。** 装一堆用不上的技能,就像买一墙工具却只拧过一颗螺丝——还白占地方。
2. **装之前瞄一眼它干嘛、谁维护的。** 优先官方仓库和高口碑合集,别随手装来路不明的。
3. **这个圈子变得飞快。** 今天的"最好用",过俩月可能就被新的取代了。**记住去哪儿找(上面三条路),比记住具体哪个更值钱。**

---

## ✍️ 学员练习

1. 打开 `/plugin`,逛一圈,**挑一个**和你工作最相关的技能装上(写作的装文档套件,做数据的装 CSV 清洗)。
2. 用它跑一个**你本来要手动干**的真实小任务,记一下省了多少时间。
3. 去 [anthropics/skills](https://github.com/anthropics/skills) 翻一个官方技能的写法,对照模块六——**为下一步"自己造一个"埋个种子。**

---

## 本篇一句话总结

> **先武装,再创造。** 现成的好工具能让你少走半年弯路——挑对的装上,把它们用熟,你的 agent 立刻就强一大截。等你清楚自己还缺什么,再回模块六亲手造。

—— 备课人 Basion Wang
