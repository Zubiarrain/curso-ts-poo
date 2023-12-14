import { Dog } from "./09-protected";


function getValue<T>(value: T) {
  const array: T[] = [value];
  return value;
}

getValue<number>(15).toFixed();
getValue<string>('12').length;

getValue<Dog>(new Dog('fifi','nico')).woof(1)
