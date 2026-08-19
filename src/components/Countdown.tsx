import { useEffect, useState } from "react";

const TARGET = new Date("2027-02-25T09:00:00+05:30").getTime();

export function Countdown() {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const i = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(i);
  }, []);
  const diff = Math.max(0, TARGET - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff / 3600000) % 24);
  const mins = Math.floor((diff / 60000) % 60);
  const secs = Math.floor((diff / 1000) % 60);
  const items = [
    { v: days, l: "Days" },
    { v: hours, l: "Hours" },
    { v: mins, l: "Minutes" },
    { v: secs, l: "Seconds" },
  ];
  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4">
      {items.map((it) => (
        <div key={it.l} className="glass-dark rounded-xl px-2 py-3 sm:px-4 sm:py-4 text-center">
          <div className="font-display text-2xl sm:text-4xl font-bold text-white tabular-nums">
            {String(it.v).padStart(2, "0")}
          </div>
          <div className="text-[10px] sm:text-xs uppercase tracking-widest text-white/60 mt-1">{it.l}</div>
        </div>
      ))}
    </div>
  );
}
