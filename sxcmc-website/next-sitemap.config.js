const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://sxcmc.vercel.app",
	generateRobotsTxt: true,
	additionalPaths: async (config) => {
    const docsDir = path.resolve(__dirname, "wiki");
    const files = fs.readdirSync(docsDir);
    const mdFiles = files.filter(file => file.endsWith(".md"));

    return mdFiles.map(file => {
      const filePath = path.join(docsDir, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);
      
      const lastmod = new Date(data.date).toISOString();

      return {
        loc: `/wiki/${file.replace(".md", "")}`,
        lastmod,
        priority: 0.7,
      };
    });
  },
}