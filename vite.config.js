import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/yes-tom-boda/",   // <--- NOMBRE DE TU REPO EXACTO
  plugins: [react()],
});
