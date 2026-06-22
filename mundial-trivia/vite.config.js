import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// "base: './'" usa rutas relativas en el build, necesario para que los
// recursos (JS/CSS) carguen correctamente dentro del WebView de Capacitor.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
