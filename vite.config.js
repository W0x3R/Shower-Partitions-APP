import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import svgo from "vite-plugin-svgo"
import svgr from "vite-plugin-svgr"
import { createHtmlPlugin } from "vite-plugin-html"

// https://vitejs.dev/config/
export default defineConfig({
	base: "/Shower-Partitions/",
	plugins: [
		react(),
		svgo(),
		svgr(),
		createHtmlPlugin({
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeAttributeQuotes: true,
			},
		}),
	],
	build: {
		outDir: "build",
		assetsDir: "assets",
		emptyOutDir: true,
		minify: "esbuild",
		target: ["es2015"],
		sourcemap: false,
		cssCodeSplit: true,
		rollupOptions: {
			treeshake: true,
		},
		cleanCssOptions: {
			level: 2,
		},
	},
	server: {
		port: 3000,
		open: true,
		host: "0.0.0.0",
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: "modern",
			},
		},
	},
})
