import { Injectable } from "@angular/core";
import { Transaction } from "../models/transactions.model";
import { DataServiceService } from "./data-service.service";




@Injectable({
  providedIn: 'root',
})
export class TransactionService  {
  AllTransactions: Transaction[] = [];
  constructor(private dataService: DataServiceService ){}
  

  setTransactions(transactions: Transaction[]){
    this.AllTransactions = transactions;
  }

  ObtenerTransactions(){
    return this.dataService.CargarTransaction();
  }
  
  
  getIncomes(): Transaction[] {
    return this.AllTransactions.filter(
      (transaction) => transaction.value > 0)
  }
  getExpenses(): Transaction[] {
    return this.AllTransactions.filter(
      (transaction) => transaction.value < 0)
  }
  encontrarIndice(id:any){
    let index:number;
    index = this.AllTransactions.findIndex(transaction => transaction.id === id);
    return index;
  } 

  deleteTransaction(index: number){
    this.AllTransactions.splice(index,1);
    this.dataService.eliminarTansaction(index);
    this.modificarTransactions();
  }
  modificarTransactions(){
    if(this.AllTransactions != null){
      this.dataService.guardarTransactions(this.AllTransactions)
    }
  }
  crearid(){
    let id:string;
    let num1:number = Math.floor(Math.random() * (5000 - 1 + 1)) + 1;
    let num2:number = Math.floor(Math.random() * (5000 - 1 + 1)) + 1;
    let num3:number = Math.floor(Math.random() * (5000 - 1 + 1)) + 1;
    let num4:number = Math.floor(Math.random() * (5000 - 1 + 1)) + 1;
    let num5:number = Math.floor(Math.random() * (5000 - 1 + 1)) + 1;

    return id = num1+ "-" + num2 + "-" + num3 + "-" + num4 + "-" +  num5; 
  }
}
