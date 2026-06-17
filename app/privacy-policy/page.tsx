import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-950">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#020617] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <Link href="/" className="text-sm font-black">Mustafa Alzaidi</Link>

          <div className="flex items-center gap-4 overflow-x-auto text-xs font-bold text-slate-300 md:text-sm">
            <Link href="/" className="whitespace-nowrap hover:text-white">Portfolio</Link>
            <Link href="/articles" className="whitespace-nowrap hover:text-white">Articles</Link>
            <Link href="/about" className="whitespace-nowrap hover:text-white">About</Link>
            <Link href="/contact" className="whitespace-nowrap hover:text-white">Contact</Link>
            <Link href="/privacy-policy" className="whitespace-nowrap text-cyan-300">Privacy</Link>
          </div>
        </div>
      </nav>

      <section className="bg-[#020617] text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-20">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300">
            Privacy Policy
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.04em] md:text-7xl">
            Privacy Policy
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 md:text-xl md:leading-9">
            This page explains how information may be handled when using mustafaalzaidi.com.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-8 md:px-6 md:py-14">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <p className="text-sm leading-7 text-slate-600">
            Last updated: 2026-06-16
          </p>

          <h2 className="mt-8 text-2xl font-black">Information Collection</h2>
          <p className="mt-3 text-base leading-8 text-slate-700">
            This website is primarily a personal portfolio and educational technology publication. It does not intentionally collect sensitive personal information from visitors.
          </p>

          <h2 className="mt-8 text-2xl font-black">Contact Information</h2>
          <p className="mt-3 text-base leading-8 text-slate-700">
            If you contact me by email or through linked external platforms, the information you provide may be used only to respond to your message.
          </p>

          <h2 className="mt-8 text-2xl font-black">Analytics and Advertising</h2>
          <p className="mt-3 text-base leading-8 text-slate-700">
            This website may use analytics or advertising services in the future to understand traffic and improve content. These services may use cookies or similar technologies according to their own policies.
          </p>

          <h2 className="mt-8 text-2xl font-black">External Links</h2>
          <p className="mt-3 text-base leading-8 text-slate-700">
            Articles and pages may include links to external websites such as LinkedIn, GitHub, tools, platforms, or educational resources. This website is not responsible for the privacy practices of external websites.
          </p>

          <h2 className="mt-8 text-2xl font-black">Educational Content</h2>
          <p className="mt-3 text-base leading-8 text-slate-700">
            The content published on this website is for educational and informational purposes only.
          </p>

          <h2 className="mt-8 text-2xl font-black">Contact</h2>
          <p className="mt-3 text-base leading-8 text-slate-700">
            For privacy-related questions, contact: mustafa_alzaidi@icloud.com
          </p>
        </div>
      </section>
    </main>
  );
}