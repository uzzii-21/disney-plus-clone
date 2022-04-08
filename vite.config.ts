import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: true,
  },
  css: {
    postcss: {
      plugins: [
        {
          postcssPlugin: "internal:charset-removal",
          AtRule: {
            charset: (atRule) => {
              if (atRule.name === "charset") {
                atRule.remove();
              }
            },
          },
        },
      ],
    },
  },
  resolve: {
    alias: {
      assets: resolve(__dirname, "./src/assets"),
      components: resolve(__dirname, "./src/components"),
      pages: resolve(__dirname, "./src/pages"),
      context: resolve(__dirname, "./src/context"),
      "firebase.config": resolve(__dirname, "./src/firebase.config.ts"),
    },
  },
  plugins: [react()],
});
