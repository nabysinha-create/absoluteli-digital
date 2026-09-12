export function TagList({ tags, tone = "dark" }: { tags: string[]; tone?: "light" | "dark" }) {
  return (
    <ul className="flex flex-wrap gap-3">
      {tags.map((tag) => (
        <li
          key={tag}
          className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.08em] ${
            tone === "dark" ? "border-line-dark text-cream-dim" : "border-brown/25 text-brown"
          }`}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
