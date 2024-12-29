import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import svgo from "vite-plugin-svgo"
import { createHtmlPlugin } from "vite-plugin-html"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgo(),
		createHtmlPlugin({
			minify: true, // Включение минимизации HTML
		}),
	],
	server: {
		port: 3000,
		open: true,
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: "modern",
			},
		},
	},
})
