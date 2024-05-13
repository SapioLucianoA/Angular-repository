import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../models/transactions.model';
import { CommonModule } from '@angular/common';
import { TransactionService } from '../service/transaction.service';

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css'
})
export class ExpensesComponent {

  constructor(private transactionService: TransactionService){}
  
  getBudget(): number {
    let totalBudget = 0;
    let totalTransactions = this.transactionService.getIncomes();
    totalTransactions.forEach((transaction) => {
      totalBudget += transaction.value;
    });
    return totalBudget;
  }
  obtenerIndex(id: string){
    let index:number;
    index = this.transactionService.AllTransactions.findIndex(transaction => transaction.id == id)
    console.log(index)
    this.transactionService.deleteTransaction(index);
  }
  @Input() expenses:Transaction[]; 
}
