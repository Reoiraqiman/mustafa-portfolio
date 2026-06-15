"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { CSSProperties, PointerEvent, ReactNode } from "react";

type BrandAccent = "careem" | "saj" | "doritos" | "hohos";

type Brand = {
  name: string;
  image: string;
  count: string;
  accent: BrandAccent;
  summary: string;
  mood: string;
  links: string[];
};

type Project = {
  title: string;
  discipline: string;
  image: string;
  outcome: string;
  summary: string;
  tools: string[];
};

type Certificate = {
  title: string;
  issuer: string;
  image: string;
  score: string;
  verify: string;
};

type MediaItem = {
  title: string;
  kicker: string;
  text: string;
};

const whatsappLink =
  "https://wa.me/9647838004321?text=Hello%20Mustafa%2C%20I%20visited%20your%20portfolio%20website%20and%20I%20would%20like%20to%20discuss%20a%20potential%20opportunity%20with%20you.";

const alRasheedInterview = {
  title: "Al Rasheed TV Interview",
  channel: "Al Rasheed TV",
  platform: "HEPIQ Smart University Platform",
  startTime: "2:10",
  startSeconds: 130,
  image: "/images/media/al-rasheed-tv.png",
  url: "https://youtu.be/JB4bCnHY-e0?t=130",
  summary:
    "Featured interview on Al Rasheed TV about HEPIQ, a smart university platform for Iraqi students covering schedules, official notifications, attendance, results, and student services.",
};

const nav = [
  { id: "identity", label: "Identity" },
  { id: "cyber", label: "Cyber" },
  { id: "projects", label: "Projects" },
  { id: "modeling", label: "Modeling" },
  { id: "credentials", label: "Credentials" },
  { id: "media", label: "Media" },
  { id: "contact", label: "Contact" },
];

const terminalLines = [
  "session.identity: public-profile",
  "signal.cyber: verified-learning-track",
  "signal.modeling: commercial-campaigns",
  "assets.projects: indexed",
  "credentials.vault: online",
  "contact.gateway: ready",
];

const projects: Project[] = [
  {
    title: "Otto Educational Robot",
    discipline: "Embedded Systems / Security Thinking",
    image: "/images/projects/otto-robot.png",
    outcome: "University exhibition project",
    summary:
      "Arduino Nano robot built to demonstrate sensors, motion control, obstacle detection, and hardware logic through a practical engineering workflow.",
    tools: ["Arduino Nano", "C++", "Ultrasonic Sensor", "Buzzer", "3D Printed Body"],
  },
  {
    title: "Logic Kit in Cryptographic Operations",
    discipline: "Digital Design / Cryptography Concept",
    image: "/images/projects/logic-kit-project.jpg",
    outcome: "Full mark: 100%",
    summary:
      "A hardware logic demonstration showing how classical encryption concepts can be represented with gates, switches, LEDs, and digital design principles.",
    tools: ["Logic Gates", "Breadboard", "Cryptography", "Digital Design", "Hardware Simulation"],
  },
];

const certificates: Certificate[] = [
  {
    title: "CompTIA Security+ (SY0-501)",
    issuer: "Alison",
    image: "/images/certificates/alison-security.png",
    score: "94%",
    verify: "https://alison.com/certification/check/725e4782e1",
  },
  {
    title: "Cyber Threat Management",
    issuer: "Cisco",
    image: "/images/certificates/cisco-cyber-threat.png",
    score: "Verified",
    verify: "https://www.credly.com/users/mustafa-mohmmed-hmaza/badges",
  },
  {
    title: "Ethical Hacker",
    issuer: "Cisco",
    image: "/images/certificates/cisco-ethical-hacker.png",
    score: "Verified",
    verify: "https://www.credly.com/users/mustafa-mohmmed-hmaza/badges",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    image: "/images/certificates/cisco-cybersecurity.png",
    score: "Verified",
    verify: "https://www.credly.com/users/mustafa-mohmmed-hmaza",
  },
  {
    title: "Python Essentials 1",
    issuer: "Cisco",
    image: "/images/certificates/cisco-python.png",
    score: "Verified",
    verify: "https://www.credly.com/users/mustafa-mohmmed-hmaza/badges",
  },
  {
    title: "Introduction to IoT",
    issuer: "Cisco",
    image: "/images/certificates/cisco-iot.png",
    score: "Verified",
    verify: "https://www.credly.com/users/mustafa-mohmmed-hmaza",
  },
];

const brands: Brand[] = [
  {
    name: "Careem",
    image: "/images/brands/careem-model.png",
    count: "9 works",
    accent: "careem",
    mood: "Mobility / lifestyle / confident screen presence",
    summary:
      "Commercial video campaign appearances with clean delivery, camera confidence, and direct brand-fit energy.",
    links: [
  "https://www.instagram.com/reel/DXUEjd6ip2B/",
  "https://www.instagram.com/reel/DSktrSfD_hH/",
  "https://www.instagram.com/reel/DUOWqCuAFyI/",
  "https://www.instagram.com/reel/DUA-kSfj9xi/",
  "https://www.instagram.com/reel/DM-0NTghAcR/",
  "https://www.instagram.com/reel/DNLWpRIMpZd/",
  "https://www.instagram.com/reel/DPqxeWHjCYd/",
  "https://www.instagram.com/reel/DS0JOAQDZYk/",
  "https://www.instagram.com/p/DXmCJd5jM3k/",
],
  },
  {
    name: "Saj Al Reef",
    image: "/images/brands/saj-al-reef-model.png",
    count: "3 works",
    accent: "saj",
    mood: "Food campaign / warm studio energy",
    summary:
      "Product-focused commercial work with approachable expression, controlled movement, and strong visual clarity.",
    links: [
  "https://www.instagram.com/reel/DV8pkrRFWJw/",
  "https://www.instagram.com/reel/DV6ESfAAJbA/",
  "https://www.instagram.com/reel/DVx8c9OjO4J/",
],
  },
  {
    name: "Doritos",
    image: "/images/brands/doritos-model.png",
    count: "1 work",
    accent: "doritos",
    mood: "Youth campaign / high contrast commercial look",
    summary:
      "A sharp, high-energy commercial appearance built around expressive delivery and strong on-camera presence.",
    links: ["https://www.instagram.com/reel/DT1Jq9gkuhT/"],
  },
  {
    name: "HoHos",
    image: "/images/brands/hohos-model.png",
    count: "Coming soon",
    accent: "hohos",
    mood: "Reserved brand slot / future campaign",
    summary:
      "Prepared campaign space for future media work, making the modeling archive easy to expand without redesign.",
    links: [],
  },
];

const cyberSignals = [
  {
    label: "Academic track",
    title: "Cybersecurity student building practical foundations.",
    text: "Focused on secure systems thinking, digital risk, threat awareness, hardware logic, and continuous certification.",
  },
  {
    label: "Public communication",
    title: "Able to explain security topics clearly.",
    text: "Seminar and awareness work covering phishing, malware, social engineering, ethical responsibility, and safe digital behavior.",
  },
  {
    label: "Project discipline",
    title: "Hands-on labs, not empty claims.",
    text: "Projects are presented by outcome, stack, and learning value so recruiters can understand the work quickly.",
  },
];

