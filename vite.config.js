import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: "3000",
  },
  resolve: {
    alias: [
      { find: "apis", replacement: "/src/apis" },
      { find: "assets", replacement: "/src/assets" },
      { find: "components", replacement: "/src/components" },
      { find: "constants", replacement: "/src/constants" },
      { find: "pages", replacement: "/src/pages" },
      { find: "utils", replacement: "/src/utils" },
    ],
  },
});
