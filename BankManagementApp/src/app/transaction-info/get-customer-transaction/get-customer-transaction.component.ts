import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TransactionInfoService } from '../../Services/transaction-info.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ITransactionInfo } from '../ITransactionInfo';

@Component({
  selector: 'app-get-customer-transaction',
  templateUrl: './get-customer-transaction.component.html',
  styleUrl: './get-customer-transaction.component.scss'
})
export class GetCustomerTransactionComponent implements OnInit {

  private sub! : Subscription;
  transdata:ITransactionInfo[];
  custId: number;
  accId: number;
  error: string = "";

    constructor(private transactionserve : TransactionInfoService,private route:ActivatedRoute){}

    getcusttransData(){
      this.sub = this.transactionserve.getcusttrans(this.custId,this.accId).subscribe(
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
       this.route.params.subscribe(params=>
        {
          this.custId = +params['custid'];
          this.accId = +params['accid'];
        })

        this. getcusttransData();
     }

    
  ngOnDestroy(): void {
    if(this.sub){
      this.sub.unsubscribe();
    }
   
  }
}


