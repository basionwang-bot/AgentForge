// Claude Code 实战课 —— 系列结构定义（阅读顺序，与文章 frontmatter 的 date 排序无关）。
// 在这里维护课程目录，页面据此渲染目录页和文末上一篇/下一篇导航。

export type CourseEntry = {
  slug: string;
  /** 章节标签，如「开篇」「模块一」「附录」 */
  label: string;
  /** 一句话点题，目录页副标题用 */
  blurb: string;
};

export const COURSE_TITLE = "Claude Code 实战课";
export const COURSE_SUBTITLE =
  "一个人，也是一支队伍——把官方课程大纲扩写成面向新手的系列教程。";

export const courseEntries: CourseEntry[] = [
  { slug: "claude-code-00-intro", label: "开篇", blurb: "底层逻辑 + 学习路线图，先读这篇" },
  { slug: "claude-code-01-mindset", label: "模块一", blurb: "换脑子：从下指令到管理一个干活的人" },
  { slug: "claude-code-02-prompting", label: "模块二", blurb: "提问的精度，决定返工的次数" },
  { slug: "claude-code-03-workflow", label: "模块三", blurb: "黄金工作流：探索 → 计划 → 实现 → 提交" },
  { slug: "claude-code-04-verification", label: "模块四", blurb: "验证闭环：让 Claude 自己检查自己" },
  { slug: "claude-code-05-context", label: "模块五", blurb: "上下文管理：高手和普通用户的分水岭" },
  { slug: "claude-code-06-config", label: "模块六", blurb: "环境配置：一次配置，长期省力" },
  { slug: "claude-code-07-automation", label: "模块七", blurb: "自动化：让 Claude 在你不在场时干活 ⭐" },
  { slug: "claude-code-08-pitfalls", label: "模块八", blurb: "五大典型翻车现场：症状 + 解药" },
  { slug: "claude-code-90-arsenal", label: "加餐", blurb: "技能武器库：给你的 agent 装上现成的好工具" },
  { slug: "claude-code-99-cheatsheet", label: "附录", blurb: "命令速查表 + 官方资料" },
];

// 学完能干嘛（学习成果）
export const courseOutcomes: string[] = [
  "把 AI 当一个「能动手的同事」来带，而不是问一句答一句的聊天框",
  "写出「第一次就听懂」的指令，把来回返工降到最低",
  "让它自己跑检查、自己改到对——你敢放心走开，而不用盯着",
  "管好它的「记忆」，不再越用越笨、越聊越乱",
  "给自己配一套专属工作环境：工位便利贴、自动机关、技能抽屉",
  "让它在你不在场时，按时、批量、自动替你把活干了",
];

// 适合人群（跨行业，不止程序员）。scene 是一句话的真实场景。
export type CourseAudience = { role: string; scene: string };
export const courseAudiences: CourseAudience[] = [
  { role: "运营 / 行政", scene: "几百份杂乱文件、表格、PDF，自动改名归类、一键生成周报月报" },
  { role: "市场 / 增长", scene: "批量生成上百条文案变体，清洗投放数据，揪出表现差的素材" },
  { role: "销售", scene: "把「找线索 → 补全信息 → 发外联」串成一条不用手动的流水线" },
  { role: "财务 / 会计", scene: "一堆流水自动整理成分类报表、对账，写成老板看得懂的大白话财报" },
  { role: "法务 / 合规", scene: "批量审合同、做合规检查，搭个「快速找到对的人」的内部小工具" },
  { role: "数据 / 分析", scene: "用大白话问数据、清洗数据集、生成看板，不用写 SQL 和透视表" },
  { role: "电商运营", scene: "按订单和客户数据做人群分层，自动揪出可疑订单提醒人工复核" },
  { role: "老师 / 培训师", scene: "照课程标准搭课件、分层教案、配套测验和评分量规" },
  { role: "HR / 人力", scene: "人力规划、绩效校准、薪酬复盘，有现成框架陪你一步步走" },
  { role: "产品 / 创始人", scene: "不用请外包，自己搭个内部小工具或小网页，先把想法验证了" },
  { role: "研究 / 写作者", scene: "边写边查证加引用、逐段给反馈；翻几年笔记自动汇总成进展报告" },
];

// 前置要求（诚实但低门槛）
export type CoursePrereq = { need: string; note: string };
export const coursePrereqs: CoursePrereq[] = [
  { need: "一台电脑", note: "Mac / Windows / Linux 都行" },
  { need: "一个 Claude 订阅", note: "Pro 或 Max 套餐，Claude Code 就包含在里面" },
  { need: "愿意打开「终端」", note: "就是那个黑底白字的命令行窗口——开篇会手把手带你，不可怕" },
  { need: "会把事情讲清楚", note: "不需要会编程！但要能像交代同事一样把活说明白" },
  { need: "一点点耐心", note: "把它当新来的实习生「带」，而不是指望一句话读心" },
];

export type CoursePath = {
  name: string;
  who: string;
  labels: string[];
};

// 三条分层学习路线（对应开篇里的路线图）
export const coursePaths: CoursePath[] = [
  { name: "新手路线", who: "非技术 / 独立创业者 / 老师", labels: ["开篇", "模块一", "模块二", "模块三", "模块八"] },
  { name: "进阶路线", who: "想认真提效的个人", labels: ["模块四", "模块五", "模块六"] },
  { name: "实战路线", who: "想一个人开一支队伍的人", labels: ["模块七"] },
];

const courseSlugSet = new Set(courseEntries.map((e) => e.slug));

export function isCourseSlug(slug: string): boolean {
  return courseSlugSet.has(slug);
}

export function getCourseLabel(slug: string): string | undefined {
  return courseEntries.find((e) => e.slug === slug)?.label;
}

export function getCourseNeighbors(slug: string): {
  prev?: CourseEntry;
  next?: CourseEntry;
} {
  const i = courseEntries.findIndex((e) => e.slug === slug);
  if (i === -1) return {};
  return {
    prev: i > 0 ? courseEntries[i - 1] : undefined,
    next: i < courseEntries.length - 1 ? courseEntries[i + 1] : undefined,
  };
}
