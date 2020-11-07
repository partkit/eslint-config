module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: ['./tsconfig.json'],
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    rules: {
        /**
         * eslint rules
         */
        'array-bracket-newline': [
            'error',
            'consistent',
        ],
        'array-bracket-spacing': 'error',
        'arrow-spacing': 'error',
        'block-spacing': 'error',
        'comma-dangle': [
            'error',
            'always-multiline',
        ],
        'comma-style': 'error',
        'function-call-argument-newline': [
            'error',
            'consistent',
        ],
        'function-paren-newline': [
            'error',
            'multiline-arguments',
        ],
        'key-spacing': 'error',
        'linebreak-style': 'error',
        'no-multi-spaces': 'error',
        'no-new-wrappers': 'error',
        'no-var': 'error',
        'object-curly-newline': 'error',
        'object-curly-spacing': [
            'error',
            'always',
        ],
        'object-property-newline': [
            'error',
            {
                'allowAllPropertiesOnSameLine': true,
            },
        ],
        'object-shorthand': 'error',
        'operator-linebreak': [
            'error',
            'before',
        ],
        'rest-spread-spacing': 'error',
        'space-before-blocks': 'error',
        'space-in-parens': 'error',
        'space-infix-ops': 'error',
        'space-unary-ops': [
            'error',
            {
                'words': true,
                'nonwords': false,
            },
        ],
        'spaced-comment': 'error',
        'template-curly-spacing': [
            'error',
            'always',
        ],
        'template-tag-spacing': 'error',

        /**
         * eslint-plugin-import rules
         */
        'sort-imports': 'off',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-cycle': 'error',
        'import/order': [
            'error',
            {
                'alphabetize': {
                    'order': 'asc',
                },
                'groups': [
                    'builtin',
                    'external',
                    'parent',
                    'sibling',
                    'index',
                ],
                'newlines-between': 'never',
            },
        ],

        /**
         * @typescript-eslint rules
         */
        'brace-style': 'off',
        '@typescript-eslint/brace-style': [
            'error',
            '1tbs',
            {
                'allowSingleLine': true,
            },
        ],
        'comma-spacing': 'off',
        '@typescript-eslint/comma-spacing': 'error',
        'func-call-spacing': 'off',
        '@typescript-eslint/func-call-spacing': [
            'error',
            'never',
        ],
        'indent': 'off',
        '@typescript-eslint/indent': [
            'error',
            4,
        ],
        'keyword-spacing': 'off',
        '@typescript-eslint/keyword-spacing': 'error',
        'lines-between-class-members': 'off',
        '@typescript-eslint/lines-between-class-members': 'error',
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        'quotes': 'off',
        '@typescript-eslint/quotes': [
            'error',
            'single',
        ],
        'semi': 'off',
        '@typescript-eslint/semi': 'error',
        'space-before-function-paren': 'off',
        '@typescript-eslint/space-before-function-paren': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
    },
};
