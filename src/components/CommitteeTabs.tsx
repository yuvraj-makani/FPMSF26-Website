import { useState } from "react";
import { COMMITTEES } from "@/lib/conference-data";

const TABS = [
  { id: "international" as const, label: "International Advisory" },
  { id: "national" as const, label: "National Organizing" },
  { id: "local" as const, label: "Local Organizing" },
];

export function CommitteeTabs() {
  const [tab, setTab] = useState<keyof typeof COMMITTEES>("international");
  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
              tab === t.id
                ? "bg-accent-gradient text-white shadow-maroon"
                : "bg-card border border-border text-foreground hover:border-accent/40"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {COMMITTEES[tab].map((m, i) => {
          const [name, inst] = m.split("—").map((s) => s.trim());
          return (
            <div
              key={m}
              className="rounded-xl bg-card border border-border p-5 hover:shadow-elegant hover:border-accent/30 transition-all animate-fade-up"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <div className="font-display font-semibold text-navy-deep">{name}</div>
              {inst && <div className="text-sm text-muted-foreground mt-1">{inst}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
