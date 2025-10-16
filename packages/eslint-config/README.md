# @alex-grover/eslint-config

A shareable [ESLint](https://eslint.org) configuration.

## Installation

```sh
bun install --dev eslint @alex-grover/eslint-config @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-import eslint-import-resolver-typescript eslint-plugin-css-modules
```

## Usage

Add the following entry to your `eslint.config.ts`:

```ts
import config from '@alex-grover/eslint-config'

export default config
```

### Usage with Next.js

Next.js' default ESLint config uses `eslint-plugin-import`, which conflicts with this config. To merge the configs:

```ts
import config from '@alex-grover/eslint-config'

export default defineConfig([
  // ...
  ...config.map((entry) =>
    entry.plugins
      ? {
          ...entry,
          plugins: Object.fromEntries(
            Object.entries(entry.plugins).filter(([name]) => name !== 'import'),
          ),
        }
      : entry,
  ),
])
```
