# @alex-grover/stylelint-config

A shareable [Stylelint](https://stylelint.io) configuration.

## Installation

```sh
bun install --dev stylelint @alex-grover/stylelint-config stylelint-config-standard stylelint-config-css-modules stylelint-config-recess-order stylelint-gamut stylelint-plugin-use-baseline
```

## Usage

Add the following entries to your `package.json`:

```json
{
  "scripts": {
    "styles": "stylelint --cache --cache-location node_modules/.cache",
    "check:styles": "bun run styles ./**/*.css",
    "fix:styles": "bun run check:styles --fix"
  },
  "stylelint": {
    "extends": "@alex-grover/stylelint-config"
  }
}
```