const achievements = [
  "Official appreciation letter from Al-Mashriq University President",
  "Otto Robot project presentation in a cybersecurity exhibition",
  "Logic Kit project achieved full mark: 100%",
  "Featured in Al Rasheed TV for HEPIQ platform coverage",
  "Cybersecurity seminars and awareness activities",
];

const mediaItems: MediaItem[] = [
  {
    kicker: "Broadcast / 2:10",
    title: "Al Rasheed TV Interview",
    text: "Featured interview segment about HEPIQ on Al Rasheed TV. The watch button opens directly at 2:10.",
  },
  {
    kicker: "Awareness",
    title: "Cybersecurity Awareness",
    text: "Session topics included phishing, malware, social engineering, and responsible online behavior.",
  },
  {
    kicker: "Technical",
    title: "Hardware vs Software Seminar",
    text: "A technical session connecting hardware, software, vulnerabilities, and secure design principles.",
  },
  {
    kicker: "Professional ethics",
    title: "Ethics in Cybersecurity",
    text: "Participation in a lecture segment about responsibility and professional conduct in cybersecurity.",
  },
];

function classNames(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function useRevealRuntime() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("identity");
  const [terminalIndex, setTerminalIndex] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min(100, (window.scrollY / total) * 100) : 0);
    };

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.38 },
    );

    document.querySelectorAll(".reveal").forEach((node) => revealObserver.observe(node));
    nav.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) activeObserver.observe(section);
    });

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    const ticker = window.setInterval(() => {
      setTerminalIndex((value) => (value + 1) % terminalLines.length);
    }, 1600);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      revealObserver.disconnect();
      activeObserver.disconnect();
      window.clearInterval(ticker);
    };
  }, []);

  return { progress, active, terminalIndex };
}

function DepthSurface({
  children,
  className,
  intensity = 10,
  style,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
  style?: CSSProperties;
}) {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, gx: 50, gy: 50 });

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    setTilt({
      rx: (0.5 - py) * intensity,
      ry: (px - 0.5) * intensity,
      gx: px * 100,
      gy: py * 100,
    });
  };

  const mergedStyle = {
    ...style,
    "--rx": `${tilt.rx}deg`,
    "--ry": `${tilt.ry}deg`,
    "--gx": `${tilt.gx}%`,
    "--gy": `${tilt.gy}%`,
  } as CSSProperties;

  return (
    <div
      className={classNames("depth-surface", className)}
      style={mergedStyle}
      onPointerMove={onPointerMove}
      onPointerLeave={() => setTilt({ rx: 0, ry: 0, gx: 50, gy: 50 })}
    >
      <div className="depth-glow" />
      <div className="depth-content">{children}</div>
    </div>
  );
}

function MagneticAnchor({
  href,
  children,
  variant = "primary",
  external = false,
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
}) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onPointerMove = (event: PointerEvent<HTMLAnchorElement>) => {
    if (window.innerWidth < 768) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.14;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.2;
    setOffset({ x, y });
  };

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={classNames("magnetic-link", `magnetic-${variant}`, className)}
      style={{ "--mx": `${offset.x}px`, "--my": `${offset.y}px` } as CSSProperties}
      onPointerMove={onPointerMove}
      onPointerLeave={() => setOffset({ x: 0, y: 0 })}
    >
      <span>{children}</span>
    </a>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
  align = "split",
}: {
  eyebrow: string;
  title: string;
  text: string;
  align?: "split" | "center";
}) {
  return (
    <div
      className={classNames(
        "reveal mb-10",
        align === "split"
          ? "grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,460px)] lg:items-end"
          : "mx-auto max-w-4xl text-center",
      )}
    >
      <div>
        <p className="section-eyebrow">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
      </div>
      <p className={classNames("section-copy", align === "center" && "mx-auto mt-5")}>{text}</p>
    </div>
  );
}

function MetaLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/10 py-3">
      <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">{label}</span>
      <span className="text-right text-sm font-bold text-slate-100">{value}</span>
    </div>
  );
}

function CyberBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 44 }, (_, index) => ({
        left: `${(index * 19) % 100}%`,
        top: `${(index * 29) % 100}%`,
        delay: `${(index % 13) * 0.32}s`,
        duration: `${9 + (index % 8)}s`,
        scale: 0.5 + (index % 5) * 0.18,
      })),
    [],
  );

  const lines = useMemo(
    () =>
      Array.from({ length: 9 }, (_, index) => ({
        top: `${12 + index * 9}%`,
        delay: `${index * 0.4}s`,
      })),
    [],
  );

  return (
    <div className="global-scene" aria-hidden="true">
      <div className="global-aurora" />
      <div className="global-grid" />
      <div className="screen-lines" />
      {lines.map((line, index) => (
        <span key={index} className="scan-ray" style={{ top: line.top, animationDelay: line.delay }} />
      ))}
      {particles.map((particle, index) => (
        <span
          key={index}
          className="data-particle"
          style={
            {
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
              "--particle-scale": particle.scale,
            } as CSSProperties
          }
        />
      ))}
      <div className="grain" />
    </div>
  );
}

function HeroNetwork({ cursor }: { cursor: { x: number; y: number } }) {
  const nodes = useMemo(
    () =>
      Array.from({ length: 20 }, (_, index) => ({
        left: `${8 + ((index * 31) % 84)}%`,
        top: `${10 + ((index * 23) % 76)}%`,
        delay: `${index * 0.18}s`,
      })),
    [],
  );

  return (
    <div className="hero-network" aria-hidden="true">
      <svg viewBox="0 0 900 700" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <path className="network-path network-a" d="M36 522 C188 304 274 382 392 210 S674 128 846 274" />
        <path className="network-path network-b" d="M82 186 C214 330 326 142 474 264 S662 568 858 440" />
        <path className="network-path network-c" d="M90 642 C230 528 382 610 514 420 S702 178 842 86" />
      </svg>
      {nodes.map((node, index) => (
        <span key={index} className="network-node" style={{ left: node.left, top: node.top, animationDelay: node.delay }} />
      ))}
      <div
        className="cursor-orb"
        style={{ transform: `translate3d(${cursor.x * 44}px, ${cursor.y * 44}px, 0)` }}
      />
    </div>
  );
}

function HeroCore({ cursor }: { cursor: { x: number; y: number } }) {
  return (
    <DepthSurface className="hero-core reveal" intensity={7}>
      <div className="hero-core-inner">
        <div className="hero-ring hero-ring-one" />
        <div className="hero-ring hero-ring-two" />
        <div className="hero-object" style={{ transform: `rotateX(${cursor.y * -8}deg) rotateY(${cursor.x * 10}deg)` }}>
          <div className="object-plane object-plane-back" />
          <div className="object-plane object-plane-mid" />
          <div className="object-plane object-plane-front">
            <Image
              src="/images/mustafa-hero.jpg"
              alt="Mustafa Alzaidi"
              fill
              priority
              sizes="(max-width: 768px) 92vw, 44vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#02040d] via-transparent to-transparent" />
          </div>
        </div>
        <div className="floating-chip chip-one">N33.3152 / E44.3661</div>
        <div className="floating-chip chip-two">verified public profile</div>
        <div className="floating-chip chip-three">dual identity system</div>
      </div>
    </DepthSurface>
  );
}

