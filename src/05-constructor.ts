export class MyDate {

  constructor(
    public year:number = 1993,
    public month:number = 7,
    private day:number = 2
  ){} // -> Me ahorro definirlo dos veces pero debo ser explicito

  printFormat(): string {
    const day = this.addPadding(this.day)
    const month = this.addPadding(this.month)
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) { // -> Solo se usa internamente
    if (value < 10){
      return `0${value}`
    }
    return `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years'){
    if (type === 'days'){
      this.day += amount
    } else if (type === 'months'){
      this.month += amount
    } else if (type === 'years'){
      this.year += amount
    }
  }
}

const myDate = new MyDate();
console.log(myDate.printFormat())
