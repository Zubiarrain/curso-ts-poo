export class MyService {

  static instance: MyService | null = null;

  private constructor (private _name: string){}

  getName(){
    return this._name;
  }

  static create(name:string) {
    if (MyService.instance === null){
      console.log('Creo única instancia')
      MyService.instance = new MyService(name)
    }
    return MyService.instance;
  }
}


/* const myService = new MyService('service 1');
console.log(myService.getName())

const myService2 = new MyService('service 2');
console.log(myService2.getName())

console.log(myService === myService2) */

const myService = MyService.create('service 1')
console.log(myService.getName())

const myService2 = MyService.create('service 2');
console.log(myService2.getName())

console.log(myService === myService2)
