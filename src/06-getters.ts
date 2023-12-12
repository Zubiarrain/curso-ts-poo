export class MyDate {

  constructor(
    public year:number = 1993,
    public month:number = 7,
    private _day:number = 2
  ){} // -> Me ahorro definirlo dos veces pero debo ser explicito

  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
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
      this.month += amount;
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
}

const myDate = new MyDate();
console.log(myDate.printFormat());

//myDate.day = 5 -> No puedo modificarla
myDate.day; // -> Puedo obtenerla


const myDate2 = new MyDate(2000);
console.log('2000',myDate2.isLeapYear)

const myDate3 = new MyDate(2001);
console.log('2001',myDate3.isLeapYear)
