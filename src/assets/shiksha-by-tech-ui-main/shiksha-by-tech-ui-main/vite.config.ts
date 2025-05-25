// import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vitest/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@routes": resolve(__dirname, "src/routes"),
      "@api": resolve(__dirname, "src/apiActions"),
      "@forms": resolve(__dirname, "src/forms"),
      "@config": resolve(__dirname, "src/config"),
      "@queries": resolve(__dirname, "src/queries"),
      "@interfaces": resolve(__dirname, "src/interfaces"),
      "@enums": resolve(__dirname, "src/interfaces"), // alias reused intentionally
      "@services": resolve(__dirname, "src/services"),
      "@types": resolve(__dirname, "src/types"),
      "@utils": resolve(__dirname, "src/utils"),
      "@store": resolve(__dirname, "src/store"),
      "@constants": resolve(__dirname, "src/constants"),
      "@context": resolve(__dirname, "src/context"),
      "@components": resolve(__dirname, "src/components"),
      "@layouts": resolve(__dirname, "src/layouts"),
      "@pages": resolve(__dirname, "src/pages"),
      "@hooks": resolve(__dirname, "src/hooks"),
      "@features": resolve(__dirname, "src/features"),
      "@assets": resolve(__dirname, "src/assets"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/setup.ts",
  },

  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "https://localhost:7038", // your real backend API URL
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },
});
