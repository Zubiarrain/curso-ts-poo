export class MyDate {

  constructor(
    public year:number = 1993,
    private _month:number = 7,
    private _day:number = 2
  ){} // -> Me ahorro definirlo dos veces pero debo ser explicito

  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this._month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) { // -> Solo se usa internamente
    if (value < 10){
      return `0${value}`;
    }
    return `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years'){
    if (type === 'days'){
      this._day += amount;
    } else if (type === 'months'){
      this._month += amount;
    } else if (type === 'years'){
      this.year += amount;
    }
  }

  get day() {
    return this._day;
  } // -> Todos los getters deben retornar algo

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  get month() {
    return this._month
  }

  set month(newMonth: number) {
    if (newMonth >=1 && newMonth <= 12){
      this._month = newMonth
    } else {
      throw new Error('Month out of range')
    }

  } // -> No retorna nada
}

const myDate = new MyDate();
console.log(myDate.printFormat());

myDate.month = 12;
console.log(myDate.printFormat());

myDate.month = 78;
console.log(myDate.printFormat());
