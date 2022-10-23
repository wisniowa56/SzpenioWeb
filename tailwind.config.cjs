const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,svelte,html}"],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#1d4ed8",

					secondary: "#34d399",

					accent: "#92400e",

					neutral: "#3b82f6",

					"base-100": "#f5f5f4",

					info: "#292524",

					success: "#84cc16",

					warning: "#f59e0b",

					error: "#dc2626"
				}
			}
		]
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")]
};
