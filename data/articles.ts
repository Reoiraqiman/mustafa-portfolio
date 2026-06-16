import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDirectory = path.join(process.cwd(), "content", "articles");

export function getAllArticles() {
  const files = fs.readdirSync(articlesDirectory);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(".md", "");
      const fullPath = path.join(articlesDirectory, file);
      const fileContent = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContent);

      return {
        slug,
        title: data.title || "Untitled Article",
        description: data.description || "",
        category: data.category || "Technology",
        date: data.date || "",
        author: data.author || "Mustafa Alzaidi",
        image: data.image || "",
      };
    });
}

export function getArticleBySlug(slug: string) {
  const fullPath = path.join(articlesDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContent = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || "Untitled Article",
    description: data.description || "",
    category: data.category || "Technology",
    date: data.date || "",
    author: data.author || "Mustafa Alzaidi",
    image: data.image || "",
    content,
  };
}