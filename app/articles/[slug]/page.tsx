import type { Metadata } from "next";
import { getArticleBySlug, getAllArticles } from "@/data/articles";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import type { ReactNode } from "react";

const siteUrl = "https://mustafaalzaidi.com";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

function cleanHeading(text: string) {
  return text.replace(/[*_`#]/g, "").trim();
}

function getHeadings(content: string) {
  const matches = Array.from(content.matchAll(/^(##|###)\s+(.+)$/gm));

  return matches.map((match) => {
    const level = match[1] === "##" ? 2 : 3;
    const text = cleanHeading(match[2]);

    return {
      level,
      text,
      id: slugify(text),
    };
  });
}

function getTextFromChildren(children: ReactNode): string {
  if (typeof children === "string") return children;
  if (typeof children === "number") return String(children);

  if (Array.isArray(children)) {
    return children.map(getTextFromChildren).join("");
  }

  return "";
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const articleUrl = `${siteUrl}/articles/${slug}`;
  const imageUrl = article.image
    ? article.image.startsWith("http")
      ? article.image
      : `${siteUrl}${article.image}`
    : `${siteUrl}/icon.png`;

  const description =
    article.description ||
    "Practical cybersecurity, AI, programming, and technology article by Mustafa Alzaidi.";

  return {
    title: article.title,
    description,
    authors: [{ name: article.author || "Mustafa Alzaidi", url: siteUrl }],
    creator: "Mustafa Alzaidi",
    publisher: "Mustafa Alzaidi",
    category: article.category || "Technology",
    keywords: [
      article.title,
      article.category,
      "Mustafa Alzaidi",
      "Cybersecurity",
      "AI",
      "Programming",
      "Technology",
      "Cybersecurity Careers",
      "Cybersecurity Certifications",
      "Security Awareness",
    ],
    alternates: {
      canonical: articleUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: article.title,
      description,
      url: articleUrl,
      siteName: "Mustafa Alzaidi",
      type: "article",
      locale: "en_US",
      publishedTime: article.date
        ? new Date(article.date).toISOString()
        : undefined,
      modifiedTime: article.date
        ? new Date(article.date).toISOString()
        : undefined,
      section: article.category || "Technology",
      authors: [siteUrl],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const related = getAllArticles()
    .filter((item) => item.slug !== slug)
    .filter((item) => item.category === article.category)
    .slice(0, 6);

  const headings = getHeadings(article.content);

  const articleUrl = `${siteUrl}/articles/${slug}`;
  const imageUrl = article.image
    ? article.image.startsWith("http")
      ? article.image
      : `${siteUrl}${article.image}`
    : `${siteUrl}/icon.png`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: article.title,
        description: article.description,
        image: [imageUrl],
        datePublished: article.date,
        dateModified: article.date,
        author: {
          "@type": "Person",
          name: article.author || "Mustafa Alzaidi",
          url: siteUrl,
          sameAs: [
            "https://www.linkedin.com/in/mostafa-mohammed-hamzah-bb4870354/",
            "https://github.com/Reoiraqiman",
          ],
        },
        publisher: {
          "@type": "Person",
          name: "Mustafa Alzaidi",
          url: siteUrl,
          image: `${siteUrl}/icon.png`,
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": articleUrl,
        },
        articleSection: article.category,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Articles",
            item: `${siteUrl}/articles`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.title,
            item: articleUrl,
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#020617] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <Link href="/" className="text-sm font-black">
            Mustafa Alzaidi
          </Link>

          <div className="flex items-center gap-4 overflow-x-auto text-xs font-bold text-slate-300 md:text-sm">
            <Link href="/" className="whitespace-nowrap hover:text-white">
              Portfolio
            </Link>
            <Link href="/articles" className="whitespace-nowrap text-cyan-300">
              Articles
            </Link>
            <Link href="/about" className="whitespace-nowrap hover:text-white">
              About
            </Link>
            <Link href="/contact" className="whitespace-nowrap hover:text-white">
              Contact
            </Link>
            <Link
              href="/privacy-policy"
              className="whitespace-nowrap hover:text-white"
            >
              Privacy
            </Link>
          </div>
        </div>
      </nav>

      <article>
        <header className="bg-[#020617] text-white">
          <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-20">
            <div className="mb-8 flex flex-wrap items-center gap-2 text-xs font-bold text-slate-400">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span>/</span>
              <Link href="/articles" className="hover:text-white">
                Articles
              </Link>
              <span>/</span>
              <span className="text-cyan-300">{article.category}</span>
            </div>

            <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
              {article.category}
            </p>

            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.04em] md:text-7xl">
              {article.title}
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 md:text-xl md:leading-9">
              {article.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-slate-400 md:text-sm">
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.author}</span>
              <span>·</span>
              <span>Security Intelligence</span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-10">
          {article.image ? (
            <img
              src={article.image}
              alt={article.title}
              className="h-56 w-full rounded-2xl border border-slate-200 object-cover shadow-sm md:h-[520px] md:rounded-[34px]"
            />
          ) : (
            <div className="h-56 rounded-2xl bg-slate-900 md:h-[520px]" />
          )}
        </div>

        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-6 md:px-6 md:py-10 lg:grid-cols-[240px_minmax(0,780px)_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-6">
              <div className="border-t border-slate-300 pt-6 text-sm text-slate-500">
                <p className="font-black text-slate-950">Article Brief</p>
                <p className="mt-3 leading-6">{article.title}</p>
              </div>

              {headings.length > 0 && (
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-700">
                    Contents
                  </p>

                  <div className="mt-4 space-y-3 text-sm">
                    {headings.map((heading) => (
                      <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        className={`block leading-5 text-slate-600 hover:text-cyan-700 ${
                          heading.level === 3 ? "pl-4" : "font-bold"
                        }`}
                      >
                        {heading.text}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>

          <div className="min-w-0 rounded-2xl bg-white px-5 py-2 text-slate-950 shadow-sm md:rounded-[32px] md:px-8 md:py-4">
            {headings.length > 0 && (
              <section className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 lg:hidden">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-700">
                  Contents
                </p>

                <div className="mt-4 space-y-3 text-sm">
                  {headings.map((heading) => (
                    <a
                      key={heading.id}
                      href={`#${heading.id}`}
                      className={`block leading-5 text-slate-700 hover:text-cyan-700 ${
                        heading.level === 3 ? "pl-4" : "font-bold"
                      }`}
                    >
                      {heading.text}
                    </a>
                  ))}
                </div>
              </section>
            )}

            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="mb-5 mt-10 text-3xl font-black leading-tight tracking-[-0.03em] text-slate-950 md:text-4xl">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => {
                  const text = getTextFromChildren(children);
                  return (
                    <h2
                      id={slugify(text)}
                      className="scroll-mt-28 mb-4 mt-10 text-2xl font-black leading-tight tracking-[-0.025em] text-slate-950 md:mt-14 md:text-3xl"
                    >
                      {children}
                    </h2>
                  );
                },
                h3: ({ children }) => {
                  const text = getTextFromChildren(children);
                  return (
                    <h3
                      id={slugify(text)}
                      className="scroll-mt-28 mb-3 mt-8 text-xl font-bold tracking-[-0.02em] text-slate-950 md:text-2xl"
                    >
                      {children}
                    </h3>
                  );
                },
                p: ({ children }) => (
                  <p className="mb-5 text-[16px] leading-8 text-slate-700 md:text-[19px] md:leading-9">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="mb-6 ml-5 list-disc space-y-2 text-[16px] leading-8 text-slate-700 md:text-[19px] md:leading-9">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="mb-6 ml-5 list-decimal space-y-2 text-[16px] leading-8 text-slate-700 md:text-[19px] md:leading-9">
                    {children}
                  </ol>
                ),
                li: ({ children }) => <li>{children}</li>,
                strong: ({ children }) => (
                  <strong className="font-black text-slate-950">
                    {children}
                  </strong>
                ),
              }}
            >
              {article.content}
            </ReactMarkdown>

            <section className="mt-10 overflow-hidden rounded-2xl bg-[#07111f] text-white md:mt-16 md:rounded-[32px]">
              <div className="grid gap-0 md:grid-cols-[220px_1fr]">
                <div className="relative h-64 bg-slate-950 md:h-auto md:min-h-[280px]">
                  <img
                    src="/images/mustafa-author.png"
                    alt="Mustafa Alzaidi"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-6 md:p-10">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
                    About the Author
                  </p>

                  <h3 className="mt-4 text-3xl font-black tracking-[-0.04em] md:text-4xl">
                    Mustafa Alzaidi
                  </h3>

                  <p className="mt-2 text-sm font-bold text-cyan-200">
                    Cybersecurity Engineering Student · Technology Writer
                  </p>

                  <p className="mt-5 text-sm leading-7 text-slate-300 md:text-base md:leading-8">
                    Mustafa Alzaidi is a Cybersecurity Engineering student focused
                    on cybersecurity careers, security awareness, AI, programming,
                    and practical digital tools.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <Link
                      href="/"
                      className="rounded-full bg-cyan-300 px-4 py-2 text-xs font-black text-slate-950 transition hover:bg-white"
                    >
                      Portfolio
                    </Link>

                    <a
                      href="https://www.linkedin.com/in/mostafa-mohammed-hamzah-bb4870354/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/15 px-4 py-2 text-xs font-black text-white transition hover:bg-white/10"
                    >
                      LinkedIn
                    </a>

                    <a
                      href="https://github.com/Reoiraqiman"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/15 px-4 py-2 text-xs font-black text-white transition hover:bg-white/10"
                    >
                      GitHub
                    </a>

                    <Link
                      href="/contact"
                      className="rounded-full border border-white/15 px-4 py-2 text-xs font-black text-white transition hover:bg-white/10"
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
          <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-16">
            <h2 className="text-2xl font-black tracking-[-0.03em] text-slate-950 md:text-3xl">
              Related articles
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/articles/${item.slug}`}
                  className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-950 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-700">
                    {item.category}
                  </p>
                  <h3 className="mt-3 text-lg font-black leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
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