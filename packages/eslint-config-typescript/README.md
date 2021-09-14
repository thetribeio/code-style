# theTribe eslint config for TypeScript

## Installation

```sh
yarn add --dev @thetribe/eslint-config-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import
```

## Configuration

```json
// .eslintrc.json

{
    "root": true,
    "extends": "@thetribe/eslint-config-typescript",
    "parserOptions": {
        "project": "./tsconfig.json"
    }
}
```
