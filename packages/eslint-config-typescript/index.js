module.exports = {
    extends: [
        require.resolve('@thetribe/eslint-config'),
        'plugin:import/typescript',
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
        // Replace base eslint rules with rules from typescript-eslint
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-unused-vars': ['error', {
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: true,
        }],
        '@typescript-eslint/no-use-before-define': ['error', {
            functions: true,
            classes: true,
            variables: true,
        }],
        'no-shadow': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        // Add ts to allowed extensions
        'import/extensions': ['error', 'ignorePackages', {
            cjs: 'never',
            js: 'never',
            mjs: 'never',
            ts: 'never',
        }],
        // Replace default-case with switch-exhaustiveness-check
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        'default-case': 'off',
        // Add rules that are only possible with typescript
        '@typescript-eslint/no-floating-promises': ['error'],
    },
    settings: {
        'import/extensions': [
            '.cjs',
            '.js',
            '.mjs',
            '.ts',
        ],
    },
};
