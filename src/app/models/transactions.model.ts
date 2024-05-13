export class Transaction {
  value: number;
  description: string;
  id:string;

  constructor(description: string, value: number, id: string) {
    this.description = description;
    this.value = value;
    this.id = id;
  }
  
}