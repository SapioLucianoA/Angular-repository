import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ControlContainer, FormsModule } from '@angular/forms';
import { TransactionService } from '../service/transaction.service';
import { Transaction } from '../models/transactions.model';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-formulary',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './formulary.component.html',
  styleUrl: './formulary.component.css'
})
export class FormularyComponent {
  descriptionInput:string;
  valueInput:number;
  id:string
  constructor(private transactionService: TransactionService, private dataService: DataServiceService){}
  trasnsactionNew:Transaction;
  newTransaction(){
    do{
      this.id = this.transactionService.crearid();
    }while(this.transactionService.AllTransactions.some(transaction => transaction.id === this.id))

    this.trasnsactionNew = new Transaction(this.descriptionInput, this.valueInput, this.id);
    this.transactionService.AllTransactions.push(this.trasnsactionNew)
    this.descriptionInput = "";
    this.valueInput=null;
    this.dataService.guardarTransactions(this.transactionService.AllTransactions)
  }
}
