module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    extends: [
        "airbnb-typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:jest/recommended",
        "plugin:prettier/recommended",
    ],
    plugins: ["@typescript-eslint", "jest"],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module",
        project: ["./**/tsconfig.eslint.json", "./**/tsconfig.json"],
    },
    rules: {
        quotes: ["error", "double", { avoidEscape: true }],
        semi: ["error", "always"],
        // import and export rules
        // we want to have our project exports to be named (not default) unless necessary
        "import/prefer-default-export": "off",
        "import/no-default-export": "error",
        "sort-imports": "off",
        "import/order": "off",
        // standard extensions shouldn't be named with file extensions, but unusual ones (eg JS/css) should be.
        "import/extensions": [
            "error",
            {
                ts: "never",
                tsx: "never",
            },
        ],
        // linebreak settings - turn them off as windows git usually handles this
        "linebreak-style": "off",
        // react specific
        // prop type validation - doesn't play nicely with typescript, so let's disable it
        "react/prop-types": "off",
        // prefer destructuring but don't enforce it
        "react/destructuring-assignment": "warn",
        // react/no-array-index-key: we use this fairly often and it's sa
        "react/no-array-index-key": "error",
        // react/jsx-props-no-spreading - by default this is off, but Next uses it quite extensively
        "react/jsx-props-no-spreading": "error",
        // react/no-danger - by default this is warn -> made it error as we really shouldn't do this
        "react/no-danger": "error",
        //
        "react/require-default-props": "off",
        "react/no-unused-prop-types": "warn",
        // the way next handles their own link element is to wrap the link around an anchor tag
        "jsx-a11y/anchor-is-valid": "error",
        "no-underscore-dangle": "warn",
        "@typescript-eslint/explicit-module-boundary-types": "error",
        "@typescript-eslint/no-unused-vars": "error",
        "jest/expect-expect": [
            "error",
            {
                assertFunctionNames: ["expect", "request.**.expect"],
            },
        ],
        "class-methods-use-this": "warn",
    },
};
