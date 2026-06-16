import Link from "next/link";
import { getAllArticles } from "@/data/articles";

const categories = [
  "Cybersecurity",
  "AI",
  "Careers",
  "Certifications",
  "Projects",
];

export default function ArticlesPage() {
  const articles = getAllArticles();

  const featured = articles[0];
  const trending = articles.slice(1, 5);
  const latest = articles.slice(5);

  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#020617]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-sm font-black tracking-tight">
            Mustafa Alzaidi
          </Link>

          <div className="flex items-center gap-5 text-sm font-semibold text-slate-300">
            <Link href="/" className="hover:text-white">Portfolio</Link>
            <Link href="/articles" className="text-cyan-300">Articles</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.20),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.18),transparent_30%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
              Security Intelligence
            </p>

            <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Cybersecurity research, AI tools, and career intelligence.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Practical technology articles connected to Mustafa Alzaidi’s main
              portfolio, focused on cybersecurity careers, certifications,
              artificial intelligence, and digital security awareness.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {categories.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
              Publication Status
            </p>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-3xl font-black">{articles.length}+</p>
                <p className="mt-1 text-xs font-bold text-slate-400">
                  Articles
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-3xl font-black">5</p>
                <p className="mt-1 text-xs font-bold text-slate-400">
                  Topics
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-3xl font-black">2026</p>
                <p className="mt-1 text-xs font-bold text-slate-400">
                  Updated
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-400">
              Built to support the portfolio with visible technical knowledge,
              research depth, and practical learning resources.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        {featured && (
          <Link
            href={`/articles/${featured.slug}`}
            className="group grid overflow-hidden rounded-[34px] border border-white/10 bg-white text-slate-950 shadow-[0_30px_100px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 lg:grid-cols-[1.15fr_0.85fr]"
          >
            <div className="relative min-h-[420px] bg-slate-950">
              {featured.image && (
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-full min-h-[420px] w-full object-cover"
                />
              )}

              <div className="absolute left-6 top-6 rounded-full bg-cyan-300 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-950">
                Featured Analysis
              </div>
            </div>

            <div className="flex flex-col justify-between p-8 md:p-10">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-700">
                  {featured.category}
                </p>

                <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em] md:text-5xl">
                  {featured.title}
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  {featured.description}
                </p>
              </div>

              <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-6 text-sm">
                <span className="font-semibold text-slate-500">
                  {featured.date} · Mustafa Alzaidi
                </span>
                <span className="font-black group-hover:text-cyan-700">
                  Read analysis →
                </span>
              </div>
            </div>
          </Link>
        )}

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_360px]">
          <section>
            <div className="mb-8 flex items-end justify-between border-b border-white/10 pb-6">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
                  Latest Research
                </p>
                <h2 className="mt-3 text-4xl font-black tracking-[-0.05em]">
                  New intelligence
                </h2>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {latest.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-white text-slate-950 shadow-[0_18px_60px_rgba(0,0,0,0.20)] transition hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(0,0,0,0.30)]"
                >
                  {article.image && (
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-56 w-full object-cover"
                    />
                  )}

                  <div className="p-6">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-700">
                      {article.category}
                    </p>

                    <h3 className="mt-4 text-2xl font-black leading-tight tracking-[-0.04em] group-hover:text-cyan-700">
                      {article.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {article.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between text-sm">
                      <span className="font-semibold text-slate-500">
                        {article.date}
                      </span>
                      <span className="font-black">Read →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white p-6 text-slate-950 shadow-xl">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-700">
                Trending Now
              </p>

              <div className="mt-6 space-y-5">
                {trending.map((item, index) => (
                  <Link
                    key={item.slug}
                    href={`/articles/${item.slug}`}
                    className="block border-b border-slate-200 pb-5 last:border-b-0 last:pb-0"
                  >
                    <p className="text-xs font-black text-cyan-700">
                      0{index + 1}
                    </p>
                    <h3 className="mt-2 text-lg font-black leading-tight tracking-[-0.03em] hover:text-cyan-700">
                      {item.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#07111f] p-6 shadow-xl">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
                Author
              </p>

              <div className="mt-6 flex items-center gap-4">
                <img
                  src="/images/mustafa-author.png"
                  alt="Mustafa Alzaidi"
                  className="h-16 w-16 rounded-2xl object-cover"
                />

                <div>
                  <h3 className="text-xl font-black">Mustafa Alzaidi</h3>
                  <p className="mt-1 text-sm text-slate-400">
                    Cybersecurity Engineering Student
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-300">
                Articles support the main portfolio by showing technical
                research, cybersecurity learning, and practical knowledge.
              </p>

              <Link
                href="/"
                className="mt-6 inline-block rounded-full bg-cyan-300 px-5 py-3 text-sm font-black text-slate-950 hover:bg-white"
              >
                View Portfolio →
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}