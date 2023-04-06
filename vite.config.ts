import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
export default defineConfig(({ command, mode }) => {
  if (mode === "production") {
    return {
      plugins: [react()],
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "./src"),
        },
      },
      build: {
        outDir: "prodBuild",
      },
      base: "./",
    };
  } else {
    return {
      plugins: [react()],
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "./src"),
        },
      },
      server: {
        proxy: {
          "/api": {
            target: "http://localhost:9000",
            changeOrigin: true,
          },
        },
      },
    };
  }
});
