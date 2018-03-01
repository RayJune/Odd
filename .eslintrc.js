module.exports = {
  "env": {
      "browser": true
  },
  "parser": "babel-eslint",
  "extends": "airbnb",
  "rules": {
      "no-underscore-dangle": 0,
      "react/prop-types": 0,
      "no-use-before-define": ["error", { "functions": false, "classes": true }],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      // "no-param-reassitign": 0
  },
  "plugins": [
      "import"
  ]
};
