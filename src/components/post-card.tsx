import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { PostMeta } from "@/lib/posts";

export function PostCard({ post, index = 0 }: { post: PostMeta; index?: number }) {
  return (
    <Link
      href={`/posts/${post.slug}`}
      className="fade-up group flex flex-col gap-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:shadow-lg"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="flex items-center justify-between">
        {post.tag ? (
          <span className="text-xs font-medium uppercase tracking-wider text-[var(--accent)]">
            {post.tag}
          </span>
        ) : (
          <span />
        )}
        <ArrowUpRight className="h-4 w-4 text-[var(--muted-foreground)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]" />
      </div>

      <h3 className="font-serif text-xl font-semibold leading-snug text-[var(--card-foreground)] transition-colors group-hover:text-[var(--accent)]">
        {post.title}
      </h3>

      {post.description && (
        <p className="line-clamp-3 text-sm leading-relaxed text-[var(--muted-foreground)]">
          {post.description}
        </p>
      )}

      <div className="mt-auto flex items-center justify-between pt-3 text-xs text-[var(--muted-foreground)]">
        <span>{post.date}</span>
        {post.readingTime && <span>{post.readingTime} 分钟阅读</span>}
      </div>
    </Link>
  );
}
