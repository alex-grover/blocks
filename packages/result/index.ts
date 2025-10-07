type Ok<T> = {
  ok: true
  value: T
}

type Err<E> = {
  ok: false
  error: E
}

export type Result<T = undefined, E = string> = Ok<T> | Err<E>

export function ok(): Ok<undefined>
export function ok<T>(value: T): Ok<T>
export function ok<T>(value?: T) {
  return {
    ok: true,
    value,
  }
}

export function err<E>(error: E): Err<E> {
  return {
    ok: false,
    error,
  }
}
