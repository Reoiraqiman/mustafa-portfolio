import Link from "next/link";
import { getAllArticles } from "@/data/articles";

export default function ArticlesPage() {
  const articles = getAllArticles();
  const featured = articles[0];
  const rest = articles.slice(1);

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

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 border-b border-black/10 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.32em] text-neutral-500">
              Insights
            </p>

            <h1 className="mt-7 max-w-4xl text-6xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-8xl">
              Practical writing on AI and modern technology.
            </h1>
          </div>

          <p className="max-w-xl text-xl leading-9 text-neutral-600">
            Independent articles about artificial intelligence, programming,
            cybersecurity, digital tools, and how technology is changing real
            work.
          </p>
        </div>

        {featured && (
          <section className="mt-16">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-sm font-medium uppercase tracking-[0.28em] text-neutral-500">
                Featured Article
              </h2>
              <span className="hidden text-sm text-neutral-500 md:block">
                Selected read
              </span>
            </div>

            <Link
              href={`/articles/${featured.slug}`}
              className="group grid overflow-hidden rounded-[32px] border border-black/10 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_34px_100px_rgba(0,0,0,0.12)] lg:grid-cols-[1.05fr_0.95fr]"
            >
              <div className="relative min-h-[420px] overflow-hidden bg-[#0b1f26]">
                {featured.image ? (
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="h-full min-h-[420px] w-full object-contain"
                  />
                ) : (
                  <div className="h-full min-h-[420px] w-full bg-neutral-900" />
                )}

                <div className="absolute bottom-8 left-8">
                  <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-black shadow-sm">
                    {featured.category}
                  </span>
                </div>
              </div>

              <div className="flex min-h-[420px] flex-col justify-between p-8 md:p-12">
                <div>
                  <p className="text-sm text-neutral-500">
                    {featured.date} · {featured.author}
                  </p>

                  <h3 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-5xl">
                    {featured.title}
                  </h3>

                  <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
                    {featured.description}
                  </p>
                </div>

                <div className="mt-10 flex items-center justify-between border-t border-black/10 pt-6">
                  <span className="text-sm text-neutral-500">8 min read</span>
                  <span className="text-sm font-semibold text-black group-hover:underline">
                    Read article →
                  </span>
                </div>
              </div>
            </Link>
          </section>
        )}

        <section className="mt-24">
          <div className="mb-8 flex items-end justify-between border-b border-black/10 pb-6">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-neutral-500">
                Latest Articles
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
                More from the journal
              </h2>
            </div>
          </div>

          <div className="grid border-t border-black/10 md:grid-cols-2">
            {rest.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group border-b border-black/10 p-7 transition hover:bg-white md:odd:border-r"
              >
                <p className="text-sm font-medium text-neutral-500">
                  {article.category}
                </p>

                <h3 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.03em] group-hover:underline">
                  {article.title}
                </h3>

                <p className="mt-4 max-w-xl text-base leading-7 text-neutral-600">
                  {article.description}
                </p>

                <div className="mt-8 flex items-center justify-between text-sm text-neutral-500">
                  <span>{article.date}</span>
                  <span className="font-medium text-black">Read →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}