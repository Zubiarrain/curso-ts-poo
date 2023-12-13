export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
} // -> Todo va a ser publico

class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  disconnect(): void {
    // code
  }
  isConnected(name: string): boolean {
    return true
  }

  connect(): void {
      //code
  }
}
