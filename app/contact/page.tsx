import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-950">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#020617] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <Link href="/" className="text-sm font-black">Mustafa Alzaidi</Link>

          <div className="flex items-center gap-4 overflow-x-auto text-xs font-bold text-slate-300 md:text-sm">
            <Link href="/" className="whitespace-nowrap hover:text-white">Portfolio</Link>
            <Link href="/articles" className="whitespace-nowrap hover:text-white">Articles</Link>
            <Link href="/about" className="whitespace-nowrap hover:text-white">About</Link>
            <Link href="/contact" className="whitespace-nowrap text-cyan-300">Contact</Link>
            <Link href="/privacy-policy" className="whitespace-nowrap hover:text-white">Privacy</Link>
          </div>
        </div>
      </nav>

      <section className="bg-[#020617] text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-20">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300">
            Contact
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.04em] md:text-7xl">
            Get in touch.
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 md:text-xl md:leading-9">
            For collaboration, portfolio inquiries, cybersecurity discussions, or technology-related opportunities.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-14">
        <div className="grid gap-5 md:grid-cols-3">
          <a href="mailto:mustafa_alzaidi@icloud.com" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-700">Email</p>
            <p className="mt-4 break-all text-lg font-black">mustafa_alzaidi@icloud.com</p>
          </a>

          <a href="https://www.linkedin.com/in/mostafa-mohammed-hamzah-bb4870354/" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-700">LinkedIn</p>
            <p className="mt-4 text-lg font-black">Professional profile</p>
          </a>

          <a href="https://github.com/Reoiraqiman" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-700">GitHub</p>
            <p className="mt-4 text-lg font-black">Projects and code</p>
          </a>
        </div>

        <div className="mt-8 rounded-2xl bg-[#07111f] p-6 text-white shadow-sm md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
            Contact note
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-[-0.04em]">
            Portfolio-first communication.
          </h2>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300 md:text-base md:leading-8">
            This website is primarily a personal portfolio and technology publication. Contact is available for professional opportunities, cybersecurity learning discussions, technical collaboration, and content-related inquiries.
          </p>
        </div>
      </section>
    </main>
  );
}