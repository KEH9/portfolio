module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/destructuring-assignment": ["error", 'never'],
        "react/prop-types": [0],
        "react/jsx-first-prop-new-line": [0],
        "react/jsx-one-expression-per-line": [0],
        "linebreak-style": [0],
        "react/jsx-no-bind": [0],
        "no-plusplus": [0],
        "jsx-a11y/no-noninteractive-element-interactions": [0],
        "jsx-a11y/click-events-have-key-events": [0],

    }
};