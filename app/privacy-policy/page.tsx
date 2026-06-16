import Link from "next/link";

export default function PrivacyPolicyPage() {
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
            <Link href="/contact" className="hover:text-black">Contact</Link>
            <Link href="/privacy-policy" className="font-medium text-black">Privacy</Link>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#86868b]">
            Legal
          </p>

          <h1 className="mt-6 text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
            Privacy Policy
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-[#6e6e73]">
            This page explains how information may be collected, used, and
            protected when visitors use Mustafa Alzaidi’s website.
          </p>

          <p className="mt-6 text-sm text-[#86868b]">
            Last updated: June 2026
          </p>
        </div>

        <div className="mt-20 rounded-[32px] bg-white p-8 shadow-[0_24px_80px_rgba(0,0,0,0.08)] md:p-12">
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.02em]">
                Overview
              </h2>
              <p className="mt-4 text-lg leading-9 text-[#515154]">
                This website provides educational and informational content about
                artificial intelligence, programming, cybersecurity, web
                development, and modern technology. Visitor privacy is important,
                and this policy explains what information may be collected and
                how it may be used.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.02em]">
                Information We May Collect
              </h2>
              <p className="mt-4 text-lg leading-9 text-[#515154]">
                This website may collect basic non-sensitive information such as
                pages visited, browser type, device type, approximate location,
                and general usage statistics. This information helps improve the
                website experience and understand which content is useful to
                visitors.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.02em]">
                Cookies and Analytics
              </h2>
              <p className="mt-4 text-lg leading-9 text-[#515154]">
                Cookies or similar technologies may be used to measure website
                performance, analyze traffic, and improve user experience. If
                services such as Google Analytics or Google AdSense are added,
                they may use cookies according to their own privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.02em]">
                Third-Party Services
              </h2>
              <p className="mt-4 text-lg leading-9 text-[#515154]">
                This website may use third-party tools for analytics,
                advertising, hosting, or performance measurement. These services
                may collect information according to their own terms and privacy
                policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.02em]">
                External Links
              </h2>
              <p className="mt-4 text-lg leading-9 text-[#515154]">
                Articles may include links to external websites, tools, or
                resources. This website is not responsible for the content,
                security, or privacy practices of external websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.02em]">
                Data Security
              </h2>
              <p className="mt-4 text-lg leading-9 text-[#515154]">
                Reasonable steps are taken to keep the website secure. However,
                no website can guarantee complete protection against every
                security risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.02em]">
                Policy Updates
              </h2>
              <p className="mt-4 text-lg leading-9 text-[#515154]">
                This Privacy Policy may be updated when needed. Any changes will
                be published on this page with an updated date.
              </p>
            </section>

            <section className="rounded-[24px] bg-[#f5f5f7] p-6">
              <h2 className="text-2xl font-semibold tracking-[-0.02em]">
                Contact
              </h2>
              <p className="mt-4 text-lg leading-9 text-[#515154]">
                For privacy-related questions, please contact the website owner
                through the contact page.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}