import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import * as React from "react";
import {
  Phone, Mail, MapPin, Zap, Battery, Sun, Lightbulb, Plug,
  Fan, Tv, PlugZap, ShieldCheck, MapPinned, Wrench, CheckCircle2,
  ArrowRight, Star, Quote, Users, Clock, Award, Heart, ChevronRight,
  ChevronLeft, X, Home as HomeIcon,
} from "lucide-react";

import logo from "@/assets/logo.png";
import heroEv from "@/assets/hero-ev.jpg";
import solarImg from "@/assets/solar.jpg";
import batteryImg from "@/assets/battery.jpg";
import electricalImg from "@/assets/electrical.jpg";
import aboutUsImg from "@/assets/about-uss.png";
import generatorImg from "@/assets/generator-install.jpg";

// Portfolio images
import w1 from "@/assets/portfolio/work-1.jpeg";
import w2 from "@/assets/portfolio/work-2.jpeg";
import w3 from "@/assets/portfolio/work-3.jpeg";
import w4 from "@/assets/portfolio/work-4.jpeg";
import w5 from "@/assets/portfolio/work-5.jpeg";
import w6 from "@/assets/portfolio/work-6.jpeg";
import w7 from "@/assets/portfolio/work-7.jpeg";
import w8 from "@/assets/portfolio/work-8.jpeg";
import w9 from "@/assets/portfolio/work-9.jpeg";
import w10 from "@/assets/portfolio/work-10.jpeg";
import w11 from "@/assets/portfolio/work-11.jpeg";
import w12 from "@/assets/portfolio/work-12.jpeg";
import w13 from "@/assets/portfolio/work-13.jpeg";
import w14 from "@/assets/portfolio/work-14.jpeg";
import w15 from "@/assets/portfolio/work-15.jpeg";
import w16 from "@/assets/portfolio/work-16.jpeg";
import w17 from "@/assets/portfolio/work-17.jpeg";
import w18 from "@/assets/portfolio/work-18.jpeg";
import w19 from "@/assets/portfolio/work-19.jpeg";
import w20 from "@/assets/portfolio/work-20.jpeg";
import w21 from "@/assets/portfolio/work-21.jpeg";
import w22 from "@/assets/portfolio/work-22.jpeg";
import w23 from "@/assets/portfolio/work-23.jpeg";
import w24 from "@/assets/portfolio/work-24.jpeg";
import w25 from "@/assets/portfolio/work-25.jpeg";

const PHONE_DISPLAY = "+1 (832) 868-2964";
const PHONE_TEL = "+18328682964";
const EMAIL = "info@electricalrenewableservices.org";
const ADDRESS = "Baytown TX, 77523, United States";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Electrical & Renewable Services LLC — Baytown TX | Solar, Battery, Generators & More" },
      {
        name: "description",
        content:
          "Licensed electricians in Baytown TX. Residential electrical, solar installation, battery storage, EV chargers, whole-home generators & solar roofing. Call (832) 868-2964.",
      },
      { property: "og:title", content: "Electrical & Renewable Services LLC — Power Your Home, Protect Your Investment" },
      {
        property: "og:description",
        content: "Residential electrical, solar, battery storage, EV chargers, generators & solar roofing. Baytown TX & Houston area. Call (832) 868-2964.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <TrustBar />
      <HomepageServiceCards />
      <EVSection />
      <EVPricingCTA />
      <GeneratorSection />
      <SolarRoofingSection />
      <Services />
      <Portfolio />
      <Certifications />
      <AboutUs />
      <Testimonials />
      <WhyUs />
      <FinancingBanner />
      <Contact />
      <Footer />
    </div>
  );
}

/* ─── NAV ─────────────────────────────────────────────────────────────────── */
function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="flex items-center gap-2.5 min-w-0">
          <img src={logo} alt="Logo" className="h-10 w-10 shrink-0" width={40} height={40} />
          <span className="truncate font-display text-sm font-bold sm:text-base">
            Electrical & <span className="text-accent-yellow">Renewable</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href="#top" className="hover:text-foreground transition-colors">Home</a>
          <a href="#electrical" className="hover:text-accent-yellow transition-colors">Electrical</a>
          <a href="#services" className="hover:text-foreground transition-colors">Solar</a>
          <a href="#services" className="hover:text-foreground transition-colors">Battery</a>
          <a href="#ev-chargers" className="hover:text-foreground transition-colors">EV Chargers</a>
          <a href="#solar-roofing" className="hover:text-accent-yellow transition-colors">Solar Roofing</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <a
          href={`tel:${PHONE_TEL}`}
          className="inline-flex items-center gap-2 rounded-full bg-accent-yellow px-4 py-2 text-sm font-semibold text-black transition hover:brightness-110"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">Call Now</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}

