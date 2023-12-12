export class Animal {
  constructor(public name:string){}

  move(){
    console.log('Moving along!')
  }

  greeting(){
    return `Hello, I'm ${this.name}`
  }
}

export class Dog extends Animal {

  constructor(
    public owner: string,
    name:string // -> No se define propiedad, simplemente se lo pasa al padre
  ) {
    super(name);
  }

  woof(times:number): void{
    for (let index = 0; index < times; index++) {
      console.log('woof!');

    }
  }
}


const fifi = new Animal('fifi');
fifi.move();
console.log(fifi.greeting());

const cheis = new Dog('cheis', 'nico');
cheis.move();
console.log(cheis.greeting());
cheis.woof(2);
console.log(cheis.owner);

