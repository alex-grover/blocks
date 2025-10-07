# @alex-grover/result

A simple `Result` type.

## Installation

```sh
bun install --dev @alex-grover/result
```

## Usage

```ts
import { err, ok, type Result } from '@alex-grover/result'

function divide(numerator: number, denominator: number): Result<number> {
  if (denominator === 0) return err('Cannot divide by 0')
  return ok(numerator / denominator)
}
```
