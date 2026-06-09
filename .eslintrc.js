module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'space-infix-ops': 0,
    'react/jsx-curly-newline': 0,
    'no-multiple-empty-lines': 0,
    'react/function-component-definition': 0,
    'import/extensions': 0,
    'react/prop-types': 0,
    'linebreak-style': 0,
    'react/state-in-constructor': 0,
    'import/prefer-default-export': 0,

    'import/no-cycle': 0,
    'import/order': 0,

    'no-unused-vars': 0,
    'no-param-reassign': 0,
    'no-confusing-arrow': 0,
    'no-multi-spaces': 0,

    'arrow-body-style': 0,
    'implicit-arrow-linebreak': 0,
    'operator-linebreak': 0,
    'function-paren-newline': 0,

    'comma-dangle': 0,
    'comma-spacing': 0,

    'eol-last': 0,

    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-indent': 0,
    'react/jsx-closing-tag-location': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-boolean-value': 0,

    'react/destructuring-assignment': 0,
    'react/no-array-index-key': 0,
    'react/no-unescaped-entities': 0,
    'react/self-closing-comp': 0,

    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/label-has-associated-control': 0,

    'max-len': [
      2,
      550,
    ],

    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '_d',
          '_dh',
          '_h',
          '_id',
          '_m',
          '_n',
          '_t',
          '_text',
        ],
      },
    ],

    'object-curly-newline': 0,

    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to', 'hrefLeft', 'hrefRight'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
  },
};