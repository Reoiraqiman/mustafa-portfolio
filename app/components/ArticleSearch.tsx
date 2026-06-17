"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  author: string;
  image: string;
};

export default function ArticleSearch({ articles }: { articles: Article[] }) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();

    if (!q) return [];

    return articles.filter((article) =>
      `${article.title} ${article.description} ${article.category}`
        .toLowerCase()
        .includes(q)
    );
  }, [query, articles]);

  return (
    <section className="mx-auto max-w-7xl px-4 pb-4 md:px-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
          <span className="text-xs font-black uppercase tracking-[0.18em] text-cyan-700">
            Search
          </span>

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search cybersecurity, AI, certifications..."
            className="w-full bg-transparent text-sm font-semibold text-slate-950 outline-none placeholder:text-slate-400"
          />
        </div>

        {query && (
          <div className="mt-4">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              {results.length} result{results.length === 1 ? "" : "s"} found
            </p>

            <div className="max-h-[420px] overflow-y-auto rounded-xl border border-slate-200">
              {results.length > 0 ? (
                results.slice(0, 8).map((article) => (
                  <Link
                    key={article.slug}
                    href={`/articles/${article.slug}`}
                    className="block border-b border-slate-200 bg-white p-4 transition last:border-b-0 hover:bg-slate-50"
                  >
                    <p className="text-[11px] font-black uppercase tracking-[0.18em] text-cyan-700">
                      {article.category}
                    </p>

                    <h3 className="mt-2 text-base font-black leading-tight text-slate-950">
                      {article.title}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
                      {article.description}
                    </p>
                  </Link>
                ))
              ) : (
                <div className="p-5 text-sm font-semibold text-slate-500">
                  No articles found.
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}