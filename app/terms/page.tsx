export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#02040d] text-white">
      <div className="mx-auto max-w-4xl px-6 py-20">

        <div className="mb-12">
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
            Legal
          </span>

          <h1 className="mt-6 text-5xl font-black tracking-tight">
            Terms & Conditions
          </h1>

          <p className="mt-4 text-slate-400">
            Last Updated: June 2026
          </p>
        </div>

        <div className="space-y-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">

          <section>
            <h2 className="mb-3 text-2xl font-bold">
              Website Purpose
            </h2>
            <p className="leading-8 text-slate-300">
              This website serves as the official portfolio of Mustafa Alzaidi,
              showcasing cybersecurity projects, certifications, academic work,
              media appearances, and commercial modeling activities.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold">
              Intellectual Property
            </h2>
            <p className="leading-8 text-slate-300">
              All original content, graphics, images, branding elements,
              portfolio materials, and written content are protected by
              applicable intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold">
              External Links
            </h2>
            <p className="leading-8 text-slate-300">
              This website may contain links to third-party services including
              LinkedIn, GitHub, Instagram, Credly, and other external platforms.
              We are not responsible for their content or privacy practices.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold">
              Acceptable Use
            </h2>
            <p className="leading-8 text-slate-300">
              Users may not attempt unauthorized access, distribute malicious
              software, interfere with website functionality, or engage in
              unlawful activities through this website.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold">
              Limitation of Liability
            </h2>
            <p className="leading-8 text-slate-300">
              The website is provided on an "as-is" basis without warranties of
              any kind. Use of the website is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold">
              Contact
            </h2>
            <p className="leading-8 text-slate-300">
              For questions regarding these terms, please use the contact
              information available on this website.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}