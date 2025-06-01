// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: "https://abdullahluay.dev", // Replace with your actual domain
	output: "static",
	compressHTML: true,
	build: {
		inlineStylesheets: "auto",
	},
	vite: {
		plugins: [tailwindcss()],
		build: {
			rollupOptions: {
				output: {
					manualChunks: undefined,
				},
			},
		},
	},
});
