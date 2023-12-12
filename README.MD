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

## Clase 3: Métodos

Los metodos describen el **comportamiento** de los objetos, se les conoce tambien como **funciones**.

```tsx
class MyDate {
	// Code
	printFormat(): string {
    return `Año: ${this.year} Mes: ${this.month} Dia: ${this.day}`
  }
  add(amount: number, type: "days" | "months" | "years") {
    type === "days" ? this.day += amount : ''
    type === "months" ? this.month += amount : ''
    type === "years" ? this.year += amount : ''
  }
}

const myDate = new MyDate(2016, 6, 12);
myDate.printFormat();  // Año: 2016 Mes: 6 Dia: 12

myDate.add(6, "years");
myDate.printFormat();  // Año: 2022 Mes: 6 Dia: 12
```

## Clase 4: Acceso Público

El acceso publico nos permite **acceder** a las propiedades y métodos del objeto desde el exterior.

Por defecto, todas las propiedades y métodos son públicos pero si queremos hacerlo de manera explicita podemos utilizar la palabra reservada `public`.

```tsx
class MyDate {
  public year: number
  public month: number
  day: number

  constructor(year: number, month: number, day: number) {
    // Code
  }
	public printFormat(): string {
    // Code
  }
  add() {
    // Code
  }
}

const myDate = new MyDate(2016, 6, 12)

// Se pueden usar estos metodos fuera de la clase
myDate.add();
myDate.printFormat();
```

La desventaja de esto es que estás pueden ser accesibles y modificadas desde fuera de la clase.

## Clase 5: Acceso privado

Podemos **proteger** nuestras propiedades y métodos para que nos sean accedidos y modificados por fuera de clase.

Con la palabra reservada `private` o con `#` estamos restringiendo el acceso de nuestros parámetros y métodos, solo podrán ser accedidos o modificados dentro de la clase.

```tsx
class MyDate {
  // Code
  private day: number

  constructor(year: number, month: number, day: number) {
    // Code
  }
	#addPadding(value: number): string {
    if (value < 10) {
      return `0${value}`
    }

    return `${value}`
  }
  getDay(): number {
    return this.day
  }
	printFormat(): string {
    const day = this.#addPadding(this.day)
    const month = this.#addPadding(this.month)

    return `${this.year}/${month}/${day}`
  }
  add() {
    // Code
  }
}

const myDate = new MyDate(2016, 6, 12)

console.log(myDate.getDay());
console.log(myDate.printFormat());

// No se pueden acceder fuera de la clase
// myDate.day;
// myDate.#addPadding(12);
```

#
