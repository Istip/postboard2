import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

const manifestIcons = [
  {
    src: "192.png",
    sizes: "192x192",
    type: "image/png",
  },
  {
    src: "512.png",
    sizes: "512x512",
    type: "image/png",
  },
];

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Postboard - Manage your stuff efficiently",
        short_name: "Postboard",
        icons: manifestIcons,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
