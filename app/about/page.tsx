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
            <Link href="/" className="hover:text-black">
              Home
            </Link>
            <Link href="/articles" className="hover:text-black">
              Articles
            </Link>
            <Link href="/about" className="font-medium text-black">
              About
            </Link>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 border-b border-black/10 pb-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.32em] text-neutral-500">
              About
            </p>

            <h1 className="mt-7 text-5xl font-semibold leading-[1] tracking-[-0.05em] md:text-7xl">
              Mustafa Alzaidi
            </h1>

            <p className="mt-6 max-w-lg text-xl leading-9 text-neutral-600">
              Cybersecurity Engineering student, technology writer, and creator
              focused on AI, programming, cybersecurity, and digital tools.
            </p>
          </div>

          <div className="rounded-[32px] border border-black/10 bg-white p-8 shadow-sm md:p-10">
            <p className="text-lg leading-9 text-neutral-700">
              I am a Cybersecurity Engineering student with a strong interest in
              artificial intelligence, cybersecurity, software development, and
              emerging technologies. This website brings together my personal
              portfolio and a growing collection of practical technology
              articles.
            </p>

            <p className="mt-6 text-lg leading-9 text-neutral-700">
              The goal of this website is to share useful, clear, and practical
              content for students, developers, professionals, and everyday
              technology users. The articles focus on real tools, modern
              software, AI resources, cybersecurity awareness, and digital
              productivity.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <div className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-neutral-500">
              Main Focus
            </p>

            <ul className="mt-6 space-y-4 text-lg text-neutral-700">
              <li>Artificial Intelligence</li>
              <li>Cybersecurity</li>
              <li>Programming</li>
              <li>Web Development</li>
              <li>Technology Tools</li>
            </ul>
          </div>

          <div className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-neutral-500">
              Website Purpose
            </p>

            <p className="mt-6 text-lg leading-9 text-neutral-700">
              This website is designed as both a personal portfolio and a
              technology publication. It presents my work, activities, and
              technical interests while also publishing articles that help
              readers understand modern technology more effectively.
            </p>
          </div>

          <div className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-neutral-500">
              Background
            </p>

            <p className="mt-6 text-lg leading-9 text-neutral-700">
              My academic background in cybersecurity has shaped my interest in
              secure systems, digital awareness, responsible technology use, and
              the connection between software, data, and real-world security.
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-[32px] border border-black/10 bg-[#111111] p-8 text-white md:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-white/50">
            About this site
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em]">
            Practical technology content with a focus on usefulness.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-white/70">
            The content published here is intended for educational and
            informational purposes. Articles are written to explain technology in
            a clear and accessible way, especially for students, beginner
            developers, and users who want to understand AI and digital tools
            without unnecessary complexity.
          </p>
        </div>

        <div className="mt-16 border-t border-black/10 pt-10">
          <p className="text-sm text-neutral-500">Author</p>
          <p className="mt-2 text-xl font-medium">Mustafa Alzaidi</p>

          <p className="mt-6 text-sm text-neutral-500">Field of Study</p>
          <p className="mt-2 text-xl font-medium">
            Cybersecurity Engineering
          </p>

          <p className="mt-6 text-sm text-neutral-500">Website</p>
          <p className="mt-2 text-xl font-medium">mustafaalzaidi.com</p>
        </div>
      </section>
    </main>
  );
}