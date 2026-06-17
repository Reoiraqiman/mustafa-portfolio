import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-950">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#020617] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <Link href="/" className="text-sm font-black">
            Mustafa Alzaidi
          </Link>

          <div className="flex items-center gap-4 overflow-x-auto text-xs font-bold text-slate-300 md:text-sm">
            <Link href="/" className="whitespace-nowrap hover:text-white">Portfolio</Link>
            <Link href="/articles" className="whitespace-nowrap hover:text-white">Articles</Link>
            <Link href="/about" className="whitespace-nowrap text-cyan-300">About</Link>
            <Link href="/contact" className="whitespace-nowrap hover:text-white">Contact</Link>
            <Link href="/privacy-policy" className="whitespace-nowrap hover:text-white">Privacy</Link>
          </div>
        </div>
      </nav>

      <section className="bg-[#020617] text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-20">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300">
            About
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.04em] md:text-7xl">
            Mustafa Alzaidi
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 md:text-xl md:leading-9">
            Cybersecurity Engineering student, technology writer, and creator focused on cybersecurity, artificial intelligence, programming, and practical digital tools.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-14">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Field", "Cybersecurity Engineering"],
            ["Focus", "AI, security, programming"],
            ["Website", "mustafaalzaidi.com"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-700">
                {label}
              </p>
              <p className="mt-4 text-xl font-black tracking-[-0.03em]">
                {value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-black tracking-[-0.04em]">
              Personal portfolio and technology publication.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-700">
              I am a Cybersecurity Engineering student with a strong interest in artificial intelligence, cybersecurity, software development, and emerging technologies. This website brings together my personal portfolio and a growing collection of practical technology articles.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-700">
              The goal is to publish clear and useful content for students, developers, professionals, and everyday technology users. The articles focus on real tools, AI resources, cybersecurity awareness, career roadmaps, and digital productivity.
            </p>
          </div>

          <div className="rounded-2xl bg-[#07111f] p-6 text-white shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
              Main Topics
            </p>

            <div className="mt-5 space-y-3 text-sm font-bold text-slate-300">
              <p>Cybersecurity Careers</p>
              <p>Artificial Intelligence</p>
              <p>Programming</p>
              <p>Web Development</p>
              <p>Security Awareness</p>
              <p>Technology Tools</p>
            </div>

            <Link
              href="/articles"
              className="mt-6 inline-block rounded-full bg-cyan-300 px-4 py-2 text-xs font-black text-slate-950 hover:bg-white"
            >
              Read articles →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}