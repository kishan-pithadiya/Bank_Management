import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccountService } from '../../Services/account.service';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.scss'
})
export class WithdrawComponent implements OnDestroy{
  constructor(private accserve: AccountService){}
  sub: Subscription;
  error: "";
  accnumber: number;
  amount: number;
  accTypeId: number;

  withdrawForm: FormGroup = new FormGroup({
    accnumber: new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{12}$/)]),
    accTypeId: new FormControl('',[Validators.required]),
    amount: new FormControl('',[Validators.required,Validators.min(1)])
  })

  withdrawmoney(){
    const obj = this.withdrawForm.value;
    this.sub = this.accserve.withdraw(obj.accnumber,obj.amount,obj.accTypeId).subscribe(
      (response)=>
      {
        console.log(response);
        alert("Money Withdraw Successfully!");
      },
      (error)=>
      {
        if(error.status == 400){
          alert("Can't Withdraw Money, Check Your Balance Or Account!");
        }
        if(error.status == 500){
          alert("Can't Withdraw Money, Check Your Balance Or Account!");
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
