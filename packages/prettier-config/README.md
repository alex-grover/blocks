# @alex-grover/prettier-config

A shareable [Prettier](https://prettier.io) configuration.

## Installation

```sh
bun install --dev --exact prettier @alex-grover/prettier-config
```

## Usage

Add the following entries to your `package.json`:

```json
{
  "scripts": {
    "check:format": "prettier . --check --cache",
    "fix:format": "prettier . --write --cache"
  },
  "prettier": "@alex-grover/prettier-config"
}
```
