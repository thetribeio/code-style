module.exports = {
    extends: [
        require.resolve('@thetribe/eslint-config-react'),
        require.resolve('@thetribe/eslint-config-typescript'),
    ],
    rules: {
        // Add tsx to allowed extensions
        'import/extensions': ['error', 'ignorePackages', {
            cjs: 'never',
            js: 'never',
            jsx: 'never',
            mjs: 'never',
            ts: 'never',
            tsx: 'never',
        }],
        'react/jsx-filename-extension': ['error', {
            extensions: ['.jsx', '.tsx'],
        }],
    },
    settings: {
        'import/extensions': [
            '.cjs',
            '.js',
            '.jsx',
            '.mjs',
            '.ts',
            '.tsx',
        ],
    },
};
