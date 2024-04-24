import { Component, OnDestroy, OnInit, NgModule } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { AccountService } from '../../Services/account.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { IAddAccount } from '../IAddAccount';



@Component({
  selector: 'app-addaccount',
  templateUrl: './addaccount.component.html',
  styleUrl: './addaccount.component.scss'
})


export class AddaccountComponent {
  sub: Subscription;
  error: "";

  constructor(private accserve: AccountService){}

  accountForm: FormGroup = new FormGroup({
    customerId: new FormControl('',[Validators.required]),
    accountTypeId: new FormControl('',[Validators.required]),
    accountBalance: new FormControl('',[Validators.required,Validators.min(0)])
  })

  

  addaccount():void{
    const obj:IAddAccount = this.accountForm.value
    // obj.accountTypeId = parseInt(obj.accountTypeId);
    this.sub = this.accserve.addacc(obj).subscribe(
      (response)=>
      {
          console.log(obj);
          alert("Account created successfully!");
      },
      (error : HttpErrorResponse) => {
        if(error.status == 500){
          alert("Customer Id Does Not Exist!");
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




  

