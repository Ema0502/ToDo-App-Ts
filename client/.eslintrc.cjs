module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "prettier"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "plugins": [
        "react"
    ],  
    "rules": {
        "ts/indent": "error",
        "@typescript-eslint/no-unused-vars": ["warn"],
        "import/order": ["error", {"newlines-between": "always"}],
        // Disable rules that conflict with prettier
        "quotes": ["error", "single"],
        "react/prop-types": "off"
    }
}
