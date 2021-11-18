module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:nuxt/recommended',
        'prettier'
    ],
    plugins: [
    ],
    // add your custom rules here
    rules: {
        indent: ['error', 4],
        semi: ['error', 'never'],
        'max-len': 'off',
        'eol-last': ['error', 'always'],
        'no-shadow': 'off',
        'no-param-reassign': 'off',
        'vue/no-multiple-template-root': 'off'
    }
}
