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
    <main className="min-h-screen bg-[#fbfaf7] text-[#111111]">
      <nav className="border-b border-black/10 bg-[#fbfaf7]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-sm font-semibold tracking-tight">
            Mustafa Alzaidi
          </Link>

          <div className="flex items-center gap-6 text-sm text-neutral-600">
            <Link href="/" className="hover:text-black">Home</Link>
            <Link href="/articles" className="font-medium text-black">Articles</Link>
            <Link href="/about" className="hover:text-black">About</Link>
            <Link href="/contact" className="hover:text-black">Contact</Link>
            <Link href="/privacy-policy" className="hover:text-black">Privacy</Link>
          </div>
        </div>
      </nav>

      <article>
        <header className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <Link
                href="/articles"
                className="text-sm font-medium text-neutral-500 hover:text-black"
              >
                ← Back to articles
              </Link>

              <p className="mt-12 text-sm font-medium uppercase tracking-[0.28em] text-neutral-500">
                {article.category}
              </p>
            </div>

            <div>
              <h1 className="text-5xl font-semibold leading-[1] tracking-[-0.06em] md:text-7xl">
                {article.title}
              </h1>

              <p className="mt-7 max-w-3xl text-xl leading-9 text-neutral-600">
                {article.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-neutral-500">
                <span>{article.date}</span>
                <span>·</span>
                <span>{article.author}</span>
                <span>·</span>
                <span>8 min read</span>
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-6">
          {article.image ? (
            <img
              src={article.image}
              alt={article.title}
              className="h-[520px] w-full rounded-[34px] border border-black/10 object-cover shadow-[0_24px_80px_rgba(0,0,0,0.10)]"
            />
          ) : (
            <div className="relative h-[520px] overflow-hidden rounded-[34px] bg-[#111]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_22%,rgba(255,255,255,0.85),transparent_14%),radial-gradient(circle_at_80%_65%,rgba(255,255,255,0.2),transparent_20%),linear-gradient(135deg,#111,#222_55%,#e8e2d6)]" />
              <div className="absolute inset-8 rounded-[28px] border border-white/15" />
              <div className="absolute bottom-8 left-8">
                <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-black">
                  {article.category}
                </span>
              </div>
            </div>
          )}
        </div>

        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[240px_minmax(0,760px)_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-8 border-t border-black/10 pt-6 text-sm text-neutral-500">
              <p className="font-medium text-black">Article</p>
              <p className="mt-3 leading-6">{article.title}</p>
            </div>
          </aside>

          <div className="min-w-0">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="mb-7 mt-14 text-4xl font-semibold leading-tight tracking-[-0.04em]">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="mb-5 mt-16 text-3xl font-semibold leading-tight tracking-[-0.035em]">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="mb-4 mt-10 text-2xl font-semibold tracking-[-0.02em]">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="mb-7 text-[19px] leading-9 text-neutral-700">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="mb-8 ml-6 list-disc space-y-3 text-[19px] leading-9 text-neutral-700">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="mb-8 ml-6 list-decimal space-y-3 text-[19px] leading-9 text-neutral-700">
                    {children}
                  </ol>
                ),
                li: ({ children }) => <li>{children}</li>,
                strong: ({ children }) => (
                  <strong className="font-semibold text-black">
                    {children}
                  </strong>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="my-10 border-l-4 border-black pl-6 text-xl leading-9 text-neutral-800">
                    {children}
                  </blockquote>
                ),
                table: ({ children }) => (
                  <div className="my-10 overflow-hidden rounded-2xl border border-black/10 bg-white">
                    <table className="w-full border-collapse text-left text-sm">
                      {children}
                    </table>
                  </div>
                ),
                th: ({ children }) => (
                  <th className="border-b border-black/10 bg-neutral-100 px-4 py-3 font-semibold">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="border-b border-black/5 px-4 py-3 text-neutral-700">
                    {children}
                  </td>
                ),
              }}
            >
              {article.content}
            </ReactMarkdown>
          </div>

          <aside className="hidden xl:block">
            <div className="sticky top-8 rounded-2xl border border-black/10 bg-white p-5">
              <p className="text-sm font-medium text-black">Written by</p>
              <p className="mt-2 text-sm text-neutral-600">{article.author}</p>
              <div className="mt-5 border-t border-black/10 pt-5 text-sm text-neutral-500">
                Practical technology notes for students, developers and modern
                digital users.
              </div>
            </div>
          </aside>
        </section>

        {related.length > 0 && (
          <section className="mx-auto max-w-7xl border-t border-black/10 px-6 py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em]">
              Related articles
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/articles/${item.slug}`}
                  className="rounded-2xl border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-sm text-neutral-500">{item.category}</p>
                  <h3 className="mt-4 text-xl font-semibold leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-neutral-600">
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