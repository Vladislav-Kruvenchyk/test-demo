// eslint-disable-next-line no-undef
// eslint-disable
// eslint-disable-next-line
// eslint-disable-next-line vue/no-side-effects-in-computed-properties
module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    'eslint:recommended',
    // 'plugin:vue/vue3-recommended',
    'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
  rules: {
    // override/add rules settings here, such as:
    'vue/no-unused-vars': 'error',
    'vue/no-arrow-functions-in-watch': 'error',
    "vue/html-indent": ["error", 4, {
      "attribute": 1,
      "baseIndent": 1,
      "closeBracket": 0,
      "alignAttributesVertically": true,
      "ignores": []
    }]
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
}