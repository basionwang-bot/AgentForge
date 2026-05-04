import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)]">
      <div className="hut-grid absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
      <div
        className="absolute inset-0 -z-10 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 600px 400px at 20% 0%, color-mix(in srgb, var(--accent) 12%, transparent), transparent), radial-gradient(ellipse 500px 300px at 80% 30%, color-mix(in srgb, var(--accent) 8%, transparent), transparent)",
        }}
      />

      <div className="mx-auto max-w-5xl px-6 py-24 md:py-36">
        <div className="fade-up inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-3.5 py-1 text-xs text-[var(--muted-foreground)] shadow-sm">
          <Sparkles className="h-3 w-3 text-[var(--accent)]" />
          <span>v0.1 · 持续更新中</span>
        </div>

        <h1
          className="fade-up mt-8 font-serif text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl"
          style={{ animationDelay: "0.05s" }}
        >
          和 <span className="text-[var(--accent)]">AI</span> 一起，
          <br />
          做更有趣的事。
        </h1>

        <p
          className="fade-up mt-7 max-w-xl text-lg leading-relaxed text-[var(--muted-foreground)] md:text-xl"
          style={{ animationDelay: "0.1s" }}
        >
          Build wonder with AI — 这里是 Basion 的 AI 学习小屋。我把日常踩过的坑、用过的工具、读到的好东西都整理在这里，给你一份能直接抄作业的"AI 工具地图"。
        </p>

        <div
          className="fade-up mt-10 flex flex-wrap gap-3"
          style={{ animationDelay: "0.15s" }}
        >
          <Link
            href="#posts"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-[var(--accent-foreground)] shadow-sm transition-all hover:opacity-90 hover:shadow-md"
          >
            开始阅读
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="#about"
            className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--card)] px-6 py-3 text-sm font-medium transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            关于小屋
          </Link>
        </div>
      </div>
    </section>
  );
}
