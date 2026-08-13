import {
  MapPin, Globe2, FileDown, FileText,
  Droplets, Zap, Leaf, Recycle, Atom, Layers, FlaskConical, Wind,
  Mail, Phone, MapPinned,
  Award, BookOpen, Building2, ArrowRight, Check
} from "lucide-react";
import heroBg from "@/assets/james-thomson.jpg";
import campusImg from "@/assets/james-thomson.jpg";
import { Countdown } from "@/components/Countdown";
import { Nav } from "@/components/Nav";
import { SpeakerGallery } from "@/components/SpeakerGallery";
import { CommitteeTabs } from "@/components/CommitteeTabs";
import { TOPICS, ORGANIZERS } from "@/lib/conference-data";

export default function App() {
  return <Home />;
}

const ABOUT_PILLARS = [
  { icon: Droplets, title: "Clean Water", desc: "Advanced membranes for potable water & wastewater treatment." },
  { icon: Zap, title: "Renewable Energy", desc: "Functional materials for harvesting, conversion & storage." },
  { icon: Leaf, title: "Net Zero Carbon", desc: "Pathways to decarbonised industrial processes." },
  { icon: Recycle, title: "Circular Resources", desc: "Recyclable polymers & closed-loop material systems." },
  { icon: Atom, title: "Functional Polymers", desc: "Designer macromolecules for tomorrow's challenges." },
  { icon: Layers, title: "Membrane Science", desc: "Next-generation separation & purification technologies." },
  { icon: FlaskConical, title: "Green Hydrogen", desc: "Electrocatalysts & systems for clean H₂ production." },
  { icon: Wind, title: "Environmental Remediation", desc: "Materials engineered to remove emerging contaminants." },
];

const TIMELINE = [
  { date: "15 Jan 2027", title: "Abstract Submission", desc: "Deadline for abstract submissions" },
  { date: "20 Jan 2027", title: "Acceptance Notification", desc: "Authors informed of acceptance" },
  { date: "31 Jan 2027", title: "Registration Closes", desc: "Final date for delegate registration" },
  { date: "18 Feb – 19 Feb 2027", title: "Conference Days", desc: "Two days of talks, posters & networking" },
];

const PRICING = [
  { tier: "Academic / Faculty / Scientist", price: "₹6,000", note: "India", popular: false },
  { tier: "Research Scholar / Student", price: "₹4,000", note: "India", popular: true },
  { tier: "Industrial / Entrepreneur", price: "₹8,000", note: "India", popular: false },
  { tier: "Accompanying Guest", price: "₹3,000", note: "India", popular: false },
  { tier: "Academic / Faculty / Scientist & Foreign Delegate", price: "$200", note: "International", popular: false },
];

const SPONSORS = [
  { tier: "Diamond Partner", price: "₹2.0 Lakhs", perks: ["Premier branding", "8 complimentary passes", "Keynote slot", "Exhibition booth (premium)", "Logo on all collaterals"] },
  { tier: "Platinum Partner", price: "₹1.0 Lakh", perks: ["Prominent branding", "4 complimentary passes", "Exhibition booth", "Logo on website & brochure"] },
  { tier: "Gold Partner", price: "₹0.50 Lakh", perks: ["Branding in venue", "2 complimentary passes", "Logo on brochure"] },
  { tier: "Silver Partner", price: "₹0.25 Lakh", perks: ["Logo recognition", "1 complimentary pass", "Acknowledgment on website"] },
];

