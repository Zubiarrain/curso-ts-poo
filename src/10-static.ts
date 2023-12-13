class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]): number {
    if (numbers.length === 0){
      return 0
    }
    return numbers.reduce((max,item) => max >= item ? max : item);
  }
}


//MyMath.PI = 3.14159 -> Error
console.log(MyMath.PI) // -> No tengo que crear instancias
console.log(MyMath.max(1,2,5,4,8))
console.log(MyMath.max(-4,-5,-1))
