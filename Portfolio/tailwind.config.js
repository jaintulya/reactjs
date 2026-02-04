/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: "#030014", // Deep space black
                primary: "#7045ff", // Electric Violet
                secondary: "#00f0ff", // Cyan Neon
                accent: "#f700ff", // Magenta Neon
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['Fira Code', 'monospace'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
            animation: {
                'spin-slow': 'spin 20s linear infinite',
            },
        },
    },
    plugins: [],
}
