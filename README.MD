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

## Clase 6: Constructor

El `constructor` es donde construimos las propiedades de la clase y mandamos los parámetros por defecto por el cual queremos que se inicialice la instancia de un objeto.

### Sintaxis anterior

```tsx
class ClassName {
	property1: dataType;
	p1ropertyN: dataType;

	constructor (property1: number, propertyN: string) {
		this.proterty1 = property1;
		this.protertyN = propertyN;
	}
}
```

### Sintaxis en TypeScript

De esta forma estaríamos definiendo y asignando las propiedades de una manera corta.

Debemos ser explícitos con el **scope** de las propiedades (*añadir si es `public` o `private`*), de lo contrario no funcionaria esta característica de TypeScript, además que no podremos usar esa propiedad a lo largo de la clase, ya que su scope solo se verá limitado al mismo constructor.

```tsx
class ClassName {
	constructor (
		public property1: number,
		private propertyN: string
	) {
		statements
	}
}
```

### Valores por defecto

Al tener valores por defecto, al momento de crear una instancia de esa clase ya no es obligatorio pasar ese parámetro.

```tsx
classClassName {
	constructor (
		public property1: number = 7,
		private propertyN: string = 'something'
	) {
		statements
	}
}
```

## clase 7: Getters

Con `get` tenemos acceso a una propiedad y metodos con un scope privado. Se conocen tambien como **variables computadas**, ya que puede tomar propiedades y metodos para retornar un algo nuevo (*siempre deben retornar algo*) y luego obtener ese valor como una propiedad mas de la instancia, pero no podemos modificarlos o mutarlos.

```tsx
class ClassName {
	constructor () {
			statements
	}

	get variableComputed() {
		statements
		return something;
	}
}
```

## Clase 8: Setters

Es parecido a getters, solo que este **no retorna nada**, es un método void, pero no hace falta colocarle lo que retorna, ya que va a dar error.

A `set` lo podemos usar para tener reglas de modificación para nuestros parámetros.

```tsx
classClassName {
	constructor() {
		statements
	}

	set methodName() {
		statements
	}
}
```

# **POO Avanzada**

## Clase 9: Herencia

Las propiedades y métodos de una clase son heredadas por otra para evitar la redundancia de código. Se hace la herencia con la palabra reservada `extends`, seguido de la clase padre.

```tsx
class FatherClass {
	constructor (properties) {
		statemenst
	}

	MethodsFather () { ... }
}

class ChildClass extends FatherClass {
	constructor (properties) {
		super(properties)
		statemenst
	}

	MethodsChild () { ... }
}
```

### Super

Es una palabra reservada para llamar las propiedades y métodos de la clase padre.

```tsx
// llama al método constructor del objeto padre.
super(properties);

// llama cualquier otro método del objeto padre.
super.functionOnParent(arguments);
```

Al usar esta palabra reservada en el constructor de la clase hija, estamos invocando al constructor de la clase padre.

## Clase 10: Acceso restringido

Básicamente, es la forma de heredar propiedades y métodos, se usa la palabra reservada `protected`.

Es similar a como funciona una propiedad o método privado, pero nos permite realizar herencia.

```tsx
class FatherClass {
	constructor(
		protected property1: string,
		propertyN: number
	) {
		statemenst
	}
}

class ChildClass extends FatherClass {
	constructor (properties and Inheritedproperties) {
		super(InheritedProperties)
		statemenst
	}
}
```

## Clase 11: Static

Este tipo de métodos **no requieren crear una instancia**, sino que se pueden ejecutar directamente sobre la clase:

```tsx
class Animal {
  static readonly despedirse() {
    return "Adiós";
  }

  hablar() {
    return "Cuak";
  }
}

Animal.despedirse();   // Método estático (no requiere instancia): 'Adiós'
Animal.hablar();       // Uncaught TypeError: Animal.hablar is not a function

const pato = new Animal();  // Creamos una instancia

pato.despedirse();     // Uncaught TypeError: pato.despedirse is not a function
pato.hablar();         // Método no estático (requiere instancia): 'Cuak'
```

## Clase 12: Interfaces

Las interfaces en clases funcionan como **contratos**, nos permiten tipar tanto los atributos como los métodos.

Aquí no podemos utilizar **encapsulamiento**, por defecto todos los atributos y métodos son **públicos**.

### Implements

Tiene la misma sintaxis cuando aplicamos herencias en las clases, pero `implements` no es una herencia, es un contrato que nos dice que nuestra clase tiene que cumplir con un estándar, que es la interface.

Este contrato es tanto como para los parámetros como para los métodos.

```tsx
interface NameInterface {
	statements
}

class NameClass implements NameInterface {
	constructor (
		propertiesOfInterface
	) {
		statements
	}

	methodOfInterface (): string { statements }
}
```

#
