function ListColumn({ label, items, tone }: { label: string; items: string[]; tone: "light" | "dark" }) {
  return (
    <div className="flex flex-col gap-3">
      <p className={`eyebrow ${tone === "dark" ? "text-copper-light" : "text-copper"}`}>{label}</p>
      <ul className="flex flex-col gap-1.5">
        {items.map((item) => (
          <li key={item} className={`text-sm leading-relaxed ${tone === "dark" ? "text-cream-dim" : "text-brown"}`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Connector({ tone }: { tone: "light" | "dark" }) {
  return (
    <div className="flex items-center justify-center py-1 md:px-4 md:py-0">
      <span
        aria-hidden
        className={`font-display text-lg md:rotate-0 rotate-90 ${tone === "dark" ? "text-copper-light" : "text-copper"}`}
      >
        →
      </span>
    </div>
  );
}

export function CapabilityLists({
  haveList,
  createList,
  tone = "light",
}: {
  haveList: string[];
  createList: string[];
  tone?: "light" | "dark";
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-start">
      <div className="flex-1">
        <ListColumn label="What You Already Have" items={haveList} tone={tone} />
      </div>
      <Connector tone={tone} />
      <div className="flex-1">
        <ListColumn label="What We Can Turn It Into" items={createList} tone={tone} />
      </div>
    </div>
  );
}
