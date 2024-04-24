import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccountService } from '../../Services/account.service';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.scss'
})
export class DepositComponent implements OnDestroy{
  constructor(private accserve: AccountService){}
  sub: Subscription;
  error: "";
  accnumber: number;
  amount: number;
  accTypeId: number;

  depositForm: FormGroup = new FormGroup({
    accnumber: new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{12}$/)]),
    accTypeId: new FormControl('',[Validators.required]),
    amount: new FormControl('',[Validators.required,Validators.min(1)])
  })

  depositmoney(){
    const obj = this.depositForm.value;
    this.sub = this.accserve.deposite(obj.accnumber,obj.amount,obj.accTypeId).subscribe(
      (response)=>
      {
        console.log(response);
        alert("Money Deposit Successfully!");
      },
      (error:HttpErrorResponse)=>
      {
        if(error.status == 400){
          alert("Sorry Can Not Deposit...Check Your AccountType And AccountNumber!");
        }
      }

    )
  }

  
  ngOnDestroy(): void {
    if(this.sub){
    this.sub.unsubscribe();
    }
  }

}
