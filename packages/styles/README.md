# @alex-grover/styles

Opinionated base stylesheets.

## Installation

To install in a Next.js project (replaces the builtin PostCSS config):

```sh
bun install @alex-grover/styles
bun install --dev postcss-preset-env @csstools/postcss-global-data
```

## Usage

Add the following entry to your `package.json`:

```json
{
  "postcss": {
    "plugins": [
      [
        "@csstools/postcss-global-data",
        {
          "files": ["node_modules/@alex-grover/styles/media.css"]
        }
      ],
      [
        "postcss-preset-env",
        {
          "autoprefixer": {
            "flexbox": "no-2009"
          },
          "stage": 3,
          "features": {
            "custom-media-queries": true,
            "custom-properties": false
          }
        }
      ]
    ]
  }
}
```

Import `reset.css` from your root layout:

```tsx
// app/layout.tsx
import '@alex-grover/styles/reset.css'
```
