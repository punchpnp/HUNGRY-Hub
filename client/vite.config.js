// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// //vitejs.dev/config/
// // export default defineConfig({
// //   plugins: [react()],
// // })

// https: export default defineConfig({
//   plugins: [react()],
//   css: {
//     postcss: {
//       plugins: [require("tailwindcss"), require("autoprefixer")],
//     },
//   },
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import VitePluginWindiCSS from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePluginWindiCSS()],
});
