const eslintConfig = require('@thetribe/eslint-config');

module.exports = {
    extends: 'airbnb',
    rules: {
        // We don't use extends to prevent airbnb-base from overriding some config from airbnb
        ...eslintConfig.rules,
        'jsx-a11y/anchor-is-valid': ['error', {
            components: ['Link'],
            specialLink: ['to'],
            aspects: ['noHref', 'invalidHref', 'preferButton'],
        }],
        'jsx-quotes': ['error', 'prefer-double'],
        'react/function-component-definition': ['error', {
            namedComponents: 'arrow-function',
            unnamedComponents: 'arrow-function',
        }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-no-useless-fragment': 'error',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-sort-default-props': 'error',
        'react/jsx-sort-props': ['error', {
            reservedFirst: true,
            shorthandLast: true,
        }],
        'react/require-default-props': 'off',
        'react/sort-prop-types': 'error',
    },
};
