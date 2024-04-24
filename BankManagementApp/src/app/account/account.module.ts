import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccountoperationComponent } from './accountoperation/accountoperation.component';
import { AddaccountComponent } from './addaccount/addaccount.component';
import { GetallaccountComponent } from './getallaccount/getallaccount.component';
import { GetaccountbyidComponent } from './getaccountbyid/getaccountbyid.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { DepositComponent } from './deposit/deposit.component';
import { myGuard } from '../MyAuth/my.guard';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,RouterModule.forChild([
      {path: '', component: AccountoperationComponent,
    children: [
        {path: 'addaccount', component: AddaccountComponent},
        {path: 'getallaccount', component: GetallaccountComponent},
        {path: 'getaccountbyid', component: GetaccountbyidComponent},
        {path: 'withdraw', component: WithdrawComponent},
        {path: 'deposit', component: DepositComponent}
      ],canActivate:[myGuard]
    }]),
    ReactiveFormsModule
  ]
})
export class AccountModule { }
