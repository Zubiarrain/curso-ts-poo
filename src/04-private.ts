export class MyDate {
  public year:number;
  public month:number;
  private day:number;

  constructor(year:number, month:number, day:number) {
    this.year = year
    this.month = month
    this.day = day
  }

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

const myDate = new MyDate(1993, 7, 10);
console.log(myDate.printFormat())
// myDate.addPadding() -> Error
// myDate.day = 8 -> Error
// console.log(myDate.day) -> Error

