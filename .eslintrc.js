module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: "vuetify",
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    quotes: "off",
    "comma-dangle": "off",
    semi: "off",
    "vue/script-indent": "off",
    "vue/max-attributes-per-line": "off",

    "vue/html-closing-bracket-newline": "off",
    "space-before-function-paren": "off",
    "vue/html-indent": "off",
    "no-prototype-builtins": "off",
  },
  parserOptions: {
    parser: "babel-eslint",
  },
};
