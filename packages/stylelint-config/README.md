# @alex-grover/stylelint-config

A shareable [Stylelint](https://stylelint.io) configuration.

## Installation

```sh
bun install --dev stylelint @alex-grover/stylelint-config stylelint-config-standard stylelint-config-css-modules stylelint-config-recess-order
```

## Usage

Add the following entries to your `package.json`:

```json
{
  "scripts": {
    "check:styles": "stylelint ./**/*.css --cache --cache-location node_modules/.cache",
    "fix:styles": "stylelint ./**/*.css --fix --cache --cache-location node_modules/.cache"
  },
  "stylelint": {
    "extends": "@alex-grover/stylelint-config"
  }
}
```
