import Link from "next/link";
import { getAllArticles } from "@/data/articles";

const categories = ["Cybersecurity", "AI", "Careers", "Certifications", "Projects"];

export default function ArticlesPage() {
  const articles = getAllArticles();
  const featured = articles[0];
  const trending = articles.slice(1, 5);
  const latest = articles.slice(5);

  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-950">
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-[#020617] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <Link href="/" className="text-sm font-black">
            Mustafa Alzaidi
          </Link>

          <div className="flex items-center gap-4 overflow-x-auto text-xs font-bold text-slate-300 md:text-sm">
            <Link href="/" className="whitespace-nowrap hover:text-white">Portfolio</Link>
            <Link href="/articles" className="whitespace-nowrap text-cyan-300">Articles</Link>
            <Link href="/about" className="whitespace-nowrap hover:text-white">About</Link>
            <Link href="/contact" className="whitespace-nowrap hover:text-white">Contact</Link>
          </div>
        </div>
      </nav>

      <section className="bg-[#020617] text-white">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300">
                Security Intelligence
              </p>

              <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.04em] md:text-7xl">
                Cybersecurity research, AI tools, and career intelligence.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg md:leading-8">
                Practical technology articles connected to Mustafa Alzaidi’s portfolio,
                focused on cybersecurity careers, certifications, AI, and digital security.
              </p>

              <div className="mt-6 flex gap-2 overflow-x-auto pb-1">
                {categories.map((item) => (
                  <span
                    key={item}
                    className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
                Publication Status
              </p>

              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="rounded-xl bg-white/5 p-3">
                  <p className="text-2xl font-black">{articles.length}+</p>
                  <p className="mt-1 text-[11px] font-bold text-slate-400">Articles</p>
                </div>

                <div className="rounded-xl bg-white/5 p-3">
                  <p className="text-2xl font-black">5</p>
                  <p className="mt-1 text-[11px] font-bold text-slate-400">Topics</p>
                </div>

                <div className="rounded-xl bg-white/5 p-3">
                  <p className="text-2xl font-black">2026</p>
                  <p className="mt-1 text-[11px] font-bold text-slate-400">Updated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-14">
        {featured && (
          <Link
            href={`/articles/${featured.slug}`}
            className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl md:grid md:grid-cols-[1.15fr_0.85fr]"
          >
            <div className="relative h-56 bg-slate-950 md:h-full md:min-h-[390px]">
              {featured.image && (
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-full w-full object-cover"
                />
              )}

              <div className="absolute left-4 top-4 rounded-full bg-cyan-300 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-slate-950">
                Featured
              </div>
            </div>

            <div className="p-5 md:p-9">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-700">
                {featured.category}
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] md:text-5xl">
                {featured.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                {featured.description}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5 text-xs md:text-sm">
                <span className="font-semibold text-slate-500">
                  {featured.date}
                </span>
                <span className="font-black group-hover:text-cyan-700">
                  Read analysis →
                </span>
              </div>
            </div>
          </Link>
        )}

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_340px] md:mt-14">
          <section>
            <div className="mb-5 border-b border-slate-200 pb-4">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-700">
                Latest Research
              </p>
              <h2 className="mt-2 text-2xl font-black tracking-[-0.03em] md:text-4xl">
                New intelligence
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {latest.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl"
                >
                  {article.image && (
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-44 w-full object-cover md:h-52"
                    />
                  )}

                  <div className="p-5">
                    <p className="text-[11px] font-black uppercase tracking-[0.18em] text-cyan-700">
                      {article.category}
                    </p>

                    <h3 className="mt-3 text-xl font-black leading-tight tracking-[-0.03em] group-hover:text-cyan-700 md:text-2xl">
                      {article.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {article.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between text-xs">
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

          <aside className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-700">
                Trending Now
              </p>

              <div className="mt-5 space-y-4">
                {trending.map((item, index) => (
                  <Link
                    key={item.slug}
                    href={`/articles/${item.slug}`}
                    className="block border-b border-slate-200 pb-4 last:border-b-0 last:pb-0"
                  >
                    <p className="text-xs font-black text-cyan-700">
                      0{index + 1}
                    </p>
                    <h3 className="mt-1 text-base font-black leading-tight hover:text-cyan-700">
                      {item.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[#07111f] p-5 text-white shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
                Author
              </p>

              <div className="mt-5 flex items-center gap-4">
                <img
                  src="/images/mustafa-author.png"
                  alt="Mustafa Alzaidi"
                  className="h-14 w-14 rounded-xl object-cover"
                />

                <div>
                  <h3 className="text-lg font-black">Mustafa Alzaidi</h3>
                  <p className="mt-1 text-xs text-slate-400">
                    Cybersecurity Engineering Student
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-300">
                Articles support the main portfolio by showing technical research,
                cybersecurity learning, and practical knowledge.
              </p>

              <Link
                href="/"
                className="mt-5 inline-block rounded-full bg-cyan-300 px-4 py-2 text-xs font-black text-slate-950 hover:bg-white"
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