/* ─── HERO ────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroEv}
          alt=""
          className="h-full w-full object-cover opacity-25"
          width={1536}
          height={1024}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-20 sm:pt-28 sm:pb-32">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <span className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-accent-yellow/40 bg-accent-yellow/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-yellow">
            <Zap className="h-3.5 w-3.5" /> Electrical & Renewable Services
          </span>

          <img
            src={logo}
            alt="Electrical & Renewable Services Logo"
            className="h-20 w-20 sm:h-28 sm:w-28"
            width={112}
            height={112}
          />

          <h1 className="mt-5 font-display text-3xl font-black leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Power Your Home.<br />
            <span className="text-accent-yellow">Protect Your Investment.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm text-muted-foreground sm:text-lg">
            Residential electrical, solar, battery storage, EV chargers, and solar roofing solutions.
          </p>

          <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-yellow px-6 py-3.5 text-sm font-bold text-black shadow-lg shadow-accent-yellow/25 transition hover:brightness-110 sm:px-8 sm:py-4 sm:text-base"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" /> Call {PHONE_DISPLAY}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-accent-green/40 bg-accent-green/10 px-6 py-3.5 text-sm font-bold text-accent-green transition hover:bg-accent-green/20 sm:px-8 sm:py-4 sm:text-base"
            >
              Get a Free Estimate <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </div>

          {/* Quick stats */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-center sm:gap-10">
            {[
              { value: "12+", label: "Years Experience" },
              { value: "500+", label: "Jobs Completed" },
              { value: "5.0★", label: "Google Rating" },
              { value: "Same Day", label: "Quotes" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-xl font-black text-accent-yellow sm:text-2xl">{s.value}</p>
                <p className="text-xs text-muted-foreground sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── TRUST BAR ───────────────────────────────────────────────────────────── */
const certs = [
  { wordmark: "TESLA", bg: "bg-black", border: "border-red-500/30", text: "text-white", font: "font-display font-bold tracking-[0.35em]" },
  { wordmark: "SPAN", bg: "bg-white", border: "border-zinc-300", text: "text-black", font: "font-display font-black tracking-tight" },
  { wordmark: "enphase.", bg: "bg-white", border: "border-orange-400/50", text: "text-[#F3631C]", font: "font-display font-bold tracking-tight" },
  { wordmark: "EG4", bg: "bg-[#0A2540]", border: "border-sky-400/40", text: "text-white", font: "font-display font-black italic tracking-wider" },
];

function TrustBar() {
  return (
    <div className="border-y border-border/50 bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground shrink-0">Certified by</span>
          {certs.map((c) => (
            <div
              key={c.wordmark}
              className={`flex h-9 items-center justify-center rounded-lg border px-3 sm:h-10 sm:px-4 ${c.bg} ${c.border}`}
            >
              <span className={`text-sm sm:text-base ${c.font} ${c.text}`}>{c.wordmark}</span>
            </div>
          ))}
          <div className="hidden sm:flex items-center gap-1.5 ml-2 pl-4 border-l border-border">
            <ShieldCheck className="h-4 w-4 text-accent-green" />
            <span className="text-xs font-semibold text-muted-foreground">Licensed & Insured</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── HOMEPAGE SERVICE CARDS ─────────────────────────────────────────────── */
function HomepageServiceCards() {
  const cards = [
    {
      emoji: "⚡",
      title: "Electrical",
      desc: "Panel upgrades, generators & electrical services",
      href: "#electrical",
      accent: "yellow" as const,
    },
    {
      emoji: "☀️",
      title: "Solar",
      desc: "Solar panel systems designed for your home",
      href: "#services",
      accent: "green" as const,
    },
    {
      emoji: "🔋",
      title: "Battery Storage",
      desc: "Powerwall & battery backup solutions",
      href: "#services",
      accent: "green" as const,
    },
    {
      emoji: "🏠",
      title: "Solar Roofing",
      desc: "Roof repairs, replacement & preparation for solar",
      href: "#solar-roofing",
      accent: "yellow" as const,
    },
  ];

  return (
    <section className="border-t border-border bg-card/20">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {cards.map((c) => (
            <a
              key={c.title}
              href={c.href}
              className={`group flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 transition hover:border-${c.accent === "yellow" ? "accent-yellow" : "accent-green"}/40 hover:ring-1 hover:ring-${c.accent === "yellow" ? "accent-yellow" : "accent-green"}/20 sm:rounded-3xl sm:p-6`}
            >
              <span className="text-3xl sm:text-4xl">{c.emoji}</span>
              <div>
                <h3 className={`font-display text-base font-bold sm:text-lg ${c.accent === "yellow" ? "text-accent-yellow" : "text-accent-green"}`}>
                  {c.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{c.desc}</p>
              </div>
              <span className={`mt-auto inline-flex items-center gap-1 text-xs font-semibold ${c.accent === "yellow" ? "text-accent-yellow" : "text-accent-green"} group-hover:gap-2 transition-all`}>
                Learn More <ChevronRight className="h-3.5 w-3.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── EV SECTION ──────────────────────────────────────────────────────────── */
// Use first 3 portfolio images as EV feature photos
const evPhotos = [w1, w2, w3];

const evFeatures = [
  { icon: ShieldCheck, title: "Permitted & Inspected", desc: "Every install is fully permitted and passes local inspection. No shortcuts." },
  { icon: Zap, title: "Panel Assessment Included", desc: "We check your panel capacity before starting — no surprise upgrades." },
  { icon: PlugZap, title: "All Major Brands", desc: "Tesla Wall Connector, ChargePoint, JuiceBox, Grizzl-E, Emporia & more." },
  { icon: Wrench, title: "Same-Day Quotes", desc: "Fast response, transparent pricing, no hidden fees." },
];

function EVSection() {
  return (
    <section id="ev-chargers" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
      {/* Header */}
      <div className="flex flex-col items-center text-center">
        <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-accent-yellow/40 bg-accent-yellow/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-yellow">
          <PlugZap className="h-3.5 w-3.5" /> EV Charger Installation
        </span>
        <h2 className="font-display text-3xl font-black sm:text-4xl md:text-5xl">
          EV Charger Installation
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Tesla-certified and Baytown-based, we install home EV chargers the right way — permitted, inspected, and built to last. We've completed hundreds of installs across the greater Houston area.
        </p>
      </div>

      {/* Photo strip */}
      <div className="mt-10 grid grid-cols-3 gap-2 sm:gap-4">
        {evPhotos.map((src, i) => (
          <div key={i} className="relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[4/3]">
            <img
              src={src}
              alt={`EV charger install ${i + 1}`}
              loading="lazy"
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        ))}
      </div>

      {/* Features grid */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {evFeatures.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-2xl border border-border bg-card p-5 ring-1 ring-accent-yellow/10 transition hover:ring-accent-yellow/30"
          >
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent-yellow/15 text-accent-yellow">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-3 font-display text-base font-bold">{title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>

      {/* CTA strip */}
      <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl border border-accent-yellow/20 bg-accent-yellow/5 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-lg font-bold">Ready to charge smarter?</p>
          <p className="mt-1 text-sm text-muted-foreground">Most installs completed in a single day.</p>
        </div>
        <a
          href={`tel:${PHONE_TEL}`}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent-yellow px-6 py-3 text-sm font-bold text-black transition hover:brightness-110"
        >
          <Phone className="h-4 w-4" /> Call for a Free Quote
        </a>
      </div>
    </section>
  );
}

/* ─── EV PRICING CTA ─────────────────────────────────────────────────────── */
function EVPricingCTA() {
  return (
    <section className="relative overflow-hidden">
      {/* Background — EV charger photo with dark overlay */}
      <div className="absolute inset-0">
        <img
          src={w2}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative mx-auto max-w-lg px-6 py-20 text-center sm:py-28">
        <h2 className="font-display text-4xl font-black text-white sm:text-5xl md:text-6xl">
          Power up at home
        </h2>
        <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
          Our licensed electricians will install a fast charger for any
          electric vehicle at your home —{" "}
          <span className="font-bold text-white underline decoration-accent-yellow decoration-2 underline-offset-4">
            starting at $895
          </span>
          .
        </p>

        <div className="mt-8 flex flex-col items-stretch gap-3 sm:mx-auto sm:max-w-xs">
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-accent-yellow px-6 py-4 text-base font-bold text-black shadow-lg shadow-accent-yellow/30 transition hover:brightness-110"
          >
            <Phone className="h-5 w-5" /> Call Us Now
          </a>
        </div>

        <p className="mt-5 text-xs text-white/50">
          Permit filing included · Tesla, ChargePoint, JuiceBox & more · Baytown TX & Houston area
        </p>
        <p className="mt-2 text-xs text-white/40">
          *Price applies to installations within 10 ft of the electrical panel.
        </p>
      </div>
    </section>
  );
}

/* ─── GENERATOR SECTION ───────────────────────────────────────────────────── */
function GeneratorSection() {
  return (
    <section id="electrical" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Photo */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl aspect-[4/3]">
            <img
              src={generatorImg}
              alt="Generac whole-home standby generator installation"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                <Zap className="h-3.5 w-3.5 text-accent-yellow" /> Generac Whole-Home Generator
              </span>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-5">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-yellow/40 bg-accent-yellow/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-yellow">
                <Zap className="h-3.5 w-3.5" /> Electrical Services
              </span>
              <h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">
                Whole-Home Generator<br /><span className="text-accent-yellow">Installation</span>
              </h2>
            </div>
            <p className="text-base leading-relaxed text-foreground/90">
              Never lose power again. We install residential standby generators — including Generac whole-home systems — that automatically turn on the moment your power goes out.
            </p>
            <ul className="space-y-2.5">
              {[
                "Residential standby & whole-home generators",
                "Automatic transfer switch installation",
                "Natural gas & propane connections",
                "Fully permitted & code-compliant",
                "Panel assessments included",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-yellow" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent-yellow px-6 py-3 text-sm font-bold text-black transition hover:brightness-110"
            >
              Get a Free Generator Quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SOLAR ROOFING SECTION ───────────────────────────────────────────────── */
function SolarRoofingSection() {
  const services = [
    { icon: ShieldCheck, title: "Roof Inspections", desc: "Pre-solar assessments to ensure your roof is ready for installation." },
    { icon: Wrench, title: "Roof Repairs", desc: "Address leaks, damaged shingles, or structural issues before solar goes on." },
    { icon: HomeIcon, title: "Roof Replacement", desc: "Full replacement when needed — timed with your solar project to save cost." },
    { icon: Sun, title: "Solar Preparation", desc: "Roof deck reinforcement, flashing, and penetration sealing for a clean install." },
  ];

  return (
    <section id="solar-roofing" className="border-t border-border bg-card/20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="flex flex-col items-center text-center">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-accent-yellow/40 bg-accent-yellow/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-yellow">
            <HomeIcon className="h-3.5 w-3.5" /> Solar Roofing
          </span>
          <h2 className="font-display text-3xl font-black sm:text-4xl md:text-5xl">
            Roofing Solutions<br /><span className="text-accent-yellow">for Solar Projects</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Roofing solutions for homeowners preparing for or installing solar. Roof inspections, repairs, replacement, and solar-related roofing work.
          </p>
          <p className="mt-2 max-w-xl text-xs text-muted-foreground">
            We are not a general roofing company — our roofing services are specifically scoped to support solar installations and ensure your roof is solar-ready.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-5 ring-1 ring-accent-yellow/10 transition hover:ring-accent-yellow/30"
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent-yellow/15 text-accent-yellow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-display text-base font-bold">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl border border-accent-yellow/20 bg-accent-yellow/5 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-display text-lg font-bold">Planning to go solar?</p>
            <p className="mt-1 text-sm text-muted-foreground">We'll make sure your roof is ready before the panels go on.</p>
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent-yellow px-6 py-3 text-sm font-bold text-black transition hover:brightness-110"
          >
            <Phone className="h-4 w-4" /> Get a Roofing Assessment
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICES ────────────────────────────────────────────────────────────── */
const renewableServices = [
  { icon: Battery, name: "Battery Storage", desc: "Whole-home power resilience with Tesla Powerwall, EG4 & Span smart panels." },
  { icon: Sun, name: "Solar", desc: "Grid-tied & off-grid solar systems. Enphase certified." },
];
const generalServices = [
  { icon: Lightbulb, name: "Lighting", desc: "Indoor, outdoor & landscape lighting" },
  { icon: Plug, name: "Receptacles", desc: "New outlets, USB & GFCI" },
  { icon: Zap, name: "Generator Install", desc: "Whole-home standby generators" },
  { icon: Fan, name: "Ceiling Fans", desc: "Install & replacement" },
  { icon: Tv, name: "TV Mounting", desc: "Concealed wiring & mount" },
  { icon: PlugZap, name: "EV Chargers", desc: "Level 2 & Tesla Wall Connector" },
];

function Services() {
  return (
    <section id="services" className="border-t border-border bg-card/20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <SectionHeader eyebrow="Everything we do" title="All Services" />

        {/* Renewable — 2 large cards with photos */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-6">
          {[
            { img: batteryImg, svc: renewableServices[0], accent: "green" as const },
            { img: solarImg, svc: renewableServices[1], accent: "green" as const },
          ].map(({ img, svc, accent }) => {
            const ServiceIcon = svc.icon;
            return (
              <div
                key={svc.name}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card sm:rounded-3xl"
              >
                <div className="relative h-44 sm:h-56 overflow-hidden">
                  <img
                    src={img}
                    alt={svc.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent-green/15 text-accent-green">
                      <ServiceIcon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-accent-green">{svc.name}</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{svc.desc}</p>
                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-green hover:gap-2.5 transition-all"
                  >
                    Get a Quote <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* General electrical — compact list */}
        <div className="mt-6">
          <div className="rounded-2xl border border-border bg-card p-5 ring-1 ring-accent-yellow/10 sm:rounded-3xl sm:p-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent-yellow/15 text-accent-yellow">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-accent-yellow">General Electrical</h3>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
              {generalServices.map(({ icon: Icon, name, desc }) => (
                <div key={name} className="flex flex-col items-center gap-2 rounded-xl bg-muted/40 p-3 text-center transition hover:bg-muted/70">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-background text-accent-yellow">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="text-xs font-semibold">{name}</p>
                  <p className="text-[0.65rem] text-muted-foreground leading-tight">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── PORTFOLIO ───────────────────────────────────────────────────────────── */
interface PortfolioItem {
  src: string;
  label: string;
}

const portfolioItems: PortfolioItem[] = [
  { src: w1, label: "EV Charger Install" },
  { src: w2, label: "Level 2 Charger" },
  { src: w3, label: "Tesla Wall Connector" },
  { src: w4, label: "EV Charger Wiring" },
  { src: w5, label: "Charger Panel Work" },
  { src: w6, label: "Battery Backup System" },
  { src: w7, label: "Solar & Battery" },
  { src: w8, label: "Panel Upgrade" },
  { src: w9, label: "Charger Installation" },
  { src: w10, label: "EV Outlet Wiring" },
  { src: w11, label: "Battery System" },
  { src: w12, label: "Electrical Work" },
  { src: w13, label: "Panel Work" },
  { src: w14, label: "Charger Install" },
  { src: w15, label: "Battery Backup" },
  { src: w16, label: "Wiring & Circuits" },
  { src: w17, label: "Electrical Service" },
  { src: w18, label: "Home EV Charger" },
  { src: w19, label: "Level 2 Install" },
  { src: w20, label: "Solar System" },
  { src: w21, label: "Renewable Energy" },
  { src: w22, label: "Service Upgrade" },
  { src: w23, label: "Electrical Panel" },
  { src: w24, label: "EV Charger" },
  { src: w25, label: "Battery & Solar" },
];

const SCROLL_AMOUNT = 420;

function Portfolio() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [lightbox, setLightbox] = useState<PortfolioItem | null>(null);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT, behavior: "smooth" });
  };

  return (
    <section id="portfolio" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative">
          <SectionHeader eyebrow="Real client work" title="Our Work" />
          {/* Arrow controls — desktop only, pinned to the right */}
          <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 items-center gap-2 sm:flex">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground transition hover:border-accent-yellow hover:text-accent-yellow disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground transition hover:border-accent-yellow hover:text-accent-yellow disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="relative mt-8">
        {/* Left arrow — floats over strip on mobile too */}
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          aria-label="Scroll left"
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-black/60 text-white shadow-lg backdrop-blur-sm transition hover:bg-accent-yellow hover:text-black disabled:opacity-0 sm:hidden"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        {/* Right arrow — floats over strip on mobile too */}
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-label="Scroll right"
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-black/60 text-white shadow-lg backdrop-blur-sm transition hover:bg-accent-yellow hover:text-black disabled:opacity-0 sm:hidden"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div
          ref={scrollRef}
          onScroll={updateArrows}
          className="overflow-x-auto scrollbar-none"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="flex gap-3 px-4 sm:gap-4 sm:px-8" style={{ width: "max-content" }}>
            {portfolioItems.map((item, i) => (
              <button
                key={i}
                onClick={() => setLightbox(item)}
                className="group relative shrink-0 overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-yellow"
                style={{ width: "clamp(260px, 30vw, 380px)", height: "clamp(320px, 38vw, 460px)" }}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 flex items-end p-3 opacity-0 transition duration-300 group-hover:opacity-100">
                  <span className="rounded-lg bg-black/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    {item.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-background to-transparent" />
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.label}
            className="max-h-[90vh] max-w-full rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <span className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
              {lightbox.label}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}

/* ─── CERTIFICATIONS ─────────────────────────────────────────────────────── */
const certCards = [
  {
    wordmark: "TESLA",
    bg: "bg-black", border: "border-red-500/40", text: "text-white",
    tracking: "tracking-[0.35em]", font: "font-display font-bold",
    name: "Tesla Certified Installer",
    note: "Authorized to install Wall Connectors & commission Powerwalls.",
  },
  {
    wordmark: "SPAN",
    bg: "bg-white", border: "border-zinc-300", text: "text-black",
    tracking: "tracking-tight", font: "font-display font-black",
    name: "Span Smart Panel Pro",
    note: "Certified to install & configure Span smart home panels.",
  },
  {
    wordmark: "enphase.",
    bg: "bg-white", border: "border-orange-400/50", text: "text-[#F3631C]",
    tracking: "tracking-tight", font: "font-display font-bold",
    name: "Enphase Certified",
    note: "Certified installer for Enphase solar microinverters.",
  },
  {
    wordmark: "EG4",
    bg: "bg-[#0A2540]", border: "border-sky-400/40", text: "text-white",
    tracking: "tracking-wider", font: "font-display font-black italic",
    name: "EG4 Certified",
    note: "Authorized for EG4 battery & off-grid system installs.",
  },
];

function Certifications() {
  return (
    <section id="certifications" className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <SectionHeader eyebrow="Trust & expertise" title="Certified & Licensed" />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 sm:grid-cols-4">
          {certCards.map((c) => (
            <div
              key={c.name}
              className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-background p-4 text-center transition hover:border-accent-yellow/40"
            >
              <div
                className={`flex h-16 w-full items-center justify-center rounded-xl border sm:h-20 ${c.border} ${c.bg} px-3 shadow-inner`}
              >
                <span className={`text-xl sm:text-2xl ${c.font} ${c.text} ${c.tracking}`}>{c.wordmark}</span>
              </div>
              <p className="text-xs font-bold leading-tight sm:text-sm">{c.name}</p>
              <p className="text-[0.65rem] text-muted-foreground leading-relaxed sm:text-xs">{c.note}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-center text-xs text-muted-foreground">
          Tesla, Span, Enphase, and EG4 are trademarks of their respective owners.
        </p>
      </div>
    </section>
  );
}

/* ─── ABOUT ───────────────────────────────────────────────────────────────── */
function AboutUs() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-5 lg:gap-16 items-center">
        {/* Photo */}
        <div className="lg:col-span-2">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl aspect-[4/5]">
            <img
              src={aboutUsImg}
              alt="Christian — Owner, Electrical & Renewable Services"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-display text-lg font-bold text-white"></p>
              <p className="text-sm text-white/70">We Install Tesla Powerwall Systems</p>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="lg:col-span-3 space-y-5">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-yellow/40 bg-accent-yellow/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-yellow">
              Who we are
            </span>
            <h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">
              Built on 12+ Years of<br /><span className="text-accent-yellow">Honest Work</span>
            </h2>
          </div>

          <p className="text-base leading-relaxed text-foreground/90">
            <span className="font-display font-bold text-accent-yellow">Electrical & Renewable Services</span> is
            a Baytown-based electrical company built on over 12 years of electrical expertise, honest workmanship, and code-compliant installations.
            What started as a commitment to honest, code-compliant workmanship has grown into one of the Houston area's go-to shops
            for EV charger installs, battery backup systems, and solar.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Every install is permitted, inspected, and built to last. We take the time to walk you through your options,
            explain the work clearly, and make sure every system is commissioned correctly — no shortcuts, no surprises.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            As a family-owned, locally operated company, we believe trust is earned on every job site.
            Our 5-star Google reviews speak to the relationships we've built — and we're committed to keeping that standard.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
            {[
              { icon: Clock, value: "12+", label: "Years Experience", accent: "yellow" as const },
              { icon: Users, value: "500+", label: "Happy Customers", accent: "green" as const },
              { icon: Award, value: "4", label: "Manufacturer Certs", accent: "yellow" as const },
              { icon: Heart, value: "5.0 ★", label: "Google Rating", accent: "green" as const },
            ].map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center gap-1.5 rounded-xl border border-border bg-card p-3 text-center"
              >
                <div className={`grid h-8 w-8 place-items-center rounded-lg ${s.accent === "yellow" ? "bg-accent-yellow/15 text-accent-yellow" : "bg-accent-green/15 text-accent-green"}`}>
                  <s.icon className="h-4 w-4" />
                </div>
                <span className={`font-display text-lg font-black ${s.accent === "yellow" ? "text-accent-yellow" : "text-accent-green"}`}>{s.value}</span>
                <span className="text-[0.6rem] font-medium leading-tight text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ────────────────────────────────────────────────────────── */
const testimonials = [
  {
    name: "Homero Salinas",
    meta: "Local Guide · 36 reviews",
    when: "2 months ago",
    text: "My electrical box went out and a friend recommended Electrical & Renewable Services. Showed up on the same day and replaced my entire electrical box on the day it went out.",
    service: "Panel Replacement",
  },
  {
    name: "Jesus Tapiador",
    meta: "9 reviews",
    when: "a week ago",
    text: "Skilled electrician! Installed my new Tesla charger and had to move some breakers around. He understands Powerwall and Tesla Solar — certified under those programs, so he was able to plug my charger to the gateway for bidirectional charging. Thanks Cristian!",
    service: "Tesla EV Charger",
  },
  {
    name: "Tunde A.",
    meta: "Local Guide · 20 reviews",
    when: "a week ago",
    text: "Christian did an excellent job installing our outdoor porch lights. They came out really nice and I couldn't be happier. He's very professional and diligent — I highly recommend his services!",
    service: "Outdoor Lighting",
  },
  {
    name: "Cheryl Krebs",
    meta: "4 reviews",
    when: "a week ago",
    text: "Christian is smart and friendly. My house has special low-voltage wiring and he was the only electrician I talked with who knew the specifics of it. He is my go-to guy for electrical!",
    service: "Electrical Service",
  },
  {
    name: "Peter Baham",
    meta: "1 review",
    when: "3 weeks ago",
    text: "Great company, super knowledgeable and professional. Installed our charging station and it came out great!",
    service: "EV Charger Install",
  },
  {
    name: "Paige Hall",
    meta: "Local Guide · 22 reviews",
    when: "3 weeks ago",
    text: "Christian did an amazing job for a great deal — only hiring him to do our electrical work from now on. He came fast the next day and was very easy to work with. Excellent customer service, down to earth, and punctual. I found my go-to guy for all my electrical needs.",
    service: "General Electrical",
  },
];

function Testimonials() {
  return (
    <section id="reviews" className="border-t border-border bg-card/20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <SectionHeader eyebrow="What customers say" title="5-Star Google Reviews" />
        <div className="mt-5 flex items-center justify-center gap-1.5 text-accent-yellow sm:mt-6">
          {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current sm:h-5 sm:w-5" />)}
          <span className="ml-2 text-xs font-semibold text-foreground sm:text-sm">Rated 5.0 on Google</span>
        </div>
        <div className="mt-8 grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-5 sm:rounded-3xl sm:p-6"
            >
              <Quote className="absolute right-4 top-4 h-7 w-7 text-accent-yellow/15" />
              {/* Service tag */}
              <span className="mb-3 inline-flex w-fit items-center rounded-full bg-accent-yellow/10 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-accent-yellow">
                {t.service}
              </span>
              <div className="flex items-center gap-1 text-accent-yellow">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
              </div>
              <p className="mt-3 flex-1 text-xs leading-relaxed text-foreground/90 sm:text-sm">"{t.text}"</p>
              <div className="mt-4 flex items-center gap-3 border-t border-border pt-3 sm:mt-5 sm:pt-4">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent-green/20 font-display text-sm font-bold text-accent-green">
                  {t.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold sm:text-sm">{t.name}</p>
                  <p className="truncate text-[0.65rem] text-muted-foreground">{t.meta} · {t.when}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── WHY US ──────────────────────────────────────────────────────────────── */
const reasons = [
  { icon: ShieldCheck, title: "Licensed & Insured", desc: "Fully licensed master electricians with comprehensive insurance on every job." },
  { icon: MapPinned, title: "Local & Family-Owned", desc: "Proudly serving the Houston area with same-day quotes and fast turnaround." },
  { icon: Wrench, title: "Certified Installs", desc: "Manufacturer-certified installs backed by warranty and honest, transparent pricing." },
];

function WhyUs() {
  return (
    <section className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <SectionHeader eyebrow="Why choose us" title="Power you can trust" />
        <div className="mt-10 grid gap-4 sm:gap-5 md:grid-cols-3">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6 sm:rounded-3xl sm:p-8">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-yellow text-black">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold sm:text-xl">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FINANCING BANNER ───────────────────────────────────────────────────── */
function FinancingBanner() {
  return (
    <section className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-accent-yellow/30 bg-gradient-to-br from-accent-yellow/10 via-card to-card px-6 py-10 text-center sm:px-10 sm:py-14">
          {/* Decorative glow */}
          <div className="pointer-events-none absolute -top-20 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-accent-yellow/10 blur-3xl" />

          <span className="inline-flex items-center gap-2 rounded-full border border-accent-yellow/40 bg-accent-yellow/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-yellow">
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <line x1="2" y1="10" x2="22" y2="10" />
            </svg>
            Flexible Payment Options
          </span>

          <h2 className="mt-4 font-display text-2xl font-black sm:text-3xl md:text-4xl">
            Financing Available for{" "}
            <span className="text-accent-yellow">Qualified Customers</span>
          </h2>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {["EV Chargers", "Solar Systems", "Generators", "Battery Storage", "Panel Upgrades"].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/50 px-3 py-1.5 text-xs font-semibold text-foreground sm:text-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent-yellow" />
                {item}
              </span>
            ))}
          </div>

          <p className="mt-5 text-sm text-muted-foreground sm:text-base">
            Don't let upfront costs hold you back from a smarter home.
          </p>

          <a
            href={`tel:${PHONE_TEL}`}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent-yellow px-6 py-3 text-sm font-bold text-black shadow-lg shadow-accent-yellow/20 transition hover:brightness-110 sm:px-8 sm:py-3.5 sm:text-base"
          >
            <Phone className="h-4 w-4 sm:h-5 sm:w-5" /> Call us now
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT ─────────────────────────────────────────────────────────────── */
function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="border-t border-border py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader eyebrow="Get in touch" title="Request a Free Quote" />
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-4">
            <ContactRow icon={Phone} label="Call us" value={PHONE_DISPLAY} href={`tel:${PHONE_TEL}`} accent="yellow" />
            <ContactRow icon={Mail} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} accent="green" />
            <ContactRow icon={MapPin} label="Service area" value={ADDRESS} accent="yellow" />
            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent-yellow px-6 py-4 text-sm font-bold text-black transition hover:brightness-110 sm:w-auto sm:rounded-2xl sm:text-base"
            >
              <Phone className="h-5 w-5" /> Call us now
            </a>
            <p className="text-xs text-muted-foreground pt-1">Most installs quoted within 24 hours. Same-day calls welcome.</p>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-2xl border border-border bg-card p-5 sm:rounded-3xl sm:p-8"
          >
            {sent ? (
              <div className="flex flex-col items-center gap-3 py-10 text-center">
                <CheckCircle2 className="h-12 w-12 text-accent-green" />
                <h3 className="font-display text-2xl font-bold">Thanks!</h3>
                <p className="text-sm text-muted-foreground">Christian will be in touch within one business day.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <Field label="Name"><input required type="text" className={inputCls} placeholder="Jane Smith" /></Field>
                <Field label="Phone"><input required type="tel" className={inputCls} placeholder="(555) 123-4567" /></Field>
                <Field label="Service needed">
                  <select required className={inputCls} defaultValue="">
                    <option value="" disabled>Select a service…</option>
                    <option>Electrical Service / Panel Upgrade</option>
                    <option>EV Charger Install</option>
                    <option>Solar Installation</option>
                    <option>Battery Backup / Powerwall</option>
                    <option>Whole-Home Generator</option>
                    <option>Solar Roofing / Roof Inspection</option>
                    <option>Lighting</option>
                    <option>Receptacles / Outlets</option>
                    <option>Ceiling Fan</option>
                    <option>TV Mounting</option>
                    <option>Other</option>
                  </select>
                </Field>
                <Field label="Message (optional)">
                  <textarea rows={3} className={inputCls} placeholder="Tell us about your project…" />
                </Field>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-green px-6 py-3.5 text-sm font-bold text-black transition hover:brightness-110 sm:text-base"
                >
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

/* ─── FOOTER ──────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="" className="h-9 w-9" width={36} height={36} />
            <div>
              <p className="font-display text-sm font-bold">Electrical & Renewable Services LLC</p>
              <p className="text-xs text-muted-foreground">Baytown, TX · Houston Area</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 sm:items-end">
            <a href={`tel:${PHONE_TEL}`} className="text-sm font-semibold text-accent-yellow hover:brightness-110">{PHONE_DISPLAY}</a>
            <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── SHARED UTILS ────────────────────────────────────────────────────────── */
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
}: { icon: React.ElementType; label: string; value: string; href?: string; accent: "yellow" | "green" }) {
  const color = accent === "yellow" ? "text-accent-yellow" : "text-accent-green";
  const Wrap = href ? "a" : "div";
  return (
    <Wrap
      {...(href ? { href } : {})}
      className="flex items-center gap-3 overflow-hidden rounded-xl border border-border bg-card p-4 transition hover:border-border/80 sm:gap-4 sm:rounded-2xl"
    >
      <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-muted sm:h-12 sm:w-12 ${color}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0 overflow-hidden">
        <p className="text-[0.65rem] uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="break-all text-xs font-semibold sm:truncate sm:break-normal sm:text-sm">{value}</p>
      </div>
    </Wrap>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="rounded-full border border-accent-yellow/40 bg-accent-yellow/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-accent-yellow sm:text-xs">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-2xl font-black sm:mt-4 sm:text-3xl md:text-5xl">{title}</h2>
    </div>
  );
}
