import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TransactionOperationComponent } from './transaction-operation/transaction-operation.component';
import { GetAllTransactionComponent } from './get-all-transaction/get-all-transaction.component';
import { GetCustomerTransactionComponent } from './get-customer-transaction/get-customer-transaction.component';
import { myGuard } from '../MyAuth/my.guard';

@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,RouterModule.forChild([
      {path: '', component: TransactionOperationComponent,
        children: [
          {path: 'getalltransaction', component: GetAllTransactionComponent},
          {path: 'getcustomertransaction/:custid/:accid', component: GetCustomerTransactionComponent}
        ],canActivate:[myGuard]
      }
    ])
  ]
})
export class TransactionInfoModule { }
