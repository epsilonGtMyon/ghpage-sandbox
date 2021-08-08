import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  base: "/ghpage-sandbox/",
  server: {
    open: true,
  },
  build: {
    outDir: "docs",
  },
});
