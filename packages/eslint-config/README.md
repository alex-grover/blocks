# @alex-grover/eslint-config

A shareable [ESLint](https://eslint.org) configuration.

## Installation

```sh
pnpm i -D eslint @alex-grover/eslint-config @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier
```

## Usage

Add the following entry to your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@alex-grover",
    "parserOptions": {
      "project": true
    }
  }
}
```
