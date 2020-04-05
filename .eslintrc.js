module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  "rules": {
    "padding-line-between-statements": [
      "error",
      {
        "blankLine": "always",
        "prev": "*",
        "next": "return"
      },
      {
        "blankLine": "always",
        "prev": "block-like",
        "next": "*"
      },
      {
        "blankLine": "always",
        "prev": "*",
        "next": "block-like"
      },
      {
        "blankLine": "always",
        "prev": "*",
        "next": "block-like"
      },
      {
        "blankLine": "always",
        "prev": [
          "const",
          "let",
          "var"
        ],
        "next": "*"
      },
      {
        "blankLine": "any",
        "prev": [
          "const",
          "let",
          "var"
        ],
        "next": [
          "const",
          "let",
          "var"
        ]
      },
      {
        "blankLine": "always",
        "prev": "function",
        "next": "function"
      }
    ],
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "import/extensions": [
      "error",
      {
        "js": "never",
        "jsx": "never"
      }
    ],
    "no-console": "error",
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1
      }
    ],
    "prefer-destructuring": [
      "error",
      {
        "object": true,
        "array": false
      }
    ],
    "no-use-before-define": [
      "error",
      {
        "functions": false
      }
    ],
    "no-underscore-dangle": 0,
    "lines-between-class-members": [
      "error",
      "always"
    ],
    "implicit-arrow-linebreak": 0,
    "arrow-parens": 0,
    "jsx-a11y/label-has-for": 0,
    "no-debugger": 1,
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "max-len": [
      "error",
      120,
      2,
      {
        "ignoreUrls": true,
        "ignoreComments": false,
        "ignoreRegExpLiterals": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }
    ],
    "no-mixed-operators": 0,
    "no-confusing-arrow": 0,
    "no-param-reassign": [
      2,
      {
        "props": false
      }
    ],
    "import/no-extraneous-dependencies": 0,
    "react/sort-comp": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-fragments": 0,
    "no-array-constructor": 0,
    "import/prefer-default-export": 0,
    "linebreak-style": 0,
  },
};
