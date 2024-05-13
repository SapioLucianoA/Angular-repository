import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../models/transactions.model';
import { CommonModule } from '@angular/common';
import { TransactionService } from '../service/transaction.service';

@Component({
  selector: 'app-incomes',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './incomes.component.html',
  styleUrl: './incomes.component.css'
})
export class IncomesComponent {

  constructor(private transactionService: TransactionService) {} 
    
  @Input() incomes: Transaction[];

  obtenerIndex(id: string){
    let index:number;
    index = this.transactionService.AllTransactions.findIndex(transaction => transaction.id == id)
    console.log(index)
    this.transactionService.deleteTransaction(index);
  }
}

