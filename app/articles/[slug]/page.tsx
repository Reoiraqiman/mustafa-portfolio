import Link from "next/link";
import { getAllArticles } from "@/data/articles";

const trendingTopics = [
  "Cybersecurity Careers",
  "AI Security",
  "Certifications",
  "Remote Security Jobs",
  "Penetration Testing",
];

export default function ArticlesPage() {
  const articles = getAllArticles();
  const featured = articles[0];
  const latest = articles.slice(1, 7);
  const more = articles.slice(7);

  return (
    <main className="min-h-screen bg-[#f4f7fb] text-[#0b1220]">
      <nav className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-sm font-bold tracking-tight">
            Mustafa Alzaidi
          </Link>

          <div className="flex items-center gap-5 text-sm text-slate-600">
            <Link href="/" className="hover:text-slate-950">Portfolio</Link>
            <Link href="/articles" className="font-semibold text-slate-950">Articles</Link>
            <Link href="/about" className="hover:text-slate-950">About</Link>
            <Link href="/contact" className="hover:text-slate-950">Contact</Link>
            <Link href="/privacy-policy" className="hover:text-slate-950">Privacy</Link>
          </div>
        </div>
      </nav>

      <section className="border-b border-slate-200 bg-[#07111f] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Security Intelligence
            </p>

            <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1] tracking-[-0.05em] md:text-7xl">
              Cybersecurity, AI, and technology insights.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Practical articles for students, developers, and security beginners.
              Built as part of Mustafa Alzaidi’s personal portfolio and technology publication.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Trending Topics
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {trendingTopics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-200"
                >
                  {topic}
                </span>
              ))}
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-400">
              Career guides, security skills, certifications, AI tools, and practical learning resources.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        {featured && (
          <Link
            href={`/articles/${featured.slug}`}
            className="group grid overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.10)] transition hover:-translate-y-1 hover:shadow-[0_34px_100px_rgba(15,23,42,0.16)] lg:grid-cols-[1.15fr_0.85fr]"
          >
            <div className="relative min-h-[380px] bg-slate-950">
              {featured.image ? (
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-full min-h-[380px] w-full object-cover"
                />
              ) : (
                <div className="h-full min-h-[380px] bg-slate-900" />
              )}

              <div className="absolute left-6 top-6 rounded-full bg-cyan-300 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-950">
                Featured
              </div>
            </div>

            <div className="flex flex-col justify-between p-8 md:p-10">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700">
                  {featured.category}
                </p>

                <h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-0.04em] text-slate-950 md:text-5xl">
                  {featured.title}
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  {featured.description}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6 text-sm">
                <span className="text-slate-500">
                  {featured.date} · {featured.author}
                </span>
                <span className="font-bold text-slate-950 group-hover:text-cyan-700">
                  Read analysis →
                </span>
              </div>
            </div>
          </Link>
        )}

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_330px]">
          <section>
            <div className="mb-6 flex items-end justify-between border-b border-slate-200 pb-5">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-700">
                  Latest Intelligence
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-[-0.03em]">
                  New articles
                </h2>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {latest.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  {article.image && (
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-48 w-full object-cover"
                    />
                  )}

                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">
                      {article.category}
                    </p>

                    <h3 className="mt-4 text-2xl font-bold leading-tight tracking-[-0.03em] group-hover:text-cyan-700">
                      {article.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {article.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between text-sm">
                      <span className="text-slate-500">{article.date}</span>
                      <span className="font-bold text-slate-950">Read →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-14">
              <h2 className="border-b border-slate-200 pb-5 text-3xl font-bold tracking-[-0.03em]">
                More articles
              </h2>

              <div className="divide-y divide-slate-200">
                {more.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/articles/${article.slug}`}
                    className="grid gap-5 py-7 transition hover:bg-white md:grid-cols-[170px_1fr]"
                  >
                    {article.image ? (
                      <img
                        src={article.image}
                        alt={article.title}
                        className="h-28 w-full rounded-xl object-cover"
                      />
                    ) : (
                      <div className="h-28 rounded-xl bg-slate-200" />
                    )}

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">
                        {article.category}
                      </p>

                      <h3 className="mt-2 text-2xl font-bold leading-tight tracking-[-0.03em]">
                        {article.title}
                      </h3>

                      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                        {article.description}
                      </p>

                      <p className="mt-4 text-sm font-semibold text-slate-500">
                        {article.date} · Read →
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-700">
                About this section
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                This articles section is part of Mustafa Alzaidi’s portfolio,
                focused on cybersecurity careers, AI tools, certifications, and practical technology education.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#07111f] p-6 text-white shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
                Key Areas
              </p>

              <div className="mt-5 space-y-3 text-sm text-slate-300">
                <p>Cybersecurity Careers</p>
                <p>Security Certifications</p>
                <p>AI Tools</p>
                <p>Programming Resources</p>
                <p>Beginner Roadmaps</p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-700">
                Portfolio
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                The main website remains a personal portfolio. Articles support the portfolio by showing technical knowledge and research ability.
              </p>

              <Link
                href="/"
                className="mt-5 inline-block text-sm font-bold text-slate-950 hover:text-cyan-700"
              >
                View portfolio →
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}