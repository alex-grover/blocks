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
    "format": "prettier --cache",
    "check:format": "bun run format --check .",
    "fix:format": "bun run format --write ."
  },
  "prettier": "@alex-grover/prettier-config"
}
```
