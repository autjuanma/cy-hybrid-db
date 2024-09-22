module.exports = {
  // Extend a popular ESLint configuration (e.g., Airbnb)
  extends: 'airbnb-base',

  // Plugins
  plugins: {
    cypress: {}, // Initialize the Cypress plugin with an empty object
  },

  // Language options
  languageOptions: {
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    globals: {
      node: true,
      browser: true, // Add browser environment for Cypress
    },
  },

  // Rules
  rules: {
    // Best Practices
    'no-console': 'off', // Allow console logs in Cypress tests
    'no-debugger': 'off', // Allow debugger statements in Cypress tests
    'no-unused-vars': 'warn', // Warn about unused variables
    'no-undef': 'error', // Disallow undefined variables

    // Errors
    'no-await-in-loop': 'error', // Disallow await in loops
    'no-extra-bind': 'error', // Disallow unnecessary bind calls
    'no-implicit-globals': 'error', // Disallow implicit global variables
    'no-invalid-this': 'error', // Disallow invalid this usage
    'no-loop-func': 'error', // Disallow function declarations in loops
    'no-return-assign': 'error', // Disallow assignments in return statements
    'no-return-await': 'error', // Disallow await in return statements
    'no-unused-expressions': 'error', // Disallow unused expressions
    'no-useless-concat': 'error', // Disallow useless string concatenation

    // Stylistic Issues
    'array-callback-return': 'error', // Disallow missing return statements in array callbacks
    'consistent-return': 'error', // Disallow inconsistent return statements
    'func-name-matching': 'error', // Disallow mismatched function names
    'func-names': 'error', // Disallow anonymous function names
    'linebreak-style': ['error', 'unix'], // Enforce Unix-style line breaks
    'max-len': ['error', 100], // Enforce a maximum line length of 100 characters
    'no-multiple-empty-lines': 'error', // Disallow multiple empty lines
    'no-nested-ternary': 'error', // Disallow nested ternary expressions
    'no-ternary': 'off', // Allow ternary expressions
    'object-curly-newline': ['error', { consistent: true }], // Enforce consistent object curly newline style
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }], // Enforce consistent object property newline style
    'quote-props': ['error', 'consistent-as-needed'], // Enforce consistent quote style for object properties
    'quotes': ['error', 'single'], // Enforce single quotes for strings
    'require-jsdoc': 'off', // Allow missing JSDoc comments
    'semi': ['error', 'always'], // Enforce semicolons at the end of statements
    'space-before-function-paren': ['error', 'never'], // Disallow space before function parentheses
  },
};