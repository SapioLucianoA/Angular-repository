import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FormularyComponent } from './formulary/formulary.component';
import { IncomesComponent } from './incomes/incomes.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { TransactionService } from './service/transaction.service';
import { DataServiceService } from './service/data-service.service'
import { HeaderComponent } from './header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Transaction } from './models/transactions.model';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    FormularyComponent,
    IncomesComponent,
    ExpensesComponent,
    HeaderComponent,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    TransactionService,
    DataServiceService,
    HttpClient,
  ]
})
export class AppComponent implements OnInit {
  constructor(private transactionService: TransactionService, private dataService: DataServiceService, private httpCLient: HttpClient) {
  }
  ngOnInit(): void {
    this.transactionService.ObtenerTransactions().subscribe((transactions: Transaction[]) => {
      this.transactionService.AllTransactions = transactions;
      
      this.transactionService.setTransactions(transactions); 
    });
  }
  getBudget(): number {
    let totalBudget = 0;
    let totalTransactions = this.transactionService.AllTransactions;
    totalTransactions.forEach((transaction) => {
      totalBudget += transaction.value;
    });
    return totalBudget;
  }
  
  getTotalIncomes(){
    let totalIncomes = 0;
    let totalTransaction = this.transactionService.getIncomes();
    totalTransaction.forEach(transaction =>{
      totalIncomes += transaction.value;
    });
    return totalIncomes;    
  }
  getTotalExpenses(){
    let totalExpenses = 0;
    let totalTransactions = this.transactionService.getExpenses();
    totalTransactions.forEach(transaction =>{ 
      totalExpenses += transaction.value;
  });
    return totalExpenses;
  }
  getPorcentageTotal(){
    return (((this.getTotalExpenses() / this.getTotalIncomes()) * 100) * -1).toFixed(1);
  }
  getAllExpenses(){
    return this.transactionService.AllTransactions.filter(transaction => transaction.value < 0)
  }
  getAllIncomes(){
    return this.transactionService.AllTransactions.filter(transaction => transaction.value > 0)
  }
  deleteTransaction(index: number){
    this.dataService.eliminarTansaction
  }
}
