import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone, Mail, MapPin, Zap, Battery, Sun, Lightbulb, Plug,
  Fan, Tv, PlugZap, ShieldCheck, MapPinned, Wrench, CheckCircle2, ArrowRight, Star, Quote,
  Users, Clock, Award, Heart,
} from "lucide-react";
import logo from "@/assets/logo.png";
import heroImg from "@/assets/hero-ev.jpg";
import solarImg from "@/assets/solar.jpg";
import batteryImg from "@/assets/battery.jpg";
import electricalImg from "@/assets/electrical.jpg";

const PHONE_DISPLAY = "+1 (832) 868-2964";
const PHONE_TEL = "+18328682964";
const EMAIL = "electricalandrenewableservices@gmail.com";
const ADDRESS = "Baytown TX, 77523, United States";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Electrical & Renewable Services LLC — EV Chargers, Battery Backup & Solar" },
      { name: "description", content: "Licensed electricians specializing in EV chargers, battery backup, solar, and general electrical services. Tesla, Span, Enphase & EG4 certified." },
      { property: "og:title", content: "Electrical & Renewable Services LLC" },
      { property: "og:description", content: "EV Chargers • Battery Backup • Solar — Licensed & Certified Local Electricians." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <Showcase />
      <Services />
      <Certifications />
      <AboutUs />
      <Testimonials />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="flex items-center gap-2.5 min-w-0">
          <img src={logo} alt="Logo" className="h-10 w-10 shrink-0" width={40} height={40} />
          <span className="truncate font-display text-sm font-bold sm:text-base">
            Electrical & <span className="text-accent-yellow">Renewable</span>
          </span>
        </a>
        <a
          href={`tel:${PHONE_TEL}`}
          className="inline-flex items-center gap-2 rounded-full bg-accent-yellow px-4 py-2 text-sm font-semibold text-black transition hover:brightness-110"
        >
          <Phone className="h-4 w-4" /> <span className="hidden sm:inline">Call Now</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="h-full w-full object-cover opacity-30" width={1536} height={1024} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 pt-12 pb-16 sm:pt-24 sm:pb-28">
        <div className="flex flex-col items-center text-center">
          <img src={logo} alt="Electrical & Renewable Services Logo" className="h-20 w-20 sm:h-32 sm:w-32" width={128} height={128} />
          <h1 className="mt-5 font-display text-3xl font-black leading-tight sm:mt-6 sm:text-4xl md:text-6xl">
            Electrical & Renewable<br />
            <span className="text-accent-yellow">Services</span> <span className="text-muted-foreground">LLC</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm sm:text-base md:text-xl text-muted-foreground">
            <span className="text-accent-yellow font-semibold">EV Chargers</span>
            <span className="mx-1.5 sm:mx-2">•</span>
            <span className="text-accent-green font-semibold">Battery Backup</span>
            <span className="mx-1.5 sm:mx-2">•</span>
            <span className="text-accent-green font-semibold">Solar</span>
          </p>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground/80">Licensed, local, and certified — powering homes the smart way.</p>

          <div className="mt-6 flex w-full flex-col items-stretch gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:items-center">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-yellow px-5 py-3 text-sm font-bold text-black shadow-lg shadow-accent-yellow/20 transition hover:brightness-110 sm:px-7 sm:py-4 sm:text-base"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" /> Call {PHONE_DISPLAY}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-accent-green/40 bg-accent-green/10 px-5 py-3 text-sm font-bold text-accent-green transition hover:bg-accent-green/20 sm:px-7 sm:py-4 sm:text-base"
            >
              Get Free Quote <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const showcase = [
  { img: solarImg, label: "Solar", accent: "green" as const },
  { img: batteryImg, label: "Battery Backup", accent: "green" as const },
  { img: heroImg, label: "EV Chargers", accent: "yellow" as const },
  { img: electricalImg, label: "Electrical Work", accent: "yellow" as const },
];

function Showcase() {
  return (
    <section className="mx-auto max-w-6xl px-3 pb-4 pt-2 sm:px-4">
      <div className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-4">
        {showcase.map((s) => (
          <div key={s.label} className="group relative overflow-hidden rounded-xl border border-border bg-card sm:rounded-2xl">
            <img
              src={s.img}
              alt={s.label}
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <span className={`absolute bottom-2 left-2 text-xs font-bold sm:bottom-3 sm:left-3 sm:text-sm ${s.accent === "green" ? "text-accent-green" : "text-accent-yellow"}`}>
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

const renewable = [
  { icon: PlugZap, name: "EV Chargers", desc: "Level 2 home & commercial install" },
  { icon: Battery, name: "Battery Backup", desc: "Whole-home power resilience" },
  { icon: Sun, name: "Solar", desc: "Grid-tied & off-grid systems" },
];
const general = [
  { icon: Lightbulb, name: "Lighting", desc: "Indoor, outdoor & landscape" },
  { icon: Plug, name: "Receptacles", desc: "New outlets, USB & GFCI" },
  { icon: Zap, name: "Generator Outlets", desc: "Standby & portable inlets" },
  { icon: Fan, name: "Ceiling Fans", desc: "Install & replacement" },
  { icon: Tv, name: "TV Mounting", desc: "Concealed wiring & mount" },
];

function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-3 py-12 sm:px-4 sm:py-20">
      <SectionHeader eyebrow="What we do" title="Services" />
      <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-2">
        <ServiceColumn title="Renewable Energy" accent="green" items={renewable} />
        <ServiceColumn title="General Electrical" accent="yellow" items={general} />
      </div>
    </section>
  );
}

function ServiceColumn({
  title, accent, items,
}: { title: string; accent: "green" | "yellow"; items: { icon: any; name: string; desc: string }[] }) {
  const accentColor = accent === "green" ? "text-accent-green" : "text-accent-yellow";
  const ring = accent === "green" ? "ring-accent-green/20" : "ring-accent-yellow/20";
  return (
    <div className={`rounded-2xl border border-border bg-card p-4 ring-1 ${ring} sm:rounded-3xl sm:p-6 md:p-8`}>
      <h3 className={`font-display text-xl font-bold sm:text-2xl ${accentColor}`}>{title}</h3>
      <ul className="mt-4 space-y-2 sm:mt-6 sm:space-y-3">
        {items.map(({ icon: Icon, name, desc }) => (
          <li key={name} className="flex items-start gap-3 rounded-xl bg-muted/40 p-3 transition hover:bg-muted/70 sm:gap-4 sm:rounded-2xl sm:p-4">
            <div className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-background sm:h-11 sm:w-11 sm:rounded-xl ${accentColor}`}>
              <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold sm:text-base">{name}</p>
              <p className="text-xs text-muted-foreground sm:text-sm">{desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Brand-styled wordmark logos rendered with CSS — distinctive type/colors per brand.
const certs = [
  {
    name: "Tesla Certified Installer",
    wordmark: "TESLA",
    bg: "bg-black",
    border: "border-red-500/40",
    text: "text-white",
    tracking: "tracking-[0.35em]",
    font: "font-display font-bold",
  },
  {
    name: "Span Smart Panel Pro",
    wordmark: "SPAN",
    bg: "bg-white",
    border: "border-zinc-300",
    text: "text-black",
    tracking: "tracking-tight",
    font: "font-display font-black",
  },
  {
    name: "Enphase Certified",
    wordmark: "enphase.",
    bg: "bg-white",
    border: "border-orange-400/50",
    text: "text-[#F3631C]",
    tracking: "tracking-tight",
    font: "font-display font-bold",
  },
  {
    name: "EG4 Certified",
    wordmark: "EG4",
    bg: "bg-[#0A2540]",
    border: "border-sky-400/40",
    text: "text-white",
    tracking: "tracking-wider",
    font: "font-display font-black italic",
  },
];

function Certifications() {
  return (
    <section id="certifications" className="border-y border-border bg-card/40 py-12 sm:py-20">
      <div className="mx-auto max-w-6xl px-3 sm:px-4">
        <SectionHeader eyebrow="Trust & expertise" title="Certified & Licensed" />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 sm:grid-cols-4">
          {certs.map((c) => (
            <div
              key={c.name}
              className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-background p-3 text-center transition hover:border-accent-yellow/40 sm:gap-4 sm:rounded-2xl sm:p-5"
            >
              <div
                className={`flex h-16 w-full items-center justify-center rounded-lg border sm:h-20 sm:rounded-xl ${c.border} ${c.bg} px-2 shadow-inner sm:px-3`}
              >
                <span className={`text-lg sm:text-2xl md:text-[1.6rem] ${c.font} ${c.text} ${c.tracking}`}>
                  {c.wordmark}
                </span>
              </div>
              <p className="text-xs font-semibold leading-tight sm:text-sm">{c.name}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground sm:mt-6">
          Tesla, Span, Enphase, and EG4 are trademarks of their respective owners.
        </p>
      </div>
    </section>
  );
}

function AboutUs() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-3 py-12 sm:px-4 sm:py-20">
      <SectionHeader eyebrow="Who we are" title="About Us" />

      <div className="mt-8 grid gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-5">
        {/* Main narrative — spans 3 cols on large screens */}
        <div className="lg:col-span-3 space-y-4 sm:space-y-6">
          <p className="text-base leading-relaxed text-foreground/90 sm:text-lg">
            <span className="font-display font-bold text-accent-yellow">Electrical &amp; Renewable Services</span> is
            a residential electrical and renewable energy company proudly built on
            <span className="font-semibold text-accent-green"> over 12&nbsp;years of hands-on experience</span>.
            What started as a commitment to honest, code-compliant workmanship has
            grown into a trusted local business homeowners turn to for
            everything from panel upgrades and troubleshooting to full-scale
            solar, battery backup, and EV&nbsp;charger installations.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            We specialize in the intersection of traditional electrical work and
            modern renewable energy — bringing technical precision, strict
            adherence to the National Electrical Code, and manufacturer-certified
            installation practices to every project. Whether we're wiring a new
            circuit or commissioning a Tesla Powerwall, every connection is
            tested, every panel is labeled, and every system is built to last.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Our approach is simple: treat every home like our own. That means
            transparent pricing with no hidden fees, same-day or next-day
            response times, and a genuine focus on long-term system reliability
            rather than quick fixes. We take the time to walk homeowners through
            their options, explain the work clearly, and ensure everything is
            permitted and inspected to the highest standards.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            As a family-owned, locally operated company based in Baytown, TX, we
            believe that trust is earned on every job site. Our growing list of
            five-star Google reviews speaks to the relationships we've built —
            and we're committed to keeping that standard with every customer we
            serve.
          </p>
        </div>

        {/* Quick-stat cards — right column */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-3 content-start sm:gap-4">
          {[
            { icon: Clock, value: "12+", label: "Years of Experience", accent: "yellow" as const },
            { icon: Users, value: "500+", label: "Happy Homeowners", accent: "green" as const },
            { icon: Award, value: "4", label: "Manufacturer Certs", accent: "yellow" as const },
            { icon: Heart, value: "5.0 ★", label: "Google Rating", accent: "green" as const },
          ].map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-1.5 rounded-xl border border-border bg-card p-4 text-center transition hover:border-accent-yellow/40 sm:gap-2 sm:rounded-2xl sm:p-5"
            >
              <div
                className={`grid h-9 w-9 place-items-center rounded-lg sm:h-11 sm:w-11 sm:rounded-xl ${
                  s.accent === "yellow"
                    ? "bg-accent-yellow/15 text-accent-yellow"
                    : "bg-accent-green/15 text-accent-green"
                }`}
              >
                <s.icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <span
                className={`font-display text-xl font-black sm:text-2xl ${
                  s.accent === "yellow" ? "text-accent-yellow" : "text-accent-green"
                }`}
              >
                {s.value}
              </span>
              <span className="text-[0.65rem] font-medium leading-tight text-muted-foreground sm:text-xs">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Homero Salinas",
    meta: "Local Guide · 36 reviews",
    when: "2 months ago",
    text: "My electrical box went out and a friend recommended Electrical & Renewable Services. Showed up on the same day and replaced my entire electrical box on the day it went out.",
  },
  {
    name: "Tunde A.",
    meta: "Local Guide · 20 reviews",
    when: "a week ago",
    text: "Christian did an excellent job installing our outdoor porch lights. They came out really nice and I couldn't be happier. He's very professional and diligent — I highly recommend his services!",
  },
  {
    name: "Cheryl Krebs",
    meta: "4 reviews",
    when: "a week ago",
    text: "Christian is smart and friendly. My house has special low-voltage wiring and he was the only electrician I talked with who knew the specifics of it. He is my go-to guy for electrical!",
  },
  {
    name: "Jesus Tapiador",
    meta: "9 reviews",
    when: "a week ago",
    text: "Skilled electrician! Installed my new Tesla charger and had to move some breakers around. What I'm most pleased about is that he understands Powerwall and Tesla Solar as well — certified under those programs, so he was able to plug my charger to the gateway for bidirectional charging. Thanks Cristian!",
  },
  {
    name: "Peter Baham",
    meta: "1 review",
    when: "3 weeks ago",
    text: "Great company, super knowledgeable and professional. Installed our charging station and it came out great!",
  },
  {
    name: "Paige Hall",
    meta: "Local Guide · 22 reviews",
    when: "3 weeks ago",
    text: "Christian did an amazing job for a great deal — only hiring him to do our electrical work from now on. He came fast the next day and was very easy to work with, even helped explain electrical problems I was having and solved some issues in my home. Excellent customer service and attitude, down to earth, and punctual. I found my go-to guy for all my electrical needs.",
  },
];

function Testimonials() {
  return (
    <section id="reviews" className="mx-auto max-w-6xl px-3 py-12 sm:px-4 sm:py-20">
      <SectionHeader eyebrow="What customers say" title="5-Star Google Reviews" />
      <div className="mt-4 flex items-center justify-center gap-1.5 text-accent-yellow sm:mt-6 sm:gap-2">
        {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current sm:h-5 sm:w-5" />)}
        <span className="ml-1.5 text-xs font-semibold text-foreground sm:ml-2 sm:text-sm">Rated 5.0 on Google</span>
      </div>
      <div className="mt-6 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <article key={t.name} className="relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-4 sm:rounded-3xl sm:p-6">
            <Quote className="absolute right-4 top-4 h-6 w-6 text-accent-yellow/20 sm:right-5 sm:top-5 sm:h-8 sm:w-8" />
            <div className="flex items-center gap-1 text-accent-yellow">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current sm:h-4 sm:w-4" />)}
            </div>
            <p className="mt-3 flex-1 text-xs leading-relaxed text-foreground/90 sm:mt-4 sm:text-sm">"{t.text}"</p>
            <div className="mt-4 flex items-center gap-3 border-t border-border pt-3 sm:mt-5 sm:pt-4">
              <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent-green/20 text-sm font-display font-bold text-accent-green sm:h-10 sm:w-10">
                {t.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <p className="truncate text-xs font-semibold sm:text-sm">{t.name}</p>
                <p className="truncate text-[0.65rem] text-muted-foreground sm:text-xs">{t.meta} · {t.when}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const reasons = [
  { icon: ShieldCheck, title: "Licensed & Insured", desc: "Fully licensed master electricians with comprehensive insurance for every job." },
  { icon: MapPinned, title: "Local & Family-Owned", desc: "Proudly serving our community with same-day quotes and fast response times." },
  { icon: Wrench, title: "Reliable Workmanship", desc: "Manufacturer-certified installs backed by warranty and honest pricing." },
];

function WhyUs() {
  return (
    <section className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-3 py-12 sm:px-4 sm:py-20">
        <SectionHeader eyebrow="Why choose us" title="Power you can trust" />
        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-3">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-5 sm:rounded-3xl sm:p-7">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent-yellow text-black sm:h-12 sm:w-12 sm:rounded-2xl">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold sm:mt-5 sm:text-xl">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground sm:mt-2 sm:text-base">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="border-t border-border bg-card/30 py-12 sm:py-20">
      <div className="mx-auto max-w-6xl px-3 sm:px-4">
        <SectionHeader eyebrow="Get in touch" title="Request a Free Quote" />
        <div className="mt-8 grid gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-2">
          <div className="space-y-3 sm:space-y-4">
            <ContactRow icon={Phone} label="Call us" value={PHONE_DISPLAY} href={`tel:${PHONE_TEL}`} accent="yellow" />
            <ContactRow icon={Mail} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} accent="green" />
            <ContactRow icon={MapPin} label="Service area" value={ADDRESS} accent="yellow" />
            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent-yellow px-5 py-3.5 text-sm font-bold text-black transition hover:brightness-110 sm:w-auto sm:rounded-2xl sm:px-6 sm:py-4 sm:text-base"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" /> Tap to Call Now
            </a>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-2xl border border-border bg-background p-4 sm:rounded-3xl sm:p-6 md:p-8"
          >
            {sent ? (
              <div className="flex flex-col items-center gap-3 py-8 text-center sm:py-10">
                <CheckCircle2 className="h-10 w-10 text-accent-green sm:h-12 sm:w-12" />
                <h3 className="text-xl font-bold sm:text-2xl">Thanks!</h3>
                <p className="text-sm text-muted-foreground sm:text-base">We'll be in touch within one business day.</p>
              </div>
            ) : (
              <div className="space-y-3 sm:space-y-4">
                <Field label="Name"><input required type="text" className={inputCls} placeholder="Jane Smith" /></Field>
                <Field label="Phone"><input required type="tel" className={inputCls} placeholder="(555) 123-4567" /></Field>
                <Field label="Service">
                  <select required className={inputCls} defaultValue="">
                    <option value="" disabled>Select a service…</option>
                    <option>EV Charger Install</option>
                    <option>Battery Backup</option>
                    <option>Solar</option>
                    <option>Lighting</option>
                    <option>Receptacles / Outlets</option>
                    <option>Generator Outlet</option>
                    <option>Ceiling Fan</option>
                    <option>TV Mounting</option>
                    <option>Other</option>
                  </select>
                </Field>
                <Field label="Message"><textarea rows={4} className={inputCls} placeholder="Tell us about your project…" /></Field>
                <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-green px-6 py-3 text-sm font-bold text-black transition hover:brightness-110 sm:py-3.5 sm:text-base">
                  Send Request <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-xl border border-border bg-muted/40 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-accent-yellow focus:bg-muted";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}

function ContactRow({
  icon: Icon, label, value, href, accent,
}: { icon: any; label: string; value: string; href?: string; accent: "yellow" | "green" }) {
  const color = accent === "yellow" ? "text-accent-yellow" : "text-accent-green";
  const Wrap: any = href ? "a" : "div";
  return (
    <Wrap href={href} className="flex items-center gap-3 overflow-hidden rounded-xl border border-border bg-background p-3.5 transition hover:border-border/80 sm:gap-4 sm:rounded-2xl sm:p-5">
      <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-muted sm:h-12 sm:w-12 sm:rounded-xl ${color}`}>
        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
      </div>
      <div className="min-w-0 overflow-hidden">
        <p className="text-[0.65rem] uppercase tracking-wider text-muted-foreground sm:text-xs">{label}</p>
        <p className="break-all text-xs font-semibold sm:truncate sm:break-normal sm:text-base">{value}</p>
      </div>
    </Wrap>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="rounded-full border border-accent-yellow/40 bg-accent-yellow/10 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-accent-yellow sm:px-3 sm:py-1 sm:text-xs">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-2xl font-black sm:mt-4 sm:text-3xl md:text-5xl">{title}</h2>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8 sm:py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-3 text-center sm:gap-3 sm:px-4">
        <img src={logo} alt="" className="h-8 w-8 sm:h-10 sm:w-10" width={40} height={40} />
        <p className="text-xs text-muted-foreground sm:text-sm">
          © {new Date().getFullYear()} Electrical & Renewable Services LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
