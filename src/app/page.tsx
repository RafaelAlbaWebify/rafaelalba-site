"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";
import Image from "next/image";
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  
  Menu,
  X,
  Shield,
  Server,
  FileText,
  Wrench,
  Terminal,
  ChevronRight,
  ChevronDown,
  Send,
} from "lucide-react";

/* ═══════════════════ ANIMATION HELPERS ═══════════════════ */

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

function Reveal({
  children,
  className = "",
  delay = 0,
  y = 50,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.85, ease: EASE_OUT, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerContainer({
  children,
  className = "",
  stagger = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

/* ═══════════════════ HERO WORD ANIMATION ═══════════════════ */

function HeroAnimatedLine({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(" ");
  return (
    <span className="inline-flex flex-wrap">
      {words.map((word, i) => (
        <span key={i} className="hero-word mr-[0.3em]">
          <motion.span
            className="hero-word-inner"
            initial={{ y: "105%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.8,
              ease: EASE_OUT,
              delay: delay + i * 0.08,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ═══════════════════ DATA ═══════════════════ */

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Approach", href: "#how-i-work" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: Wrench,
    title: "Microsoft 365 & Entra ID Support",
    description:
      "Users can't access mailboxes, Teams, SharePoint or OneDrive. Login loops, conditional access blocks, sync failures affecting the whole floor. I investigate the evidence, narrow down the likely cause and hand over clear next steps.",
  },
  {
    icon: Server,
    title: "Endpoint & Application Support",
    description:
      "Intermittent app crashes, devices falling out of compliance, VPN dropping mid-shift, or a production system slowing down for users who can't describe what changed. I collect the evidence that turns vague symptoms into fixable cases.",
  },
  {
    icon: FileText,
    title: "Runbooks & Escalation Documentation",
    description:
      "Your Tier 1 keeps escalating the same issues because nobody wrote down the fix. I turn repeatable incidents into structured runbooks, evidence packs and handover notes that any team member can follow.",
  },
  {
    icon: Terminal,
    title: "Support Automation & Diagnostics",
    description:
      "The same manual checks run every week — DNS lookups, M365 license audits, endpoint compliance scans. I build PowerShell and Python tools that collect the evidence automatically, so your team spends time on decisions, not data gathering.",
  },
];

const PROJECTS = [
  {
    title: "TRACE",
    subtitle: "Troubleshooting Reports Across Cloud & Endpoints",
    description:
      "A local-first diagnostic toolkit for turning Microsoft 365, Entra ID, endpoint and infrastructure evidence into support-ready reports. Built with Python, PowerShell and a TypeScript web UI.",
    tags: ["Python", "PowerShell", "TypeScript", "FastAPI", "M365", "Entra ID"],
    url: "https://github.com/RafaelAlbaWebify/trace-ops",
  },
  {
    title: "DNS Audit Tool",
    subtitle: "Infrastructure Support Workflow",
    description:
      "A PowerShell-based DNS auditing tool with a WPF GUI for fast detection of inconsistent records, patterns that need review, and CSV reporting for operational validation.",
    tags: ["PowerShell", "WPF", "DNS", "Infrastructure"],
    url: "https://github.com/RafaelAlbaWebify/dns-audit-tool",
  },
  {
    title: "Endpoint Support Checklist",
    subtitle: "Windows Endpoint Evidence Workflow",
    description:
      "A lightweight PowerShell WinForms utility for repeatable endpoint checks, local intervention notes and exportable evidence before escalation or handover.",
    tags: ["PowerShell", "WinForms", "Windows", "Endpoint", "Evidence"],
    url: "https://github.com/RafaelAlbaWebify/endpoint-support-checklist-powershell",
  },
];

const EXPERIENCE = [
  {
    period: "2024 — Present",
    title: "B2B IT Operations & Digital Support",
    company: "Webify Digital Solutions",
    location: "Dublin, Ireland · Remote",
    bullets: [
      "B2B IT operations support — Microsoft 365, email, DNS and endpoint troubleshooting",
      "Structured diagnostics, PowerShell automation and repeatable support workflows",
      "Documentation, runbooks and clear escalation handovers",
    ],
  },
  {
    period: "2025 — 2026",
    title: "IT Operations Engineer — Manufacturing Client",
    company: "Quental",
    location: "Remote",
    bullets: [
      "Resolved incidents across M365, Entra ID, Windows, DNS and endpoints in production-critical automotive manufacturing",
      "Worked with VMware/vSphere/ESXi, monitoring, backup and ServiceNow",
      "Diagnosed issues across network, endpoints, OPC and PLC connectivity",
      "Created runbooks to improve troubleshooting consistency and escalation quality",
    ],
  },
  {
    period: "2022 — 2024",
    title: "IT Service Desk Engineer",
    company: "Auxilion",
    location: "Dublin, Ireland · Hybrid",
    bullets: [
      "L2 IT support for Teagasc (~3,000 users across research centres and colleges in Ireland)",
      "Resolved M365, authentication, email, Teams and SharePoint incidents",
      "Managed escalated cases requiring analysis, documentation and follow-up",
      "Contributed to knowledge base improvements and repeatable support procedures",
    ],
  },
  {
    period: "2020 — 2022",
    title: "IT Support — Endpoint & Access Operations",
    company: "Communisis",
    location: "Liverpool, UK · On-site",
    bullets: [
      "Supported corporate IT operations with endpoint security, access-control processes and patching",
      "Troubleshot endpoint protection and security-related incidents",
      "Contributed to patching, secure operations and support continuity",
    ],
  },
  {
    period: "2002 — 2020",
    title: "IT Support & Computer Repair Business Owner",
    company: "BEEP Informática",
    location: "On-site",
    bullets: [
      "Owned and operated a computer repair and IT support business for 18 years",
      "Diagnosed Windows, hardware, software, driver and connectivity issues",
      "Supported printers, backups, antivirus tools and small-business IT",
    ],
  },
];

const CERTIFICATIONS = [
  { name: "Microsoft Security Essentials Professional Certificate", issuer: "Microsoft & LinkedIn", year: "2025", latest: true },
  { name: "Proofpoint Certified AI Email Security Specialist", issuer: "Proofpoint", year: "2026", latest: true },
  { name: "AWS Cloud Solutions Architect", issuer: "Amazon Web Services", year: "2024" },
  { name: "Google Cybersecurity", issuer: "Google", year: "2023" },
  { name: "Google IT Support", issuer: "Google", year: "2021" },
  { name: "Applied DevOps Engineering", issuer: "IBM", year: "2024" },
  { name: "Azure Database Administrator — DP-300 HA/DR", issuer: "LinkedIn Learning", year: "2025" },
  { name: "Google Project Management", issuer: "Google", year: "2021" },
];

const PRINCIPLES = [
  { num: "01", title: "Start with evidence", description: "Define the symptom, collect the data and separate what we know from what we assume. Every good fix starts here." },
  { num: "02", title: "Document what matters", description: "Clear notes, runbooks and evidence-based next actions that any team member can follow — not everything, just what the next person needs." },
  { num: "03", title: "Turn repeated checks into workflows", description: "PowerShell and Python tools that collect evidence automatically, so your team spends time on decisions, not data gathering." },
  { num: "04", title: "Escalate with context", description: "When a case goes up, the next engineer gets the symptom timeline, what was ruled out and what still needs checking — not a vague ticket." },
];

/* ═══════════════════ PAGE ═══════════════════ */

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const contactEmail = "rafael@rafaelalba.com";
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [formFeedback, setFormFeedback] = useState("");
  const [preparedMailtoLink, setPreparedMailtoLink] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const validateContactForm = () => {
    const name = formState.name.trim();
    const email = formState.email.trim();
    const message = formState.message.trim();
    const errors: { name?: string; email?: string; message?: string } = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!name) {
      errors.name = "Please enter your name.";
    } else if (name.length < 2) {
      errors.name = "Please enter at least 2 characters.";
    } else if (name.length > 80) {
      errors.name = "Please keep your name under 80 characters.";
    }

    if (!email) {
      errors.email = "Please enter your email address.";
    } else if (!emailPattern.test(email)) {
      errors.email = "Please enter a valid email address.";
    } else if (email.length > 120) {
      errors.email = "Please keep your email under 120 characters.";
    }

    if (!message) {
      errors.message = "Please describe how I can help.";
    } else if (message.length < 20) {
      errors.message = "Please add a little more detail, at least 20 characters.";
    } else if (message.length > 3000) {
      errors.message = "Please keep the message under 3000 characters.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const buildMailtoLink = () => {
    const newline = String.fromCharCode(13, 10);
    const name = formState.name.trim();
    const email = formState.email.trim();
    const message = formState.message.trim();
    const subject = "Website contact request - rafaelalba.com";
    const body = [
      "Contact name:",
      name,
      "Contact email:",
      email,
      "",
      "Request:",
      message,
    ].join(newline);

    return (
      "mailto:" +
      contactEmail +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body)
    );
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateContactForm()) {
      setFormFeedback("Please correct the highlighted fields before opening the email draft.");
      return;
    }

    const mailtoLink = buildMailtoLink();
    setPreparedMailtoLink(mailtoLink);

    setFormFeedback(
      "Your email draft should open. If it does not include the details, use the prepared email link below."
    );

    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* ═══════════ HEADER ═══════════ */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE_OUT }}
          className={`transition-all duration-500 ${
            scrolled
              ? "bg-navy/95 backdrop-blur-md shadow-lg shadow-navy/20"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
            <button
              onClick={() => scrollTo("#hero")}
              className="text-white font-serif text-xl font-semibold tracking-wide hover:opacity-80 transition-opacity"
            >
              Rafael Alba
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="nav-link"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#contact")}
                className="ml-4 text-xs font-semibold tracking-widest uppercase px-5 py-2.5 border border-white/30 text-white hover:bg-white hover:text-navy transition-all duration-300 btn-press"
              >
                Talk to me
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-1"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mobile-overlay fixed inset-0 z-40 lg:hidden"
            >
              <div className="flex flex-col items-center justify-center h-full gap-8">
                {NAV_LINKS.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                    onClick={() => scrollTo(link.href)}
                    className="text-white text-2xl font-serif font-light tracking-wide"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1">
        {/* ═══════════ HERO ═══════════ */}
        <section
          id="hero"
          className="relative min-h-screen flex items-end sm:items-center overflow-hidden"
        >
          {/* Full-bleed hero background image with Ken Burns */}
          <div className="absolute inset-0">
            <Image
              src="/images/rafael-standing.webp"
              alt=""
              fill
              className="hero-kenburns object-cover object-center"
              priority
              quality={95}
              sizes="100vw"
            />
            {/* Dark gradient overlay — left-to-right + bottom for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/42 to-black/5" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
          </div>

          {/* Hero content — Cody-style minimal */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-20 sm:pb-0 w-full pt-28 sm:pt-0">
            <div className="max-w-3xl lg:max-w-4xl">
              {/* Name — large serif, word-by-word reveal */}
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] font-semibold text-white leading-[1.05] mb-6">
                <HeroAnimatedLine text="Rafael Alba" delay={0.5} />
              </h1>

              {/* Tagline — one line, delayed fade */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1.2, ease: EASE_OUT }}
                className="font-serif text-xl sm:text-2xl md:text-3xl text-white/80 mb-10 max-w-2xl"
              >
                building tools, diagnostics & automation
                <br className="hidden sm:block" />
                {" "}that make support smarter
              </motion.p>

              {/* CTA — delayed fade */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8, ease: EASE_OUT }}
              >
                <button
                  onClick={() => scrollTo("#contact")}
                  className="btn-primary btn-press"
                >
                  Get in touch
                </button>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          >
            <button
              onClick={() => scrollTo("#services")}
              className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
              aria-label="Scroll to services"
            >
              <span className="scroll-indicator-line" />
              <ChevronDown size={18} strokeWidth={1.5} />
            </button>
          </motion.div>
        </section>

        {/* ═══════════ SERVICES ═══════════ */}
        <section id="services" className="py-32 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Reveal>
              <p className="section-label mb-4">Services</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-heading text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4 max-w-3xl">
                When IT support gets stuck, I unblock it
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-mid-gray text-base md:text-lg max-w-2xl mb-20 leading-relaxed">
                Microsoft 365, Entra ID, endpoint and application issues
                that need structured diagnostics, clear documentation and
                repeatable support workflows.
              </p>
            </Reveal>

            <StaggerContainer
              className="grid md:grid-cols-2 gap-5 lg:gap-6"
              stagger={0.12}
            >
              {SERVICES.map((svc) => (
                <motion.div
                  key={svc.title}
                  variants={staggerItem}
                  className="service-card group"
                >
                  <svc.icon
                    size={28}
                    strokeWidth={1.5}
                    className="text-navy mb-5"
                  />
                  <h3 className="font-serif text-xl font-semibold mb-3 text-charcoal">
                    {svc.title}
                  </h3>
                  <p className="text-mid-gray text-sm leading-relaxed">
                    {svc.description}
                  </p>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ═══════════ PROJECTS ═══════════ */}
        <section id="projects" className="py-32 md:py-40 bg-warm-gray">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Reveal>
              <p className="section-label mb-4">Portfolio</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-heading text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4 max-w-3xl">
                Selected projects
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-mid-gray text-base md:text-lg max-w-2xl mb-20 leading-relaxed">
                Showing how I think about troubleshooting, evidence
                and structured diagnostics.
              </p>
            </Reveal>

            <div className="space-y-6">
              {PROJECTS.map((proj, i) => (
                <Reveal key={proj.title} delay={i * 0.15} y={35}>
                  <div className="project-card relative">
                    <div className="relative z-10">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-charcoal mb-1">
                            {proj.title}
                          </h3>
                          <p className="text-mid-gray text-sm">
                            {proj.subtitle}
                          </p>
                        </div>
                        <a
                          href={proj.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-navy border border-navy/20 px-4 py-2 hover:bg-navy hover:text-white transition-all duration-300 shrink-0 mt-1"
                        >
                          View on GitHub <ExternalLink size={12} />
                        </a>
                      </div>
                      <p className="text-charcoal/70 text-sm leading-relaxed mb-5 max-w-3xl">
                        {proj.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {proj.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-medium tracking-wider uppercase px-3 py-1.5 bg-warm-gray text-mid-gray"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ HOW I WORK ═══════════ */}
        <section id="how-i-work" className="py-32 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Reveal>
              <p className="section-label mb-4">How I work</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-heading text-3xl md:text-4xl lg:text-5xl text-charcoal mb-16 max-w-3xl">
                What I do differently
              </h2>
            </Reveal>

            <StaggerContainer className="max-w-4xl" stagger={0.1}>
              {PRINCIPLES.map((p) => (
                <motion.div
                  key={p.num}
                  variants={staggerItem}
                  className="grid md:grid-cols-12 gap-4 md:gap-8 py-10 border-b border-border-light last:border-b-0 group"
                >
                  <div className="md:col-span-1">
                    <span className="font-serif text-3xl font-semibold text-navy/20 group-hover:text-navy/40 transition-colors duration-300">
                      {p.num}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-serif text-xl font-semibold text-charcoal">
                      {p.title}
                    </h3>
                  </div>
                  <div className="md:col-span-7">
                    <p className="text-mid-gray text-sm leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ═══════════ EXPERIENCE ═══════════ */}
        <section id="experience" className="py-32 md:py-40 bg-warm-gray">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Reveal>
              <p className="section-label mb-4">Experience</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-heading text-3xl md:text-4xl lg:text-5xl text-charcoal mb-20 max-w-3xl">
                From the service desk to production support
              </h2>
            </Reveal>

            <div className="space-y-12">
              {EXPERIENCE.map((exp, i) => (
                <Reveal key={i} delay={i * 0.1} y={30}>
                  <div className="relative pl-6 md:pl-8 pb-2">
                    <div className="timeline-line" />
                    <div className="timeline-dot" />
                    <div className="ml-4">
                      <p className="text-xs font-semibold tracking-widest uppercase text-navy mb-2">
                        {exp.period}
                      </p>
                      <h3 className="font-serif text-xl md:text-2xl font-semibold text-charcoal mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-mid-gray mb-1">
                        {exp.company}
                        <span className="text-border-light mx-2">|</span>
                        {exp.location}
                      </p>
                      <ul className="mt-3 space-y-1.5">
                        {exp.bullets.map((b, j) => (
                          <li
                            key={j}
                            className="text-sm text-charcoal/70 leading-relaxed flex items-start gap-2"
                          >
                            <ChevronRight
                              size={14}
                              className="text-navy/40 mt-1 shrink-0"
                            />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ CERTIFICATIONS ═══════════ */}
        <section id="certifications" className="py-32 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Reveal>
              <p className="section-label mb-4">Certifications</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-heading text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4 max-w-3xl">
                Validated skills
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-mid-gray text-base md:text-lg max-w-2xl mb-20 leading-relaxed">
                A curated selection of certifications that reflect my focus on
                IT operations, security awareness and practical automation.
              </p>
            </Reveal>

            <StaggerContainer
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
              stagger={0.06}
            >
              {CERTIFICATIONS.map((cert) => (
                <motion.div
                  key={cert.name}
                  variants={staggerItem}
                  className={`cert-card ${"latest" in cert && cert.latest ? "cert-card-latest" : ""}`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <Shield
                        size={16}
                        strokeWidth={1.5}
                        className={`shrink-0 ${"latest" in cert && cert.latest ? "text-navy" : "text-navy/40"}`}
                      />
                      <p className={`text-sm leading-snug ${"latest" in cert && cert.latest ? "font-semibold text-charcoal" : "font-medium text-charcoal/80"}`}>
                        {cert.name}
                      </p>
                    </div>
                    {"latest" in cert && cert.latest && (
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-navy bg-navy/5 px-2 py-0.5 shrink-0">
                        New
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-mid-gray mt-3">
                    <span>{cert.issuer}</span>
                    <span className="text-border-light">·</span>
                    <span>{cert.year}</span>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ═══════════ CONTACT ═══════════ */}
        <section id="contact" className="relative bg-navy py-32 md:py-40">
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
          {/* Subtle top edge glow */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Left column */}
              <div>
                <Reveal>
                  <p className="section-label-light mb-4">Contact</p>
                </Reveal>
                <Reveal delay={0.05}>
                  <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-emerald-400/80 mb-6">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Available for remote roles &amp; B2B support contracts
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <h2 className="section-heading text-3xl md:text-4xl lg:text-5xl text-white mb-6">
                    Need help with Microsoft 365, Entra ID or IT operations?
                  </h2>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="text-white/50 text-base leading-relaxed mb-10">
                    Send the symptoms. I will help you structure the next
                    checks. Include what is failing, who is affected, when it
                    started, what changed recently and any screenshots or error
                    messages you have.
                  </p>
                </Reveal>
                <Reveal delay={0.3}>
                  <div className="flex flex-col gap-4 text-sm text-white/50">
                    <a
                      href="mailto:rafael@rafaelalba.com"
                      className="flex items-center gap-3 hover:text-white transition-colors"
                    >
                      <Mail size={18} strokeWidth={1.5} />
                      rafael@rafaelalba.com
                    </a>
                    <div className="flex gap-4 mt-2">
                      <a
                        href="https://github.com/RafaelAlbaWebify"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-white transition-colors"
                      >
                        <Github size={18} strokeWidth={1.5} />
                        GitHub
                      </a>
                      <a
                        href="https://www.linkedin.com/in/rafael-alba-tech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-white transition-colors"
                      >
                        <Linkedin size={18} strokeWidth={1.5} />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Right column — form */}
              <Reveal delay={0.2}>
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="glass-card p-8 md:p-10 space-y-8"
                >
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      minLength={2}
                      maxLength={80}
                      autoComplete="name"
                      value={formState.name}
                      onChange={(e) => {
                        setFormState({ ...formState, name: e.target.value });
                        if (formErrors.name) setFormErrors({ ...formErrors, name: undefined });
                      }}
                      aria-invalid={Boolean(formErrors.name)}
                      className="input-underline w-full"
                    />
                    {formErrors.name && (
                      <p className="mt-2 text-xs text-red-300">{formErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      required
                      maxLength={120}
                      autoComplete="email"
                      inputMode="email"
                      value={formState.email}
                      onChange={(e) => {
                        setFormState({ ...formState, email: e.target.value });
                        if (formErrors.email) setFormErrors({ ...formErrors, email: undefined });
                      }}
                      aria-invalid={Boolean(formErrors.email)}
                      className="input-underline w-full"
                    />
                    {formErrors.email && (
                      <p className="mt-2 text-xs text-red-300">{formErrors.email}</p>
                    )}
                  </div>

                  <div>
                    <textarea
                      name="message"
                      placeholder="Describe the issue or how I can help"
                      required
                      minLength={20}
                      maxLength={3000}
                      rows={5}
                      value={formState.message}
                      onChange={(e) => {
                        setFormState({ ...formState, message: e.target.value });
                        if (formErrors.message) setFormErrors({ ...formErrors, message: undefined });
                      }}
                      aria-invalid={Boolean(formErrors.message)}
                      className="input-underline w-full resize-none"
                    />
                    <div className="mt-2 flex items-center justify-between gap-3 text-xs text-white/35">
                      <span>{formErrors.message || "Minimum 20 characters."}</span>
                      <span>{formState.message.trim().length}/3000</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <button
                      type="submit"
                      className="btn-primary btn-press flex items-center gap-2"
                    >
                      <Send size={14} />
                      Email me
                    </button>

                    <AnimatePresence>
                      {formFeedback && (
                        <motion.div
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="space-y-2"
                        >
                          <p className="text-white/60 text-sm leading-relaxed">
                            {formFeedback}
                          </p>
                          {preparedMailtoLink && (
                            <a
                              href={preparedMailtoLink}
                              className="inline-flex text-sm font-semibold text-white hover:text-white/80 underline underline-offset-4 transition-colors"
                            >
                              Open the prepared email again
                            </a>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <p className="text-white/40 text-sm leading-relaxed">
                      If the email draft does not open, contact me directly at{" "}
                      <a
                        href={"mailto:" + contactEmail}
                        className="text-white/70 hover:text-white transition-colors"
                      >
                        {contactEmail}
                      </a>
                      .
                    </p>
                  </div>
                </form>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="bg-charcoal py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Rafael Alba &middot; Microsoft 365,
            Entra ID &amp; IT Operations Support
          </p>
        </div>
      </footer>
    </div>
  );
}