function Home() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Nav />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.42_0.16_25/0.3),_transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center w-full">
          <div className="text-white animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-dark text-xs font-medium tracking-wide mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              18 February – 19 February 2027 · Hybrid
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              FPMSF<span className="text-gold">'</span>27
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-white/85 font-light max-w-2xl leading-relaxed">
              International Conference on <strong className="font-semibold">Functional Polymers and Membranes</strong> for a Sustainable Future
            </p>
            <p className="mt-3 text-sm sm:text-base text-gold/90 italic">
              Bridging Materials Science with Clean Technologies
            </p>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
              <span className="inline-flex items-center gap-2"><MapPin size={14} /> IIT Roorkee, Saharanpur Campus</span>
              <span className="inline-flex items-center gap-2"><Globe2 size={14} /> Hybrid Conference</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://forms.gle/SKP2WSGUtxA5f8Cx7" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-accent-gradient text-white text-sm font-semibold shadow-maroon hover:opacity-90 transition">
                <FileText size={16} /> Submit Abstract
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg glass-dark text-white text-sm font-semibold hover:bg-white/15 transition">
                <FileDown size={16} /> Brochure
              </a>
            </div>
          </div>

          <div className="lg:justify-self-end w-full max-w-md animate-fade-up" style={{ animationDelay: "150ms" }}>
            <div className="glass-dark rounded-2xl p-6 sm:p-7">
              <div className="text-xs uppercase tracking-[0.2em] text-white/60 mb-4 text-center">
                Conference Begins In
              </div>
              <Countdown />
              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between text-sm">
                <div className="text-white/70">Organised by</div>
                <div className="text-white font-semibold text-right">DPPE · IIT Roorkee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" eyebrow="About" title="A confluence of science, sustainability & innovation">
        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
          FPMSF'27 brings together the global community of polymer scientists, membrane technologists,
          chemical engineers and clean-energy researchers to address the most urgent challenges of our
          time — clean water, renewable energy, and a net-zero carbon future. The conference is hosted
          by the Department of Polymer and Process Engineering, IIT Roorkee Saharanpur Campus.
        </p>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {ABOUT_PILLARS.map((p, i) => (
            <div
              key={p.title}
              className="group rounded-2xl bg-card border border-border p-5 hover:border-accent/40 hover:shadow-elegant hover:-translate-y-1 transition-all animate-fade-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="h-11 w-11 rounded-xl bg-accent/10 text-accent grid place-items-center group-hover:bg-accent-gradient group-hover:text-white transition-colors">
                <p.icon size={20} />
              </div>
              <h3 className="mt-4 font-display font-semibold text-navy-deep">{p.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* DATES TIMELINE */}
      <Section id="dates" eyebrow="Important Dates" title="Mark your calendar" dark>
        <div className="relative">
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {TIMELINE.map((t, i) => (
              <div key={t.title} className="relative animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="hidden lg:block absolute top-5 left-1/2 -translate-x-1/2 h-5 w-5 rounded-full bg-accent-gradient ring-4 ring-navy-deep" />
                <div className="lg:mt-16 glass-dark rounded-2xl p-6">
                  <div className="text-xs uppercase tracking-widest text-gold font-semibold">Phase {i + 1}</div>
                  <div className="mt-2 font-display text-xl font-bold text-white">{t.date}</div>
                  <div className="mt-3 text-white/90 font-medium">{t.title}</div>
                  <div className="mt-1 text-sm text-white/60">{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* TOPICS */}
      <Section id="topics" eyebrow="Focused Areas" title="Themes & topics">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {TOPICS.map((topic, i) => (
            <div
              key={topic}
              className="group rounded-xl bg-card border border-border p-4 flex items-start gap-3 hover:border-accent/40 hover:bg-accent/[0.02] transition-all animate-fade-up"
              style={{ animationDelay: `${i * 25}ms` }}
            >
              <div className="mt-0.5 h-7 w-7 shrink-0 rounded-lg bg-accent/10 text-accent grid place-items-center text-xs font-bold group-hover:bg-accent-gradient group-hover:text-white transition-colors">
                {String(i + 1).padStart(2, "0")}
              </div>
              <span className="text-sm font-medium text-foreground leading-snug">{topic}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ORGANIZERS */}
      <Section id="organizers" eyebrow="Leadership" title="Key organizers">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {ORGANIZERS.map((o, i) => (
            <div
              key={o.name}
              className="rounded-2xl bg-card border border-border overflow-hidden hover:shadow-elegant hover:-translate-y-1 transition-all animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="aspect-square bg-navy-gradient relative overflow-hidden">
                <img
                  src={o.photo}
                  alt={o.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-accent-gradient text-white text-[10px] uppercase tracking-wider font-semibold shadow-maroon">
                  {o.role}
                </div>
              </div>
              <div className="p-4 text-center">
                <div className="font-display font-semibold text-navy-deep leading-tight">{o.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{o.affil}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SPEAKERS */}
      <Section id="speakers" eyebrow="Eminent Speakers" title="A global gathering of minds">
        <p className="text-muted-foreground max-w-2xl mb-8 -mt-4">
          Leading researchers from across the world will share advances in functional materials, membrane technology and clean energy.
        </p>
        <SpeakerGallery />
      </Section>

      {/* COMMITTEES */}
      <Section id="committees" eyebrow="Committees" title="The people behind FPMSF'26">
        <CommitteeTabs />
      </Section>

      {/* REGISTRATION */}
      <Section id="register" eyebrow="Registration" title="Reserve your seat" dark>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {PRICING.map((p, i) => (
            <div
              key={p.tier}
              className={`rounded-2xl p-6 relative animate-fade-up transition-all hover:-translate-y-1 ${
                p.popular ? "bg-accent-gradient text-white shadow-maroon scale-[1.02]" : "glass-dark text-white"
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gold text-navy-deep text-[10px] font-bold uppercase tracking-wider">
                  Most popular
                </div>
              )}
              <div className="text-xs uppercase tracking-widest text-white/70">{p.note}</div>
              <div className="mt-2 font-medium text-sm h-10 leading-tight">{p.tier}</div>
              <div className="mt-4 font-display text-3xl font-bold">{p.price}</div>
              <a
                href="https://forms.gle/SKP2WSGUtxA5f8Cx7"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${
                  p.popular ? "text-white hover:gap-3" : "text-gold hover:gap-3"
                } transition-all`}
              >
                Submit Abstract <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* ABSTRACT */}
      <Section id="abstract" eyebrow="Call for Papers" title="Abstract submission">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-start">
          <div className="rounded-2xl bg-card border border-border p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold text-navy-deep">Submission guidelines</h3>
            <ul className="mt-5 space-y-3">
              {[
                "Maximum 300 words, single page format",
                "MS Word (.docx) submissions only",
                "Times New Roman, 12 pt, single-spaced",
                "Figures and tables permitted within the page",
                "Include title, authors, affiliations & corresponding email",
              ].map((g) => (
                <li key={g} className="flex items-start gap-3 text-sm text-foreground">
                  <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-accent/10 text-accent grid place-items-center">
                    <Check size={12} />
                  </span>
                  {g}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-hero-gradient text-white p-6 sm:p-8 shadow-elegant">
            <div className="text-xs uppercase tracking-widest text-gold">Submit to</div>
            <a href="mailto:apmmwe@pe.iitr.ac.in" className="mt-2 block font-display text-xl sm:text-2xl font-bold break-all hover:text-gold transition">
              apmmwe@pe.iitr.ac.in
            </a>
            <p className="mt-4 text-sm text-white/80">
              Submissions close 31 January 2027. Selected abstracts will be considered for oral or poster presentation.
            </p>
            <a href="https://forms.gle/SKP2WSGUtxA5f8Cx7" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-navy-deep text-sm font-semibold hover:bg-gold transition">
              <FileText size={14} /> Submit Abstract
            </a>
          </div>
        </div>
      </Section>

      {/* PUBLICATIONS */}
      <Section id="publications" eyebrow="Publications" title="Where your work goes next">
        <div className="rounded-2xl bg-card border border-border p-6 sm:p-10 grid lg:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <BookOpen className="text-accent" size={32} />
            <h3 className="mt-3 font-display text-2xl font-bold text-navy-deep">
              Selected papers in Elsevier & Wiley journals
            </h3>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              Selected papers may be considered for publication in reputed Elsevier and Wiley indexed
              journals after a rigorous peer-review process. Authors will be invited following the conference.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {["Elsevier", "Wiley", "RSC", "Springer"].map((j) => (
              <div key={j} className="h-20 w-32 rounded-lg border border-border bg-muted grid place-items-center font-display font-semibold text-navy-deep">
                {j}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* SPONSORSHIP */}
      <Section id="sponsorship" eyebrow="Partner with us" title="Sponsorship packages">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SPONSORS.map((s, i) => (
            <div
              key={s.tier}
              className="rounded-2xl bg-card border border-border p-6 hover:shadow-elegant hover:-translate-y-1 transition-all animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <Award className={`${i === 0 ? "text-gold" : i === 1 ? "text-accent" : "text-muted-foreground"}`} size={28} />
              <div className="mt-4 font-display text-lg font-bold text-navy-deep">{s.tier}</div>
              <div className="mt-1 font-display text-2xl font-bold text-accent">{s.price}</div>
              <ul className="mt-5 space-y-2">
                {s.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <Check size={12} className="mt-1 text-accent shrink-0" /> {perk}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* VENUE */}
      <Section id="venue" eyebrow="Venue" title="IIT Roorkee, Saharanpur Campus">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-2xl overflow-hidden border border-border shadow-elegant">
            <img src={campusImg} alt="IIT Roorkee Saharanpur Campus" width={1280} height={768} loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl bg-card border border-border p-6 sm:p-8 space-y-5">
            <div>
              <h3 className="font-display text-2xl font-bold text-navy-deep">A campus rooted in legacy</h3>
              <p className="mt-3 text-muted-foreground">
                The Saharanpur Campus of IIT Roorkee is home to the Department of Polymer and Process
                Engineering — a leading centre for polymer science, membrane technology and chemical engineering
                research in India.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <InfoRow icon={MapPinned} label="Address" value="Paper Mill Road, Saharanpur – 247001, UP, India" />
              <InfoRow icon={MapPin} label="Nearest Railway" value="Saharanpur Junction (5 km)" />
              <InfoRow icon={Globe2} label="Nearest Airport" value="IGI, New Delhi (180 km)" />
              <InfoRow icon={Building2} label="Hotels" value="Multiple options within 3 km radius" />
            </div>
            <div className="rounded-xl overflow-hidden border border-border h-56">
              <iframe
                title="IIT Roorkee Saharanpur Campus Map"
                src="https://www.google.com/maps?q=IIT+Roorkee+Saharanpur+Campus,+Paper+Mill+Road,+Saharanpur&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* DEPARTMENT */}
      <Section id="department" eyebrow="The Department" title="DPPE — where polymers meet purpose" dark>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-white/80 leading-relaxed">
              The Department of Polymer and Process Engineering (DPPE) at IIT Roorkee, Saharanpur Campus, is
              a leading hub of academic excellence and industrial collaboration. Founded with a vision to
              advance sustainable engineering, the department combines deep research expertise with hands-on
              education across polymer science, process engineering, advanced materials and membrane technology.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { v: "40+", l: "Faculty & researchers" },
                { v: "150+", l: "Active publications / yr" },
                { v: "25+", l: "Industry collaborations" },
              ].map((s) => (
                <div key={s.l} className="glass-dark rounded-xl p-4 text-center">
                  <div className="font-display text-2xl font-bold text-white">{s.v}</div>
                  <div className="text-[11px] text-white/60 mt-1 leading-tight">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {["Polymer Science", "Process Engineering", "Chemical Engineering", "Advanced Materials", "Membrane Technology", "Sustainable Systems"].map((a) => (
              <div key={a} className="glass-dark rounded-xl p-5 text-white">
                <Atom size={20} className="text-gold" />
                <div className="mt-3 font-display font-semibold">{a}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" eyebrow="Contact" title="Get in touch">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl bg-card border border-border p-6">
            <Mail className="text-accent" size={22} />
            <div className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">Email</div>
            <a href="mailto:apmmwe@pe.iitr.ac.in" className="block font-display font-semibold text-navy-deep mt-1 break-all hover:text-accent">
              apmmwe@pe.iitr.ac.in
            </a>
          </div>
          <div className="rounded-2xl bg-card border border-border p-6">
            <Phone className="text-accent" size={22} />
            <div className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">Phone</div>
            <p className="mt-1 text-sm text-foreground">+91-132-271-4000</p>
          </div>
          <div className="rounded-2xl bg-card border border-border p-6 md:col-span-2">
            <MapPinned className="text-accent" size={22} />
            <div className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">Address</div>
            <p className="mt-1 text-sm text-foreground">
              Department of Polymer and Process Engineering,<br />
              IIT Roorkee, Saharanpur Campus,<br />
              Paper Mill Road, Saharanpur – 247001, Uttar Pradesh, India
            </p>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-navy-gradient text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-lg bg-accent-gradient grid place-items-center font-display font-bold">F</div>
              <div>
                <div className="font-display font-bold text-lg">FPMSF'27</div>
                <div className="text-xs text-white/60">IIT Roorkee · Saharanpur Campus</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-white/70 max-w-md leading-relaxed">
              International Conference on Functional Polymers and Membranes for a Sustainable Future —
              bridging materials science with clean technologies, 18 Feb – 19 Feb 2027.
            </p>
          </div>
          <FooterCol title="Quick Links" links={[["About", "#about"], ["Speakers", "#speakers"], ["Register", "#register"], ["Venue", "#venue"]]} />
          <FooterCol title="Conference" links={[["Topics", "#topics"], ["Abstract", "#abstract"], ["Sponsorship", "#sponsorship"], ["Contact", "#contact"]]} />
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row gap-3 justify-between text-xs text-white/60">
            <div>© 2027 Department of Polymer and Process Engineering, IIT Roorkee. All rights reserved.</div>
            <div>Indian Institute of Technology Roorkee · Saharanpur Campus</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({
  id, eyebrow, title, children, dark = false,
}: { id: string; eyebrow: string; title: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <section
      id={id}
      className={`relative py-20 sm:py-28 ${dark ? "bg-hero-gradient text-white" : "bg-background"}`}
    >
      {dark && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.42_0.16_25/0.15),_transparent_60%)]" />
      )}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14">
          <div className={`text-xs uppercase tracking-[0.25em] font-semibold ${dark ? "text-gold" : "text-accent"}`}>
            {eyebrow}
          </div>
          <h2 className={`mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${dark ? "text-white" : "text-navy-deep"}`}>
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function InfoRow({ icon: Icon, label, value }: { icon: typeof MapPin; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="h-9 w-9 shrink-0 rounded-lg bg-accent/10 text-accent grid place-items-center">
        <Icon size={16} />
      </div>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="text-sm font-medium text-foreground">{value}</div>
      </div>
    </div>
  );
}


function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-widest text-gold font-semibold">{title}</div>
      <ul className="mt-4 space-y-2">
        {links.map(([l, h]) => (
          <li key={l}>
            <a href={h} className="text-sm text-white/75 hover:text-white transition">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
