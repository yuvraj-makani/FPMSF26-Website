import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { SPEAKERS } from "@/lib/conference-data";

export function SpeakerGallery() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const qq = q.toLowerCase();
    return SPEAKERS.filter(
      (s) => s.name.toLowerCase().includes(qq) || s.institution.toLowerCase().includes(qq)
    );
  }, [q]);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <div className="relative min-w-0 flex-1 sm:flex-none">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search speakers or institution…"
            className="w-full sm:w-96 pl-9 pr-3 py-2.5 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-accent/40"
          />
        </div>
        <div className="text-sm text-muted-foreground sm:ml-auto">
          {filtered.length} of {SPEAKERS.length} speakers
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((s, i) => (
          <div
            key={s.name + i}
            className="group relative rounded-xl bg-card border border-border p-4 hover:shadow-elegant hover:-translate-y-0.5 hover:border-accent/40 transition-all duration-300 animate-fade-up"
            style={{ animationDelay: `${(i % 12) * 30}ms` }}
          >
            <div className="absolute top-0 left-4 right-4 h-0.5 bg-accent-gradient scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            <h3 className="font-display font-semibold text-navy-deep leading-tight">
              {s.name}
            </h3>
            <p className="text-xs text-muted-foreground mt-1.5">{s.institution}</p>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">No speakers match your search.</div>
      )}
    </div>
  );
}
