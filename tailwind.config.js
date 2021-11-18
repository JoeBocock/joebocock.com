module.exports = {
    purge: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        colors: {
            main: {
                DEFAULT: '#d4d8f0',
                dark: '#232946',
            },
            button: {
                DEFAULT: '#eebbc3',
                dark: '#eebbc3',
            },
            title: {
                DEFAULT: '#232946',
                dark: '#fffffe'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
