import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccountService } from '../../Services/account.service';
import { Router } from '@angular/router';
import { TransactionInfoService } from '../../Services/transaction-info.service';
import { IAccount } from '../IAccount';



@Component({
  selector: 'app-getallaccount',
  templateUrl: './getallaccount.component.html',
  styleUrl: './getallaccount.component.scss'
})
export class GetallaccountComponent implements OnInit{

  private sub! : Subscription;
  accdata:IAccount[];
  error:string = "";

    constructor(private accserve : AccountService, private route:Router){}

    getaccData(){
      this.sub = this.accserve.getallacc().subscribe(
        (response) => {
          this.accdata = response;
          console.log(this.accdata);
        },
        (error) => {
          this.error = error.Message;
        }
      )
     }

     
     deleteaccount(accId:number){
      var flag = confirm(`Are You Sure Want To Delete Account ${accId}?`);
      if(!flag){
        return;
      }
      this.sub = this.accserve.deleteacc(accId).subscribe(
        (response)=>
        {
          console.log(response);
          this.ngOnInit();
        },
        (error) =>
        {
          this.error = error.Message;  
        }
      )
    }

    navigatetotransactioninfo(custid:number,accid:number){
      this.route.navigate(['/transactioninfo/getcustomertransaction',custid,accid])
    }


     ngOnInit(): void {
       this.getaccData();
     }
  // ngOnDestroy(): void {
  //   this.sub.unsubscribe();
  // }
}
