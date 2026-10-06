import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import svgLoader from "vite-svg-loader";
import { fileURLToPath, URL } from "node:url";

import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { publishedPosts } from "./src/blog/posts.js";
import { SITE, LOCALES } from "./src/i18n/locales.js";

const today = new Date().toISOString().slice(0, 10);
const homePaths = Object.values(LOCALES).map((l) => l.path);

const sitePages = () => [
  ...homePaths.map((path) => ({ path, lastmod: today })),
  ...(publishedPosts.length
    ? [
        { path: "/blog/", lastmod: publishedPosts[0].date },
        ...publishedPosts.map((p) => ({ path: `/blog/${p.slug}/`, lastmod: p.date })),
      ]
    : []),
];

export default defineConfig({
  plugins: [vue(), eslintPlugin(), svgLoader()],
  ssgOptions: {
    dirStyle: 'nested',     // /kontakty → dist/kontakty/index.html (проще для хостинга)
    formatting: 'minify',
    includedRoutes: () => [
      ...homePaths,
      "/blog/",
      ...publishedPosts.map((p) => `/blog/${p.slug}/`),
      "/404",
    ],
    onFinished(dir) {
      const urls = sitePages()
        .map(({ path, lastmod }) =>
          `  <url>\n    <loc>${SITE}${path}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ""}\n  </url>`)
        .join("\n");
      writeFileSync(
        resolve(dir, "sitemap.xml"),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      );
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/variables.scss";'
      },
    },
  },
})

// import { defineConfig } from "vite";
// import { fileURLToPath, URL } from "node:url";
// import vue from "@vitejs/plugin-vue";
// import eslintPlugin from "vite-plugin-eslint";
// import svgLoader from "vite-svg-loader";

// export default defineConfig({
//   server: {
//     port: 8080,
//   },
//   base: "/",
//   plugins: [vue(), eslintPlugin(), svgLoader()],
//   resolve: {
//     alias: {
//       "@": fileURLToPath(new URL("./src", import.meta.url)),
//     },
//   },
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: '@import "@/assets/scss/variables.scss";'
//       },
//     },
//   },
// });
