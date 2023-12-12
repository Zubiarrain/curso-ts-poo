export class MyDate {
  public year:number;
  public month:number;
  public day:number;

  constructor(year:number, month:number, day:number) {
    this.year = year
    this.month = month
    this.day = day
  }

  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
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

const myDate = new MyDate(1993, 7, 9);
myDate.day = 8
console.log(myDate.day)

