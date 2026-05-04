import { Hero } from "@/components/hero";
import { PostCard } from "@/components/post-card";
import { getAllPosts } from "@/lib/posts";

export default async function HomePage() {
  const posts = await getAllPosts();

  return (
    <>
      <Hero />

      <section id="posts" className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-[var(--accent)]">
              Notes
            </p>
            <h2 className="mt-1 font-serif text-3xl font-semibold tracking-tight md:text-4xl">
              最新笔记
            </h2>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">
              {posts.length} 篇 · 持续更新
            </p>
          </div>
        </div>

        {posts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-[var(--border)] p-12 text-center text-[var(--muted-foreground)]">
            暂无内容，敬请期待 ✨
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => (
              <PostCard key={p.slug} post={p} index={i} />
            ))}
          </div>
        )}
      </section>

      <section
        id="about"
        className="mx-auto max-w-5xl border-t border-[var(--border)] px-6 py-20"
      >
        <p className="text-sm font-medium uppercase tracking-wider text-[var(--accent)]">
          About
        </p>
        <h2 className="mt-1 font-serif text-3xl font-semibold tracking-tight md:text-4xl">
          关于这间小屋
        </h2>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <p className="text-[var(--muted-foreground)] leading-relaxed">
            这是一间 AI 学习的小屋 🛖。我会把日常使用 AI 工具的心得、踩过的坑、值得分享的发现，写成一篇篇笔记放在这里。
            没有玄学，没有焦虑，只有"今天可以怎么用 AI 让生活更轻松一点"。
          </p>
          <p className="text-[var(--muted-foreground)] leading-relaxed">
            如果你刚接触 AI，从工具地图开始；如果你已经在用，看看是否有还没发现的好东西。
            每篇笔记我都尽量做到——读完就能动手。
          </p>
        </div>
      </section>
    </>
  );
}
