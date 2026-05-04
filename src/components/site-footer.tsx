export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-[var(--border)] py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 text-sm text-[var(--muted-foreground)] sm:flex-row">
        <p>© {new Date().getFullYear()} Basion 的 Ai 小屋 🛖</p>
        <p className="font-serif italic">Build wonder with AI</p>
      </div>
    </footer>
  );
}
