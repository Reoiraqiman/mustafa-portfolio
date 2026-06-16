import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
      <nav className="border-b border-black/10 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-sm font-semibold">
            Mustafa Alzaidi
          </Link>

          <div className="flex items-center gap-6 text-sm text-[#6e6e73]">
            <Link href="/" className="hover:text-black">Home</Link>
            <Link href="/articles" className="hover:text-black">Articles</Link>
            <Link href="/about" className="hover:text-black">About</Link>
            <Link href="/contact" className="font-medium text-black">Contact</Link>
            <Link href="/privacy-policy" className="hover:text-black">Privacy</Link>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#86868b]">
            Contact
          </p>

          <h1 className="mt-6 text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
            Get in touch
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-[#6e6e73]">
            For collaborations, business inquiries, portfolio opportunities,
            technology discussions, or website feedback, you can contact me
            through the links below.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          <a
            href="mailto:mustafa_alzaidi@icloud.com"
            className="rounded-[30px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.07)] transition hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(0,0,0,0.10)]"
          >
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#86868b]">
              Email
            </p>
            <h2 className="mt-5 text-2xl font-semibold">Email me</h2>
            <p className="mt-4 break-words text-base leading-7 text-[#6e6e73]">
              mustafa_alzaidi@icloud.com
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/mostafa-mohammed-hamzah-bb4870354/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[30px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.07)] transition hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(0,0,0,0.10)]"
          >
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#86868b]">
              LinkedIn
            </p>
            <h2 className="mt-5 text-2xl font-semibold">Connect on LinkedIn</h2>
            <p className="mt-4 text-base leading-7 text-[#6e6e73]">
              Professional profile, academic background, and technology updates.
            </p>
          </a>

          <a
            href="https://github.com/Reoiraqiman"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[30px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.07)] transition hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(0,0,0,0.10)]"
          >
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#86868b]">
              GitHub
            </p>
            <h2 className="mt-5 text-2xl font-semibold">View GitHub</h2>
            <p className="mt-4 text-base leading-7 text-[#6e6e73]">
              Projects, code, development work, and technical experiments.
            </p>
          </a>
        </div>

        <div className="mt-16 rounded-[34px] bg-[#1d1d1f] p-8 text-white shadow-[0_24px_80px_rgba(0,0,0,0.12)] md:p-12">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-white/50">
            Professional inquiries
          </p>

          <h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
            Open to technology, cybersecurity, modeling, and collaboration
            opportunities.
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-9 text-white/70">
            If you are reaching out about a professional opportunity, please
            include a clear subject, project details, expected timeline, and the
            best way to respond.
          </p>
        </div>
      </section>
    </main>
  );
}