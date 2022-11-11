/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        colors: {
            tropical: '#d4d8f0',
            ebony: '#232946',
            mirage: '#121629',
            white: '#fffffe',
            blue: '#b8c1ec',
            pink: '#eebbc3',
        },
        extend: {},
    },
    plugins: [],
}
