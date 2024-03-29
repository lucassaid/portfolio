module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        '@typescript-eslint'
    ],
    'rules': {
        'react/react-in-jsx-scope': 'off',
        'semi': ['error', 'never'],
        'quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    }
}
