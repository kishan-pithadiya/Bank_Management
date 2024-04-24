import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomeroperationComponent } from './customeroperation/customeroperation.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { GetAllCustomerComponent } from './get-all-customer/get-all-customer.component';
import { GetCustomerByIdComponent } from './get-customer-by-id/get-customer-by-id.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { GetCustomerWithAccountComponent } from './get-customer-with-account/get-customer-with-account.component';
import { myGuard } from '../MyAuth/my.guard';


@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,RouterModule.forChild([
      {path: '', component: CustomeroperationComponent,
    children: [
        {path: 'addcust', component: AddCustomerComponent},
        {path: 'getallcust', component: GetAllCustomerComponent},
        {path: 'getcustbyid', component: GetCustomerByIdComponent},
        {path: 'updatecust/:id', component: UpdateCustomerComponent},
        {path: 'getcustwithaccount/:id', component: GetCustomerWithAccountComponent}
      ],canActivate:[myGuard]
    }
    ])
  ],

})
export class CustomerModule { }
