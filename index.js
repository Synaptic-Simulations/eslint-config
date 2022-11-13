module.exports = {
    extends: 'airbnb',
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react-hooks', 'react', 'jsx-a11y', 'import'],
    rules: {
        'arrow-parens': ['error', 'always'],
        'brace-style': ['error', '1tbs', { allowSingleLine: false }],
        'class-methods-use-this': 'off',
        'curly': ['error', 'multi-line'],

        'import/no-extraneous-dependencies': ['error', { devDependencies: false }],
        'import/no-relative-parent-imports': 'error',
        'import/prefer-default-export': 'off',
        'import/order': ['error', {
            'groups': [
                'index',
                'sibling',
                'parent',
                'internal',
                'external',
                'builtin',
                'object',
                'type'
            ]
        }],

        'indent': ['error', 4],
        'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.tsx'] }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': 'off',
        'no-restricted-syntax': 'off',
        'quote-props': ['error', 'consistent-as-needed'],
        'strict': ['error', 'global'],

        'object-curly-newline': ['error', { multiline: true, consistent: true }],
        'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
        'object-shorthand': ['error'],

        'no-case-declarations': 'off',

        'no-plusplus': 'off',
        'no-shadow': 'off',
        'no-continue': 'off',
        'radix': 'off',

        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_',
        }],

        'no-use-before-define': 'off',
        'react/no-unused-state': 'off',

        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'react/no-unused-prop-types': 'off',
        'react/destructuring-assignment': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/no-unescaped-entities': 'off',

        'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
        'react/jsx-handler-names': ['error', {
            eventHandlerPrefix: 'on|handle',
            eventHandlerPropPrefix: 'on',
            checkLocalVariables: true,
        }],

        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',

        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',

        'import/extensions': 'off',
        'no-param-reassign': 'off',
        'no-undef-init': 'off',
        'max-len': ['error', { code: 192 }],

        'import/no-unresolved': 'off',
        'no-undef': 'off',
        'no-nested-ternary': 'off',
        'linebreak-style': 'off',
        'no-underscore-dangle': 'off',
        'react/jsx-one-expression-per-line': 'off',

        '@typescript-eslint/consistent-type-definitions': 'error',
        '@typescript-eslint/member-delimiter-style': ['error', { singleline: { delimiter: 'comma' } }],
        'indent': ['error', 4, { SwitchCase: 1 }],
        'default-case': 'off',
    }
}