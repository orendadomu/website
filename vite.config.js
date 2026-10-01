import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import svgLoader from "vite-svg-loader";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [vue(), eslintPlugin(), svgLoader()],
  ssgOptions: {
    dirStyle: 'nested',     // /kontakty → dist/kontakty/index.html (проще для хостинга)
    formatting: 'minify',
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
