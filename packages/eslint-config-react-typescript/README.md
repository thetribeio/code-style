# theTribe eslint config for React and TypeScript

## Installation

```sh
yarn add --dev @thetribe/eslint-config-react-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

## Configuration

```json
// .eslintrc.json

{
    "root": true,
    "extends": "@thetribe/eslint-config-react-typescript",
    "parserOptions": {
        "project": "./tsconfig.json"
    }
}
```
