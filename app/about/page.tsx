import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#111111]">
      <nav className="border-b border-black/10 bg-[#fbfaf7]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-sm font-semibold tracking-tight">
            Mustafa Alzaidi
          </Link>

          <div className="flex items-center gap-6 text-sm text-neutral-600">
            <Link href="/" className="hover:text-black transition">
              Home
            </Link>
            <Link href="/articles" className="hover:text-black transition">
              Articles
            </Link>
            <Link href="/about" className="font-medium text-black">
              About
            </Link>
            <Link href="/contact" className="hover:text-black transition">
              Contact
            </Link>
            <Link href="/privacy-policy" className="hover:text-black transition">
              Privacy
            </Link>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 border-b border-black/10 pb-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.32em] text-neutral-500">
              About
            </p>

            <h1 className="mt-7 text-5xl font-semibold leading-[0.98] tracking-[-0.06em] md:text-7xl">
              Mustafa Alzaidi
            </h1>

            <p className="mt-7 max-w-xl text-xl leading-9 text-neutral-600">
              Cybersecurity Engineering student, technology writer, and creator
              focused on artificial intelligence, cybersecurity, programming,
              and modern digital tools.
            </p>
          </div>

          <div className="rounded-[34px] border border-black/10 bg-white p-8 shadow-[0_24px_80px_rgba(0,0,0,0.07)] md:p-10">
            <p className="text-lg leading-9 text-neutral-700">
              I am a Cybersecurity Engineering student with a strong interest in
              artificial intelligence, cybersecurity, software development, and
              emerging technologies. This website brings together my personal
              portfolio and a growing collection of practical technology
              articles.
            </p>

            <p className="mt-6 text-lg leading-9 text-neutral-700">
              The goal is to publish useful, clear, and practical content for
              students, developers, professionals, and everyday technology users.
              The articles focus on real tools, software trends, AI resources,
              cybersecurity awareness, and digital productivity.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-neutral-500">
              Field
            </p>
            <p className="mt-5 text-2xl font-semibold tracking-[-0.03em]">
              Cybersecurity Engineering
            </p>
          </div>

          <div className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-neutral-500">
              Focus
            </p>
            <p className="mt-5 text-2xl font-semibold tracking-[-0.03em]">
              AI, security, programming
            </p>
          </div>

          <div className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-neutral-500">
              Website
            </p>
            <p className="mt-5 text-2xl font-semibold tracking-[-0.03em]">
              mustafaalzaidi.com
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <div className="rounded-[30px] border border-black/10 bg-white p-8 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-neutral-500">
              Main Topics
            </p>

            <ul className="mt-7 space-y-4 text-lg text-neutral-700">
              <li>Artificial Intelligence</li>
              <li>Cybersecurity</li>
              <li>Programming</li>
              <li>Web Development</li>
              <li>Technology Tools</li>
              <li>Digital Productivity</li>
            </ul>
          </div>

          <div className="rounded-[30px] border border-black/10 bg-white p-8 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-neutral-500">
              Website Purpose
            </p>

            <p className="mt-7 text-lg leading-9 text-neutral-700">
              This website is designed as both a personal portfolio and a
              technology publication. It presents my work, activities, and
              technical interests while also publishing articles that help
              readers understand modern technology more effectively.
            </p>
          </div>

          <div className="rounded-[30px] border border-black/10 bg-white p-8 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-neutral-500">
              Background
            </p>

            <p className="mt-7 text-lg leading-9 text-neutral-700">
              My academic background in cybersecurity has shaped my interest in
              secure systems, digital awareness, responsible technology use, and
              the connection between software, data, and real-world security.
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-[34px] border border-black/10 bg-[#111111] p-8 text-white shadow-[0_24px_80px_rgba(0,0,0,0.12)] md:p-12">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-white/50">
            About this site
          </p>

          <h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
            Practical technology content with a focus on clarity and usefulness.
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-9 text-white/70">
            The content published here is intended for educational and
            informational purposes. Articles are written to explain technology in
            a clear and accessible way, especially for students, beginner
            developers, and users who want to understand AI and digital tools
            without unnecessary complexity.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/articles"
              className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
            >
              Read articles
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Contact me
            </Link>
          </div>
        </div>

        <div className="mt-16 border-t border-black/10 pt-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-sm text-neutral-500">Author</p>
              <p className="mt-2 text-xl font-medium">Mustafa Alzaidi</p>
            </div>

            <div>
              <p className="text-sm text-neutral-500">Field of Study</p>
              <p className="mt-2 text-xl font-medium">
                Cybersecurity Engineering
              </p>
            </div>

            <div>
              <p className="text-sm text-neutral-500">Website</p>
              <p className="mt-2 text-xl font-medium">mustafaalzaidi.com</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}