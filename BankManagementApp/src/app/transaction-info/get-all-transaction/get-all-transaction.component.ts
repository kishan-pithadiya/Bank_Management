import { Component, OnDestroy, OnInit } from '@angular/core';
import { TransactionInfoService } from '../../Services/transaction-info.service';
import { Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';
import { ITransactionInfo } from '../ITransactionInfo';

@Component({
  selector: 'app-get-all-transaction',
  templateUrl: './get-all-transaction.component.html',
  styleUrl: './get-all-transaction.component.scss'
})
export class GetAllTransactionComponent implements OnInit,OnDestroy{
  private sub! : Subscription;
  transdata:ITransactionInfo[];
  error:string = "";

    constructor(private transactionserve : TransactionInfoService){}

    getalltransData(){
      this.sub = this.transactionserve.getalltrans().subscribe(
        (response) => {
          this.transdata = response;
          console.log(this.transdata);
        },
        (error) => {
          this.error = error.Message;
        }
      )
     }

     ngOnInit(): void {
       this.getalltransData();
     }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

