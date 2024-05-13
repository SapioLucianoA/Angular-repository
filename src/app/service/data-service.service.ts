import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Transaction } from '../models/transactions.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  
  constructor(private httpCLient:HttpClient) {}
  
  CargarTransaction(): Observable<any> {
    return this.httpCLient.get('https://my-economic-app-default-rtdb.firebaseio.com/transaction.json');
  }
  guardarTransactions(transactions: Transaction[]){
    this.httpCLient.put('https://my-economic-app-default-rtdb.firebaseio.com/transaction.json', transactions).subscribe(
      response => {
        console.log("Respuesta:" + response);
      },  
      error =>{
        alert("Error:" + error )
      }
    )
  }
  
  eliminarTansaction(index: number){
    let url: string;
    url= 'https://my-economic-app-default-rtdb.firebaseio.com/transaction/'+ index +'.json';
    this.httpCLient.delete(url).subscribe(
      response =>{
        console.log('repuesta:', response)
      },
      error => {
        alert(error)
      }
    )

  }

}
