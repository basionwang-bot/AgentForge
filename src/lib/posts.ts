import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

export type PostMeta = {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tag?: string;
  readingTime?: number;
};

export type Post = PostMeta & {
  html: string;
  raw: string;
};

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

function estimateReadingTime(text: string): number {
  const words = text.replace(/\s+/g, "").length;
  return Math.max(1, Math.round(words / 400));
}

function toDateString(value: unknown): string {
  if (!value) return "";
  if (value instanceof Date) {
    const y = value.getUTCFullYear();
    const m = String(value.getUTCMonth() + 1).padStart(2, "0");
    const d = String(value.getUTCDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }
  return String(value);
}

async function readPostFile(filename: string) {
  const full = path.join(POSTS_DIR, filename);
  const raw = await fs.readFile(full, "utf8");
  const { data, content } = matter(raw);
  const slug = filename.replace(/\.md$/, "");
  return { slug, data, content };
}

export async function getAllPosts(): Promise<PostMeta[]> {
  let files: string[];
  try {
    files = await fs.readdir(POSTS_DIR);
  } catch {
    return [];
  }
  const mdFiles = files.filter((f) => f.endsWith(".md"));
  const items = await Promise.all(
    mdFiles.map(async (f) => {
      const { slug, data, content } = await readPostFile(f);
      return {
        slug,
        title: (data.title as string) || slug,
        description: data.description as string | undefined,
        date: toDateString(data.date),
        tag: data.tag as string | undefined,
        readingTime: estimateReadingTime(content),
      } satisfies PostMeta;
    })
  );
  return items.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    const { data, content } = await readPostFile(`${slug}.md`);
    const processed = await remark()
      .use(remarkGfm)
      .use(remarkHtml, { sanitize: false })
      .process(content);
    return {
      slug,
      title: (data.title as string) || slug,
      description: data.description as string | undefined,
      date: toDateString(data.date),
      tag: data.tag as string | undefined,
      readingTime: estimateReadingTime(content),
      html: String(processed),
      raw: content,
    };
  } catch {
    return null;
  }
}
