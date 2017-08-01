module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "es6": true,
  },
  "rules": {
    "comma-dangle": 0,
    "no-console": [2, { allow: ["warn", "error"] }],
    "max-len": [2, 100],
    "linebreak-style": 0
  },
};