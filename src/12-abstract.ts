import { Animal, Dog } from "./09-protected";


//const animal = new Animal('elite'); -> Falla por ser clase abstracta
//animal.greeting();

const cheis = new Dog('cheis', 'nico');
cheis.woof(1);