function BrandVault({ brand, onClose }: { brand: Brand; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[90] grid place-items-end bg-black/75 p-3 backdrop-blur-xl md:place-items-center md:p-6" onClick={onClose}>
      <div className="vault-panel max-h-[90svh] w-full max-w-4xl overflow-auto" onClick={(event) => event.stopPropagation()}>
        <div className="grid gap-5 md:grid-cols-[0.82fr_1fr]">
          <div className="relative min-h-80 overflow-hidden rounded-[28px] border border-white/10 bg-black">
            <Image src={brand.image} alt={brand.name} fill sizes="(max-width: 768px) 100vw, 32vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
            <div className={`brand-aura brand-aura-${brand.accent}`} />
          </div>
          <div className="p-1 md:p-2">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="section-eyebrow">campaign vault</p>
                <h3 className="mt-3 text-4xl font-black tracking-[-0.06em] text-white md:text-6xl">{brand.name}</h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">{brand.summary}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-sm font-black text-white transition hover:bg-white/10"
                aria-label="Close campaign vault"
              >
                X
              </button>
            </div>
            <div className="mt-6 grid gap-3">
              {brand.links.length ? (
                brand.links.map((link, index) => (
                  <a key={link} href={link} target="_blank" rel="noreferrer" className="reel-link">
                    <span>Open Instagram Reel</span>
                    <strong>{String(index + 1).padStart(2, "0")}</strong>
                  </a>
                ))
              ) : (
                <div className="rounded-[24px] border border-white/10 bg-white/[0.04] px-5 py-10 text-center text-sm leading-7 text-slate-400">
                  Coming soon. This brand space is ready for future campaigns.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { progress, active, terminalIndex } = useRevealRuntime();
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);

  const onHeroMove = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setCursor({
      x: (event.clientX - rect.left) / rect.width - 0.5,
      y: (event.clientY - rect.top) / rect.height - 0.5,
    });
  };

  return (
    <main
      className="premium-portfolio min-h-screen overflow-x-hidden bg-[#02040d] text-slate-100"
      style={{ "--cursor-x": cursor.x, "--cursor-y": cursor.y } as CSSProperties}
    >
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700;800;900&family=Manrope:wght@400;500;600;700;800&display=swap");

        :root {
          color-scheme: dark;
          --ink: #eef7ff;
          --muted: #92a3b8;
          --cyan: #55e7ff;
          --blue: #3b82f6;
          --violet: #8b5cf6;
          --purple: #34235f;
          --emerald: #35d399;
          --rose: #fb7185;
          --gold: #f5c76b;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #02040d;
          font-family: "Manrope", "Instrument Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          text-rendering: geometricPrecision;
        }

        .premium-portfolio h1,
        .premium-portfolio h2,
        .premium-portfolio h3,
        .premium-portfolio .display-font {
          font-family: "Instrument Sans", "Manrope", ui-sans-serif, system-ui, sans-serif;
          letter-spacing: -0.055em;
        }

        .global-scene {
          position: fixed;
          inset: 0;
          z-index: -10;
          overflow: hidden;
          background:
            radial-gradient(circle at 50% -10%, rgba(85, 231, 255, 0.22), transparent 28%),
            radial-gradient(circle at 85% 12%, rgba(139, 92, 246, 0.18), transparent 32%),
            radial-gradient(circle at 12% 82%, rgba(53, 211, 153, 0.11), transparent 36%),
            linear-gradient(180deg, #02040d 0%, #05081a 46%, #02040d 100%);
        }

        .global-aurora {
          position: absolute;
          inset: -20%;
          background:
            conic-gradient(from 120deg at 42% 38%, transparent, rgba(85, 231, 255, 0.18), transparent 22%, rgba(139, 92, 246, 0.14), transparent 48%),
            radial-gradient(circle at calc(50% + var(--cursor-x, 0) * 16%) calc(34% + var(--cursor-y, 0) * 14%), rgba(255, 255, 255, 0.12), transparent 24%);
          filter: blur(34px);
          animation: auroraDrift 18s ease-in-out infinite alternate;
        }

        .global-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(85, 231, 255, 0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(85, 231, 255, 0.052) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: radial-gradient(circle at 50% 35%, black, transparent 78%);
        }

        .screen-lines {
          position: absolute;
          inset: 0;
          opacity: 0.18;
          background-image: linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 100% 6px;
          mix-blend-mode: overlay;
        }

        .scan-ray {
          position: absolute;
          left: -20%;
          width: 38%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(85, 231, 255, 0.58), transparent);
          animation: scanRay 8s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
        }

        .data-particle {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 999px;
          background: rgba(103, 232, 249, 0.75);
          box-shadow: 0 0 18px rgba(103, 232, 249, 0.85);
          transform: scale(var(--particle-scale));
          animation: particleDrift linear infinite;
        }

        .grain {
          position: absolute;
          inset: 0;
          opacity: 0.16;
          background-image:
            radial-gradient(circle at 20% 30%, rgba(255,255,255,.18) 0 1px, transparent 1px),
            radial-gradient(circle at 80% 70%, rgba(255,255,255,.12) 0 1px, transparent 1px);
          background-size: 28px 28px, 34px 34px;
          mix-blend-mode: overlay;
        }

        .section-eyebrow {
          color: rgb(103 232 249);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.26em;
          text-transform: uppercase;
        }

        .section-title {
          margin-top: 14px;
          max-width: 980px;
          color: white;
          font-size: clamp(2.55rem, 7vw, 6.7rem);
          line-height: 0.9;
          font-weight: 900;
        }

        .section-copy {
          max-width: 620px;
          color: rgb(165 178 197);
          font-size: clamp(1rem, 1.7vw, 1.12rem);
          line-height: 1.85;
        }

        .reveal {
          opacity: 0;
          transform: translate3d(0, 34px, 0) scale(0.985);
          filter: blur(12px);
          transition: opacity 0.9s cubic-bezier(.19, 1, .22, 1), transform 0.9s cubic-bezier(.19, 1, .22, 1), filter 0.9s ease;
          transition-delay: var(--delay, 0ms);
        }

        .reveal.is-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
          filter: blur(0);
        }

        .depth-surface {
          position: relative;
          overflow: hidden;
          transform-style: preserve-3d;
          transform: perspective(1100px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)) translateZ(0);
          transition: transform 0.45s cubic-bezier(.2, .8, .2, 1), border-color 0.35s ease, box-shadow 0.35s ease;
          will-change: transform;
        }

        .depth-surface::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(135deg, rgba(255,255,255,.26), rgba(85,231,255,.14), rgba(139,92,246,.16), rgba(255,255,255,.06));
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }

        .depth-glow {
          position: absolute;
          inset: 0;
          opacity: 0;
          pointer-events: none;
          background: radial-gradient(circle at var(--gx, 50%) var(--gy, 50%), rgba(255,255,255,.18), rgba(85,231,255,.08) 24%, transparent 48%);
          transition: opacity 0.35s ease;
        }

        .depth-surface:hover .depth-glow {
          opacity: 1;
        }

        .depth-content {
          position: relative;
          z-index: 2;
          transform: translateZ(28px);
        }

        .magnetic-link {
          position: relative;
          display: inline-flex;
          min-height: 48px;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-radius: 999px;
          padding: 0 22px;
          font-size: 14px;
          font-weight: 850;
          transform: translate3d(var(--mx, 0), var(--my, 0), 0);
          transition: transform 0.32s cubic-bezier(.2, .8, .2, 1), border-color .25s ease, background .25s ease;
          white-space: nowrap;
        }

        .magnetic-link::after {
          content: "";
          position: absolute;
          inset: -60%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,.28), transparent);
          transform: translateX(-80%) rotate(10deg);
          transition: transform .65s cubic-bezier(.2,.8,.2,1);
        }

        .magnetic-link:hover::after {
          transform: translateX(75%) rotate(10deg);
        }

        .magnetic-link span {
          position: relative;
          z-index: 2;
        }

        .magnetic-primary {
          background: linear-gradient(135deg, white, #b9f4ff 58%, #d7c8ff);
          color: #03101e;
          box-shadow: 0 18px 48px rgba(85,231,255,.22);
        }

        .magnetic-secondary {
          border: 1px solid rgba(103,232,249,.28);
          background: rgba(103,232,249,.08);
          color: #dffbff;
        }

        .magnetic-ghost {
          border: 1px solid rgba(255,255,255,.13);
          background: rgba(255,255,255,.045);
          color: white;
        }

        .progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 100;
          height: 2px;
          background: linear-gradient(90deg, #55e7ff, #8b5cf6, #35d399);
          box-shadow: 0 0 20px rgba(85,231,255,.7);
        }

        .top-nav {
          border: 1px solid rgba(255,255,255,.1);
          background: rgba(4, 8, 22, 0.62);
          box-shadow: 0 18px 60px rgba(0,0,0,.28);
          backdrop-filter: blur(24px);
        }

        .hero-stage {
          position: relative;
          min-height: calc(100svh - 74px);
          overflow: hidden;
        }

        .hero-stage::before {
          content: "";
          position: absolute;
          inset: 4% -8% auto auto;
          width: min(760px, 86vw);
          height: min(760px, 86vw);
          border-radius: 999px;
          background:
            radial-gradient(circle at 50% 50%, rgba(85,231,255,.22), transparent 42%),
            conic-gradient(from calc(90deg + var(--cursor-x, 0) * 40deg), rgba(85,231,255,.2), transparent, rgba(139,92,246,.22), transparent);
          filter: blur(18px);
          transform: translate3d(calc(var(--cursor-x, 0) * 28px), calc(var(--cursor-y, 0) * 28px), 0);
          animation: heroPulse 8s ease-in-out infinite;
        }

        .hero-network {
          position: absolute;
          inset: 0;
          opacity: 0.86;
          mask-image: radial-gradient(circle at 64% 42%, black 0 48%, transparent 72%);
        }

        .network-path {
          fill: none;
          stroke-width: 1.2;
          stroke-dasharray: 8 16;
          animation: dashTravel 20s linear infinite;
        }

        .network-a { stroke: rgba(85,231,255,.42); }
        .network-b { stroke: rgba(139,92,246,.32); animation-direction: reverse; animation-duration: 27s; }
        .network-c { stroke: rgba(53,211,153,.23); animation-duration: 31s; }

        .network-node {
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 999px;
          background: white;
          box-shadow: 0 0 20px rgba(85,231,255,.92);
          animation: nodeBlink 2.8s ease-in-out infinite;
        }

        .cursor-orb {
          position: absolute;
          right: 18%;
          top: 18%;
          width: 190px;
          height: 190px;
          border-radius: 999px;
          border: 1px solid rgba(85,231,255,.18);
          background:
            radial-gradient(circle at 42% 34%, rgba(255,255,255,.34), transparent 18%),
            radial-gradient(circle, rgba(85,231,255,.2), rgba(139,92,246,.1) 44%, transparent 68%);
          filter: blur(0.2px);
          transition: transform .55s cubic-bezier(.2,.8,.2,1);
        }

        .hero-core {
          min-height: min(720px, 88svh);
          border-radius: 38px;
          border: 1px solid rgba(255,255,255,.12);
          background:
            radial-gradient(circle at 50% 4%, rgba(255,255,255,.16), transparent 18%),
            linear-gradient(180deg, rgba(255,255,255,.065), rgba(255,255,255,.018));
          box-shadow: 0 40px 120px rgba(0,0,0,.42);
        }

        .hero-core-inner {
          position: relative;
          min-height: min(720px, 88svh);
          isolation: isolate;
        }

        .hero-ring {
          position: absolute;
          left: 50%;
          top: 50%;
          border-radius: 999px;
          border: 1px solid rgba(103,232,249,.18);
          transform: translate(-50%, -50%);
        }

        .hero-ring-one {
          width: 74%;
          aspect-ratio: 1;
          background: conic-gradient(from 120deg, rgba(103,232,249,.16), transparent 22%, rgba(139,92,246,.14), transparent 55%);
          animation: ringSpin 20s linear infinite;
        }

        .hero-ring-two {
          width: 54%;
          aspect-ratio: 1;
          border-color: rgba(139,92,246,.24);
          animation: ringSpin 28s linear infinite reverse;
        }

        .hero-object {
          position: absolute;
          inset: 10% 12% 9%;
          transform-style: preserve-3d;
          transition: transform .45s cubic-bezier(.2,.8,.2,1);
        }

        .object-plane {
          position: absolute;
          inset: 0;
          border-radius: 34px;
          border: 1px solid rgba(255,255,255,.12);
          box-shadow: 0 30px 80px rgba(0,0,0,.46);
        }

        .object-plane-back {
          transform: translate3d(-36px, 28px, -120px) rotateZ(-5deg);
          background: linear-gradient(135deg, rgba(85,231,255,.18), rgba(139,92,246,.11));
        }

        .object-plane-mid {
          transform: translate3d(30px, -18px, -64px) rotateZ(5deg);
          background:
            linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px),
            linear-gradient(135deg, rgba(9,16,42,.92), rgba(35,22,72,.72));
          background-size: 36px 36px;
        }

        .object-plane-front {
          overflow: hidden;
          transform: translateZ(44px);
          background: #050816;
        }

        .floating-chip {
          position: absolute;
          z-index: 4;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 999px;
          background: rgba(2, 6, 23, .64);
          padding: 10px 14px;
          color: rgb(210 244 255);
          font-size: 10px;
          font-weight: 850;
          letter-spacing: .16em;
          text-transform: uppercase;
          backdrop-filter: blur(18px);
          box-shadow: 0 16px 40px rgba(0,0,0,.3);
        }

        .chip-one { left: 8%; top: 12%; animation: floatSoft 6s ease-in-out infinite; }
        .chip-two { right: 7%; top: 26%; animation: floatSoft 7s ease-in-out infinite reverse; }
        .chip-three { left: 12%; bottom: 10%; animation: floatSoft 8s ease-in-out infinite; }

        .identity-panel {
          position: relative;
          overflow: hidden;
          min-height: 620px;
          border-radius: 44px;
          border: 1px solid rgba(255,255,255,.12);
          box-shadow: 0 34px 100px rgba(0,0,0,.38);
        }

        .identity-panel::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(180deg, transparent, rgba(0,0,0,.34));
        }

        .identity-cyber {
          background:
            radial-gradient(circle at 34% 16%, rgba(85,231,255,.22), transparent 26%),
            radial-gradient(circle at 80% 84%, rgba(53,211,153,.1), transparent 34%),
            linear-gradient(135deg, rgba(5,15,36,.92), rgba(2,6,23,.96));
        }

        .identity-cyber::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(rgba(85,231,255,.09) 1px, transparent 1px),
            linear-gradient(90deg, rgba(85,231,255,.07) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: linear-gradient(180deg, black, transparent 88%);
        }

        .identity-model {
          background:
            radial-gradient(circle at 70% 8%, rgba(245,199,107,.22), transparent 26%),
            radial-gradient(circle at 20% 88%, rgba(251,113,133,.15), transparent 34%),
            linear-gradient(135deg, rgba(25,13,24,.94), rgba(8,7,18,.98));
        }

        .identity-model::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 50% -10%, rgba(255,255,255,.16), transparent 32%),
            linear-gradient(115deg, transparent 0 42%, rgba(255,255,255,.08) 48%, transparent 54% 100%);
        }

        .cyber-section {
          position: relative;
          isolation: isolate;
        }

        .cyber-section::before {
          content: "";
          position: absolute;
          inset: 6% -8%;
          z-index: -1;
          background:
            linear-gradient(90deg, rgba(85,231,255,.12), transparent 24% 76%, rgba(139,92,246,.12)),
            radial-gradient(circle at 50% 48%, rgba(85,231,255,.14), transparent 44%);
          filter: blur(28px);
        }

        .cyber-card {
          border: 1px solid rgba(103,232,249,.15);
          border-radius: 30px;
          background:
            linear-gradient(180deg, rgba(13, 27, 56, .72), rgba(4, 8, 22, .72)),
            radial-gradient(circle at 12% 8%, rgba(103,232,249,.14), transparent 28%);
          box-shadow: 0 28px 80px rgba(0,0,0,.28);
        }

        .project-frame {
          border-radius: 34px;
          border: 1px solid rgba(255,255,255,.12);
          background:
            radial-gradient(circle at 20% 0%, rgba(85,231,255,.12), transparent 30%),
            linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.025));
          box-shadow: 0 34px 96px rgba(0,0,0,.36);
        }

        .modeling-section {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 12% 20%, rgba(45, 212, 191, .16), transparent 28%),
            radial-gradient(circle at 42% 16%, rgba(245, 199, 107, .14), transparent 30%),
            radial-gradient(circle at 76% 12%, rgba(249, 115, 22, .16), transparent 28%),
            radial-gradient(circle at 92% 46%, rgba(96, 165, 250, .14), transparent 30%),
            linear-gradient(180deg, rgba(12, 8, 18, .86), rgba(2, 4, 13, 0));
        }

        .modeling-section::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(115deg, transparent 0 38%, rgba(255,255,255,.08) 44%, transparent 52% 100%),
            linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px);
          background-size: 360px 360px, 54px 54px, 54px 54px;
          mask-image: radial-gradient(circle at 50% 32%, black, transparent 78%);
          animation: modelingAtmosphere 18s linear infinite;
        }

        .modeling-section::after {
          content: "";
          position: absolute;
          inset: auto -10% 0 -10%;
          height: 340px;
          pointer-events: none;
          background:
            radial-gradient(circle at 18% 50%, rgba(45,212,191,.24), transparent 24%),
            radial-gradient(circle at 44% 50%, rgba(245,199,107,.20), transparent 24%),
            radial-gradient(circle at 72% 50%, rgba(249,115,22,.22), transparent 24%),
            radial-gradient(circle at 90% 50%, rgba(96,165,250,.20), transparent 24%);
          filter: blur(38px);
          opacity: .78;
        }

        .brand-card {
          --brand-glow: rgba(255,255,255,.12);
          position: relative;
          border-radius: 36px;
          border: 1px solid rgba(255,255,255,.12);
          background: linear-gradient(180deg, rgba(255,255,255,.075), rgba(255,255,255,.025));
          box-shadow: 0 30px 96px rgba(0,0,0,.34);
        }

        .brand-card-careem { --brand-glow: rgba(45, 212, 191, .28); }
        .brand-card-saj { --brand-glow: rgba(245, 199, 107, .24); }
        .brand-card-doritos { --brand-glow: rgba(249, 115, 22, .26); }
        .brand-card-hohos { --brand-glow: rgba(96, 165, 250, .22); }

        .brand-card::before {
          content: "";
          position: absolute;
          inset: -1px;
          z-index: 0;
          border-radius: inherit;
          background:
            radial-gradient(circle at 50% -8%, var(--brand-glow), transparent 38%),
            linear-gradient(135deg, rgba(255,255,255,.22), transparent 34%, var(--brand-glow));
          opacity: .62;
          transform: translateZ(-1px);
        }

        .brand-card::after {
          content: "";
          position: absolute;
          inset: auto 7% -22% 7%;
          height: 52%;
          border-radius: 999px;
          background: var(--brand-glow);
          filter: blur(48px);
          opacity: .88;
          transform: perspective(900px) rotateX(58deg);
        }

        .brand-card .depth-content {
          position: relative;
          z-index: 2;
        }

        .brand-card:hover {
          box-shadow:
            0 36px 120px rgba(0,0,0,.42),
            0 0 70px var(--brand-glow);
        }

        .credential-section {
          position: relative;
          background:
            linear-gradient(180deg, rgba(6, 9, 23, 0), rgba(12, 19, 44, .74) 42%, rgba(4, 8, 22, 0)),
            radial-gradient(circle at 50% 40%, rgba(139,92,246,.12), transparent 44%);
        }

        .credential-card {
          border-radius: 28px;
          border: 1px solid rgba(255,255,255,.11);
          background:
            linear-gradient(180deg, rgba(255,255,255,.07), rgba(255,255,255,.024)),
            radial-gradient(circle at 20% 0%, rgba(139,92,246,.14), transparent 34%);
        }

        .media-section {
          background:
            radial-gradient(circle at 80% 14%, rgba(85,231,255,.13), transparent 32%),
            radial-gradient(circle at 20% 80%, rgba(53,211,153,.1), transparent 30%);
        }

        .media-tile {
          border-radius: 32px;
          border: 1px solid rgba(255,255,255,.11);
          background:
            linear-gradient(160deg, rgba(255,255,255,.07), rgba(255,255,255,.02)),
            linear-gradient(90deg, rgba(85,231,255,.08), transparent 54%);
        }

        .contact-section {
          position: relative;
        }

        .contact-shell {
          position: relative;
          overflow: hidden;
          border-radius: 48px;
          border: 1px solid rgba(255,255,255,.14);
          background:
            radial-gradient(circle at 20% 14%, rgba(85,231,255,.2), transparent 30%),
            radial-gradient(circle at 92% 18%, rgba(139,92,246,.22), transparent 34%),
            linear-gradient(135deg, rgba(255,255,255,.09), rgba(255,255,255,.025));
          box-shadow: 0 46px 120px rgba(0,0,0,.42);
        }

        .vault-panel {
          border-radius: 34px;
          border: 1px solid rgba(255,255,255,.14);
          background:
            radial-gradient(circle at 70% 0%, rgba(139,92,246,.18), transparent 34%),
            linear-gradient(180deg, rgba(7, 10, 24, .96), rgba(2, 4, 13, .98));
          box-shadow: 0 40px 120px rgba(0,0,0,.58);
          padding: 16px;
        }

        .brand-aura {
          position: absolute;
          inset: auto 8% -20% 8%;
          height: 46%;
          border-radius: 999px;
          filter: blur(44px);
        }

        .brand-aura-careem { background: rgba(45, 212, 191, .35); }
        .brand-aura-saj { background: rgba(245, 199, 107, .32); }
        .brand-aura-doritos { background: rgba(249, 115, 22, .34); }
        .brand-aura-hohos { background: rgba(96, 165, 250, .3); }

        .reel-link {
          display: flex;
          min-height: 56px;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,.11);
          background: rgba(255,255,255,.045);
          padding: 0 18px;
          color: rgb(226 232 240);
          font-size: 14px;
          font-weight: 800;
          transition: transform .25s ease, background .25s ease, border-color .25s ease;
        }

        .reel-link:hover {
          transform: translateY(-2px);
          border-color: rgba(103,232,249,.32);
          background: rgba(103,232,249,.08);
        }

        .reel-link strong {
          color: rgb(103 232 249);
          font-family: "Instrument Sans", "Manrope", sans-serif;
          letter-spacing: -0.02em;
        }


        .interview-card {
          position: relative;
          overflow: hidden;
          min-height: 620px;
          border-radius: 38px;
          border: 1px solid rgba(255,255,255,.12);
          background:
            radial-gradient(circle at 24% 14%, rgba(239,68,68,.18), transparent 28%),
            radial-gradient(circle at 86% 22%, rgba(85,231,255,.16), transparent 30%),
            linear-gradient(145deg, rgba(16, 24, 44, .92), rgba(3, 7, 18, .98));
          box-shadow: 0 40px 120px rgba(0,0,0,.42);
        }

        .interview-card::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(90deg, transparent, rgba(239,68,68,.12), transparent),
            linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px);
          background-size: 100% 100%, 100% 7px;
          mix-blend-mode: screen;
          opacity: .42;
        }

        .interview-image-wrap {
          position: relative;
          min-height: 390px;
          overflow: hidden;
          border-radius: 30px;
          border: 1px solid rgba(255,255,255,.12);
          background: #050816;
          box-shadow: 0 30px 80px rgba(0,0,0,.38);
        }

        .interview-time-badge {
          position: absolute;
          left: 18px;
          top: 18px;
          z-index: 5;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,.16);
          background: rgba(0,0,0,.64);
          padding: 10px 14px;
          color: white;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: .18em;
          text-transform: uppercase;
          backdrop-filter: blur(16px);
        }

        .interview-time-badge span {
          display: grid;
          height: 28px;
          min-width: 56px;
          place-items: center;
          border-radius: 999px;
          background: #ef4444;
          color: white;
          box-shadow: 0 0 24px rgba(239,68,68,.42);
        }

        @keyframes modelingAtmosphere {
          from { background-position: 0 0, 0 0, 0 0; }
          to { background-position: 420px 0, 54px 54px, 54px 54px; }
        }

        @keyframes auroraDrift {
          0% { transform: translate3d(-2%, -1%, 0) rotate(0deg); }
          100% { transform: translate3d(3%, 2%, 0) rotate(8deg); }
        }

        @keyframes scanRay {
          0% { transform: translateX(-40vw); opacity: 0; }
          18% { opacity: 1; }
          58%, 100% { transform: translateX(150vw); opacity: 0; }
        }

        @keyframes particleDrift {
          0% { transform: translate3d(0, 0, 0) scale(var(--particle-scale)); opacity: .16; }
          34% { opacity: .72; }
          100% { transform: translate3d(42px, -120px, 0) scale(var(--particle-scale)); opacity: 0; }
        }

        @keyframes dashTravel {
          to { stroke-dashoffset: -700; }
        }

        @keyframes nodeBlink {
          0%, 100% { transform: scale(.7); opacity: .25; }
          50% { transform: scale(1.55); opacity: 1; }
        }

        @keyframes heroPulse {
          0%, 100% { opacity: .7; transform: translate3d(calc(var(--cursor-x, 0) * 28px), calc(var(--cursor-y, 0) * 28px), 0) scale(.96); }
          50% { opacity: 1; transform: translate3d(calc(var(--cursor-x, 0) * 28px), calc(var(--cursor-y, 0) * 28px), 0) scale(1.04); }
        }

        @keyframes ringSpin {
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes floatSoft {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -14px, 0); }
        }

        @media (max-width: 768px) {
          .global-grid { background-size: 38px 38px; }
          .section-title { line-height: .94; }
          .hero-stage { min-height: auto; }
          .hero-stage::before { opacity: .78; }
          .hero-network { opacity: .45; }
          .hero-core,
          .hero-core-inner {
            min-height: 520px;
          }
          .hero-object {
            inset: 12% 8% 12%;
          }
          .floating-chip {
            font-size: 9px;
            padding: 8px 10px;
            letter-spacing: .12em;
          }
          .chip-two { right: 4%; top: 18%; }
          .identity-panel {
            min-height: auto;
            border-radius: 30px;
          }
          .depth-surface,
          .depth-content {
            transform: none !important;
          }
          .cursor-orb {
            width: 128px;
            height: 128px;
            right: 8%;
            top: 10%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.001ms !important;
          }
        }
      `}</style>

      <CyberBackground />
      <div className="progress-bar" style={{ width: `${progress}%` }} />

      <header className="pointer-events-none sticky top-3 z-50 px-3 md:top-4 md:px-5">
        <div className="top-nav pointer-events-auto mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-full px-3 py-2">
          <a href="#home" className="flex min-w-0 items-center gap-3 rounded-full py-1 pl-1 pr-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-sm font-black text-[#02040d]">MA</span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-black tracking-[-0.03em] text-white">Mustafa Alzaidi</span>
              <span className="block truncate text-[11px] font-semibold text-slate-500">Cybersecurity / Commercial Model</span>
            </span>
          </a>
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={classNames(
                  "rounded-full px-3 py-2 text-xs font-extrabold transition",
                  active === item.id ? "bg-white text-[#02040d]" : "text-slate-400 hover:bg-white/[0.08] hover:text-white",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={whatsappLink}
            className="grid min-h-10 shrink-0 place-items-center rounded-full bg-cyan-200 px-4 text-xs font-black text-[#02040d] transition hover:bg-white"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <section id="home" className="hero-stage mx-auto grid max-w-7xl gap-8 px-4 pb-16 pt-8 md:px-5 md:pb-24 md:pt-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center" onPointerMove={onHeroMove}>
        <HeroNetwork cursor={cursor} />

        <div className="relative z-10">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-cyan-100">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,.9)]" />
            Public identity online
          </div>
          <h1 className="reveal mt-6 max-w-5xl text-[clamp(4.2rem,13vw,10.4rem)] font-black leading-[0.79] text-white" style={{ "--delay": "80ms" } as CSSProperties}>
            Mustafa
            <span className="block bg-gradient-to-r from-cyan-100 via-white to-violet-200 bg-clip-text text-transparent">Alzaidi</span>
          </h1>
          <p className="reveal mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9" style={{ "--delay": "150ms" } as CSSProperties}>
            A cinematic personal brand for a cybersecurity student and commercial model, built around credibility, calm confidence, and professional visual presence.
          </p>
          <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row" style={{ "--delay": "220ms" } as CSSProperties}>
            <MagneticAnchor href="#identity">Enter portfolio</MagneticAnchor>
            <MagneticAnchor href={whatsappLink} variant="secondary">Start a conversation</MagneticAnchor>
          </div>
          <div className="reveal mt-9 grid max-w-2xl grid-cols-3 gap-3" style={{ "--delay": "300ms" } as CSSProperties}>
            {[
              ["13+", "brand works"],
              ["6", "credentials"],
              ["100%", "project mark"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-[24px] border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl">
                <p className="display-font text-3xl font-black text-white md:text-5xl">{value}</p>
                <p className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <HeroCore cursor={cursor} />
      </section>

      <section id="identity" className="mx-auto max-w-7xl px-4 py-16 md:px-5 md:py-24">
        <SectionHeader
          eyebrow="dual ecosystem"
          title="Two identities, one disciplined professional signal."
          text=""
        />

        <div className="grid gap-5 lg:grid-cols-2">
          <DepthSurface className="identity-panel identity-cyber reveal p-6 md:p-8" intensity={6}>
            <div className="relative z-10 flex min-h-[540px] flex-col justify-between gap-10 md:min-h-[620px]">
              <div>
                <p className="section-eyebrow">A / cybersecurity identity</p>
                <h3 className="mt-5 max-w-xl text-5xl font-black leading-[0.9] text-white md:text-7xl">Command center credibility.</h3>
                <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                  A formal technical track focused on cybersecurity foundations, hardware logic, digital risk, verified learning, and public awareness.
                </p>
              </div>
              <div className="grid gap-3">
                {["Verified credentials", "Academic projects", "Security awareness", "Engineering discipline"].map((item, index) => (
                  <div key={item} className="flex items-center justify-between rounded-2xl border border-cyan-200/12 bg-cyan-200/[0.055] px-4 py-3 backdrop-blur-xl">
                    <span className="text-sm font-bold text-slate-200">{item}</span>
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-cyan-200">0{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </DepthSurface>

          <DepthSurface className="identity-panel identity-model reveal p-6 md:p-8" intensity={6} style={{ "--delay": "120ms" } as CSSProperties}>
            <div className="relative z-10 flex min-h-[540px] flex-col justify-between gap-10 md:min-h-[620px]">
              <div>
                <p className="section-eyebrow !text-[#f5c76b]">B / commercial modeling identity</p>
                <h3 className="mt-5 max-w-xl text-5xl font-black leading-[0.9] text-white md:text-7xl">Cinematic brand presence.</h3>
                <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                  A premium archive for commercial campaigns, brand reels, visual confidence, and future collaborations with production teams.
                </p>
              </div>
              <div className="relative h-72 overflow-hidden rounded-[28px] border border-white/10 bg-black md:h-80">
                <Image src="/images/brands/careem-model.png" alt="Commercial modeling preview" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#f5c76b]">campaign archive</p>
                    <p className="mt-1 text-2xl font-black tracking-[-0.05em] text-white">Luxury reel system</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#080712]">expandable</span>
                </div>
              </div>
            </div>
          </DepthSurface>
        </div>
      </section>

      <section id="cyber" className="cyber-section mx-auto max-w-7xl px-4 py-16 md:px-5 md:py-28">
        <SectionHeader
          eyebrow="security operations track"
          title="Cybersecurity presented as a serious professional path."
          text=""
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {cyberSignals.map((signal, index) => (
            <DepthSurface key={signal.title} className="cyber-card reveal p-6 md:p-7" style={{ "--delay": `${index * 90}ms` } as CSSProperties}>
              <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-200/20 bg-cyan-200/10 text-sm font-black text-cyan-100">
                0{index + 1}
              </div>
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-cyan-200">{signal.label}</p>
              <h3 className="mt-4 text-2xl font-black leading-tight text-white">{signal.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{signal.text}</p>
            </DepthSurface>
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <DepthSurface className="cyber-card reveal p-6 md:p-8">
            <p className="section-eyebrow">live signal</p>
            <h3 className="mt-4 text-4xl font-black leading-none text-white md:text-5xl">Security posture summary.</h3>
            <div className="mt-7">
              <MetaLine label="Track" value="Cybersecurity studies" />
              <MetaLine label="Focus" value="Threats, systems, ethics, secure behavior" />
              <MetaLine label="Proof" value="Projects, certificates, seminars, recognition" />
              <MetaLine label="Status" value="Learning, building, improving" />
            </div>
          </DepthSurface>

          <DepthSurface className="cyber-card reveal p-6 md:p-8" style={{ "--delay": "100ms" } as CSSProperties}>
            <p className="section-eyebrow">terminal pulse</p>
            <div className="mt-5 rounded-[26px] border border-cyan-200/12 bg-black/34 p-5 font-mono text-xs leading-7 text-slate-500">
              {terminalLines.map((line, index) => (
                <p key={line} className={classNames(index === terminalIndex && "text-emerald-300")}>
                  [{String(index + 1).padStart(2, "0")}] {line}
                </p>
              ))}
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {achievements.slice(0, 4).map((item, index) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-cyan-200">intel {String(index + 1).padStart(2, "0")}</p>
                  <p className="mt-3 text-sm font-bold leading-6 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </DepthSurface>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-4 py-16 md:px-5 md:py-28">
        <SectionHeader
          eyebrow="applied work"
          title="Projects framed by outcome, discipline, and proof."
          text=""
        />

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <DepthSurface key={project.title} className="project-frame reveal p-3 md:p-4" intensity={5} style={{ "--delay": `${index * 100}ms` } as CSSProperties}>
              <div className="grid gap-5 lg:grid-cols-[0.96fr_1.04fr] lg:items-stretch">
                <div className="relative min-h-[340px] overflow-hidden rounded-[28px] bg-black md:min-h-[430px]">
                  <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 48vw" className="object-cover transition duration-700 hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/55 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-100 backdrop-blur-xl">
                    case file {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="flex flex-col justify-between p-3 md:p-6">
                  <div>
                    <p className="section-eyebrow">{project.discipline}</p>
                    <h3 className="mt-4 max-w-2xl text-4xl font-black leading-[0.95] text-white md:text-6xl">{project.title}</h3>
                    <p className="mt-5 inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      {project.outcome}
                    </p>
                    <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">{project.summary}</p>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span key={tool} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-bold text-slate-300">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </DepthSurface>
          ))}
        </div>
      </section>

      <section id="modeling" className="modeling-section px-4 py-16 md:px-5 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="commercial modeling"
            title="A luxury campaign archive, separate from the technical identity."
            text=""
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {brands.map((brand, index) => (
              <button
                key={brand.name}
                type="button"
                onClick={() => setSelectedBrand(brand)}
                className="group text-left"
                style={{ "--delay": `${index * 90}ms` } as CSSProperties}
              >
                <DepthSurface className={`brand-card brand-card-${brand.accent} reveal h-full p-3`} intensity={9}>
                  <div className="relative h-[430px] overflow-hidden rounded-[28px] bg-black sm:h-[480px]">
                    <Image src={brand.image} alt={brand.name} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover transition duration-700 group-hover:scale-[1.05]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/12 to-transparent" />
                    <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#080712]">
                      {brand.count}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-300">{brand.mood}</p>
                      <h3 className="mt-2 text-4xl font-black tracking-[-0.06em] text-white">{brand.name}</h3>
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-sm leading-7 text-slate-300">{brand.summary}</p>
                    <span className="mt-5 inline-flex min-h-11 items-center rounded-full border border-white/10 bg-white/[0.06] px-4 text-xs font-black uppercase tracking-[0.16em] text-white transition group-hover:border-white/[0.24] group-hover:bg-white/10">
                      {brand.links.length ? "Open campaign vault" : "Coming soon"}
                    </span>
                  </div>
                </DepthSurface>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="credentials" className="credential-section px-4 py-16 md:px-5 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="certificate vault"
            title="Verified learning assets with recruiter-friendly clarity."
            text=""
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((certificate, index) => (
              <a key={certificate.title} href={certificate.verify} target="_blank" rel="noreferrer" className="group" style={{ "--delay": `${index * 65}ms` } as CSSProperties}>
                <DepthSurface className="credential-card reveal h-full p-4" intensity={7}>
                  <div className="relative h-44 overflow-hidden rounded-[22px] border border-white/10 bg-black/35">
                    <Image src={certificate.image} alt={certificate.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain p-5 transition duration-500 group-hover:scale-[1.04]" />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-black leading-tight text-white">{certificate.title}</h3>
                      <p className="mt-2 text-sm font-semibold text-slate-500">{certificate.issuer}</p>
                    </div>
                    <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-emerald-200">
                      {certificate.score}
                    </span>
                  </div>
                  <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Verify credential</p>
                </DepthSurface>
              </a>
            ))}
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-5">
            {achievements.map((item, index) => (
              <div key={item} className="reveal rounded-[26px] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl" style={{ "--delay": `${index * 55}ms` } as CSSProperties}>
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-violet-200">signal {String(index + 1).padStart(2, "0")}</p>
                <p className="mt-5 text-base font-black leading-7 text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="media" className="media-section mx-auto max-w-7xl px-4 py-16 md:px-5 md:py-28">
        <SectionHeader
          eyebrow="featured and public presence"
          title="Communication is part of the professional profile."
          text=""
        />

        <div className="grid gap-5 lg:grid-cols-[1.04fr_0.96fr]">
          <DepthSurface className="interview-card reveal p-4 md:p-5" intensity={6}>
            <div className="grid h-full gap-5">
              <div className="interview-image-wrap">
                <Image
                  src={alRasheedInterview.image}
                  alt="Mustafa Alzaidi featured on Al Rasheed TV"
                  fill
                  sizes="(max-width: 768px) 100vw, 52vw"
                  className="object-cover transition duration-700 hover:scale-[1.035]"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                <div className="interview-time-badge">
                  starts at <span>{alRasheedInterview.startTime}</span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 rounded-[24px] border border-white/10 bg-black/56 p-5 backdrop-blur-xl">
                  <p className="text-[10px] font-black uppercase tracking-[0.24em] text-red-200">{alRasheedInterview.channel}</p>
                  <h3 className="mt-2 text-3xl font-black tracking-[-0.055em] text-white md:text-5xl">{alRasheedInterview.title}</h3>
                  <p className="mt-2 text-sm font-bold text-cyan-100">{alRasheedInterview.platform}</p>
                </div>
              </div>

              <div className="grid gap-5 p-2 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <p className="section-eyebrow">featured broadcast</p>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">{alRasheedInterview.summary}</p>
                </div>
                <MagneticAnchor href={alRasheedInterview.url} variant="primary" external>
                  Watch from 2:10
                </MagneticAnchor>
              </div>
            </div>
          </DepthSurface>

          <div className="grid gap-4">
            {mediaItems.map((item, index) => (
              <DepthSurface key={item.title} className="media-tile reveal p-5 md:p-6" intensity={5} style={{ "--delay": `${index * 85}ms` } as CSSProperties}>
                <div className="flex gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-cyan-200/20 bg-cyan-200/10 text-sm font-black text-cyan-100">
                    0{index + 1}
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-cyan-200">{item.kicker}</p>
                    <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
                    {item.title === "Al Rasheed TV Interview" && (
                      <a
                        href={alRasheedInterview.url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex rounded-full border border-red-300/20 bg-red-300/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-red-100 transition hover:bg-red-300/15"
                      >
                        Open at 2:10
                      </a>
                    )}
                  </div>
                </div>
              </DepthSurface>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section px-4 py-16 md:px-5 md:py-28">
        <div className="mx-auto max-w-7xl">
          <DepthSurface className="contact-shell reveal p-6 md:p-10 lg:p-12" intensity={5}>
            <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
              <div>
                <p className="section-eyebrow">secure contact gateway</p>
                <h2 className="mt-4 max-w-4xl text-5xl font-black leading-[0.9] text-white md:text-8xl">Let us discuss the right opportunity.</h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                  For cybersecurity opportunities, university activities, media features, or commercial campaigns, send a clear message and I will respond professionally.
                </p>
              </div>
              <div className="grid gap-3">
                <MagneticAnchor href={whatsappLink} className="w-full">Open WhatsApp</MagneticAnchor>
                <MagneticAnchor href="mailto:mustafa_alzaidi@icloud.com" variant="ghost" className="w-full">Send Email</MagneticAnchor>
                <MagneticAnchor href="https://www.linkedin.com/in/mostafa-mohammed-hamzah-bb4870354/" variant="secondary" external className="w-full">LinkedIn Profile</MagneticAnchor>
              </div>
            </div>
          </DepthSurface>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-8 text-center text-xs font-semibold text-slate-600">
        Copyright {new Date().getFullYear()} Mustafa Alzaidi. Cybersecurity, media, and commercial modeling profile.
      </footer>

      {selectedBrand && <BrandVault brand={selectedBrand} onClose={() => setSelectedBrand(null)} />}
    </main>
  );
}
