module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier", "react-app", "plugin:react/recommended"],
  plugins: ["prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: "2021",
    sourceType: "module",
  },
  ecmaFeatures: {
    "jsx": true
  },
  rules: {
    "prettier/prettier": "error",
  },
};
