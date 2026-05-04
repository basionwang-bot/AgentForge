import { getAllPosts, getPost } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} · Basion 的 Ai 小屋`,
    description: post.description,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--accent)]"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        返回首页
      </Link>

      <header className="mt-8 mb-12 border-b border-[var(--border)] pb-10">
        {post.tag && (
          <span className="text-xs font-medium uppercase tracking-wider text-[var(--accent)]">
            {post.tag}
          </span>
        )}
        <h1 className="mt-3 font-serif text-4xl font-semibold leading-[1.15] tracking-tight md:text-5xl">
          {post.title}
        </h1>
        {post.description && (
          <p className="mt-5 text-lg leading-relaxed text-[var(--muted-foreground)]">
            {post.description}
          </p>
        )}
        <div className="mt-6 flex items-center gap-4 text-sm text-[var(--muted-foreground)]">
          {post.date && <span>{post.date}</span>}
          {post.readingTime && <span>· {post.readingTime} 分钟阅读</span>}
        </div>
      </header>

      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />

      <footer className="mt-16 border-t border-[var(--border)] pt-8 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] px-5 py-2 text-sm transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          回到所有笔记
        </Link>
      </footer>
    </article>
  );
}
