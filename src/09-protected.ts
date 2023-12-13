export abstract class Animal {
  constructor(protected name:string){} // -> Se accede internamente y los herederos, pero no desde afuera

  move(){
    console.log('Moving along!')
  }

  greeting(){
    return `Hello, I'm ${this.name}`
  }
}

export class Dog extends Animal {

  constructor(
    name:string, // -> No se define propiedad, simplemente se lo pasa al padre
    public owner: string,
  ) {
    super(name);
  }

  woof(times:number): void{
    for (let index = 0; index < times; index++) {
      console.log(`woof!, I'm ${this.name}`);

    }
  }

  move() { // -> Polimorfismo
    console.log('moving as a dog')
    super.move()
  }
}



const cheis = new Dog('cheis', 'nico');
cheis.woof(1)
cheis.move()

