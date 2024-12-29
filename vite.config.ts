import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Creates alias '@' for the 'src' directory
    },
  },
  base: "/ifi_web/", // GitHub Pages base path
  // server: {
  //   host: "0.0.0.0", // Enable access to the server from outside the container
  //   port: 5173, // Ensure the port is set to 5173 (default)
  // },
});
