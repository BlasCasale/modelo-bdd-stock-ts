module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:node/recommended',
  ],
  rules: {
    "quotes": "off",
    "@typescript-eslint/quotes": "error",
    "no-conditional-assignment": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        "checksConditionals": false
      }
    ]
  }
}