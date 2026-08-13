import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  ["About", "about"],
  ["Dates", "dates"],
  ["Topics", "topics"],
  ["Speakers", "speakers"],
  ["Committees", "committees"],
  ["Register", "register"],
  ["Venue", "venue"],
  ["Contact", "contact"],
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-glass" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3 min-w-0">
          <div className="h-10 w-10 rounded-lg bg-accent-gradient grid place-items-center shrink-0 shadow-maroon">
            <span className="font-display font-bold text-white text-sm">F</span>
          </div>
          <div className="min-w-0 leading-tight">
            <div className={`font-display font-bold truncate ${scrolled ? "text-navy-deep" : "text-white"}`}>
              FPMSF'27
            </div>
            <div className={`text-[10px] truncate ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
              IIT Roorkee · Saharanpur
            </div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-1">
          {LINKS.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                scrolled
                  ? "text-foreground/80 hover:text-accent hover:bg-accent/5"
                  : "text-white/85 hover:text-white hover:bg-white/10"
              }`}
            >
              {label}
            </a>
          ))}
          <a
            href="#register"
            className="ml-2 px-4 py-2 rounded-md bg-accent-gradient text-white text-sm font-semibold shadow-maroon hover:opacity-90 transition"
          >
            Register
          </a>
        </nav>
        <button
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden p-2 rounded-md ${scrolled ? "text-navy-deep" : "text-white"}`}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden glass border-t border-border">
          <div className="px-4 py-3 flex flex-col gap-1">
            {LINKS.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-md text-sm font-medium text-foreground hover:bg-accent/5"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
