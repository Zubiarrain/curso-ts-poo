# Fundamentos de POO

## Clase 2: Class

- JavaScript es un lenguaje orientado a objetos, pero está basado en **prototipos**.
- Las clases son una sintaxis más **amigable** para trabajar con objetos, las clases internamente son prototipos.
- La utilizamos para construir **instancias de objetos**, es como un molde para crear cosas.

```tsx
class MyDate {
  year: number
  month: number
  day: number

  constructor(year: number, month: number, day: number) {
    this.year = year
    this.month = month
    this.day = day
  }
}
```

#
