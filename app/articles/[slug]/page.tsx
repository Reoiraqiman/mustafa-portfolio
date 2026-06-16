import { getArticleBySlug, getAllArticles } from "@/data/articles";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const related = getAllArticles()
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#020617]/90 backdrop-blur-xl">
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

      <article>
        <header className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.20),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.18),transparent_30%)]" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <Link
                href="/articles"
                className="text-sm font-bold text-slate-400 hover:text-white"
              >
                ← Back to articles
              </Link>

              <p className="mt-12 text-sm font-black uppercase tracking-[0.28em] text-cyan-300">
                {article.category}
              </p>
            </div>

            <div>
              <h1 className="max-w-4xl text-5xl font-black leading-[1] tracking-[-0.06em] text-white md:text-7xl">
                {article.title}
              </h1>

              <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-300">
                {article.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium text-slate-400">
                <span>{article.date}</span>
                <span>·</span>
                <span>{article.author}</span>
                <span>·</span>
                <span>Security Intelligence</span>
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-6 py-12">
          {article.image ? (
            <img
              src={article.image}
              alt={article.title}
              className="h-[520px] w-full rounded-[34px] border border-white/10 object-cover shadow-[0_30px_100px_rgba(0,0,0,0.35)]"
            />
          ) : (
            <div className="h-[520px] rounded-[34px] bg-slate-900" />
          )}
        </div>

        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-12 lg:grid-cols-[240px_minmax(0,780px)_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-28 border-t border-white/10 pt-6 text-sm text-slate-400">
              <p className="font-black text-white">Article Brief</p>
              <p className="mt-3 leading-6">{article.title}</p>
            </div>
          </aside>

          <div className="min-w-0 rounded-[32px] bg-white px-7 py-4 text-slate-950 shadow-[0_30px_100px_rgba(0,0,0,0.25)]">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="mb-7 mt-14 text-4xl font-black leading-tight tracking-[-0.04em] text-slate-950">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="mb-5 mt-16 text-3xl font-black leading-tight tracking-[-0.035em] text-slate-950">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="mb-4 mt-10 text-2xl font-bold tracking-[-0.02em] text-slate-950">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="mb-7 text-[19px] leading-9 text-slate-700">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="mb-8 ml-6 list-disc space-y-3 text-[19px] leading-9 text-slate-700">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="mb-8 ml-6 list-decimal space-y-3 text-[19px] leading-9 text-slate-700">
                    {children}
                  </ol>
                ),
                li: ({ children }) => <li>{children}</li>,
                strong: ({ children }) => (
                  <strong className="font-black text-slate-950">{children}</strong>
                ),
              }}
            >
              {article.content}
            </ReactMarkdown>

            <section className="mt-16 overflow-hidden rounded-[32px] border border-slate-200 bg-[#07111f] text-white shadow-[0_30px_90px_rgba(15,23,42,0.18)]">
              <div className="grid gap-0 lg:grid-cols-[260px_1fr]">
                <div className="relative min-h-[280px] bg-slate-950">
                  <img
                    src="/images/mustafa-author.png"
                    alt="Mustafa Alzaidi"
                    className="h-full min-h-[280px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-transparent" />
                </div>

                <div className="p-8 md:p-10">
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
                    About the Author
                  </p>

                  <h3 className="mt-5 text-4xl font-black tracking-[-0.05em]">
                    Mustafa Alzaidi
                  </h3>

                  <p className="mt-3 text-sm font-bold text-cyan-200">
                    Cybersecurity Engineering Student · Technology Writer · Portfolio Owner
                  </p>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
                    Mustafa Alzaidi is a Cybersecurity Engineering student focused on
                    cybersecurity careers, security awareness, artificial intelligence,
                    programming, and practical digital tools. This publication supports
                    his main portfolio by documenting research, technical learning, and
                    practical resources for students, developers, and cybersecurity beginners.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="/"
                      className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-white"
                    >
                      View Portfolio
                    </Link>

                    <a
                      href="https://www.linkedin.com/in/mostafa-mohammed-hamzah-bb4870354/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/15 px-5 py-3 text-sm font-black text-white transition hover:bg-white/10"
                    >
                      LinkedIn
                    </a>

                    <a
                      href="https://github.com/Reoiraqiman"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/15 px-5 py-3 text-sm font-black text-white transition hover:bg-white/10"
                    >
                      GitHub
                    </a>

                    <Link
                      href="/contact"
                      className="rounded-full border border-white/15 px-5 py-3 text-sm font-black text-white transition hover:bg-white/10"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        {related.length > 0 && (
          <section className="mx-auto max-w-7xl border-t border-white/10 px-6 py-16">
            <h2 className="text-3xl font-black tracking-[-0.03em] text-white">
              Related articles
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/articles/${item.slug}`}
                  className="rounded-2xl border border-white/10 bg-white p-6 text-slate-950 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">
                    {item.category}
                  </p>
                  <h3 className="mt-4 text-xl font-black leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </main>
  );
}