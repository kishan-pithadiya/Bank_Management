import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { GetAllCustomerComponent } from './customer/get-all-customer/get-all-customer.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { FormsModule } from '@angular/forms';
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';
import { GetCustomerByIdComponent } from './customer/get-customer-by-id/get-customer-by-id.component';
import { CustomeroperationComponent } from './customer/customeroperation/customeroperation.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GetCustomerWithAccountComponent } from './customer/get-customer-with-account/get-customer-with-account.component';
import { GetallaccountComponent } from './account/getallaccount/getallaccount.component';
import { GetaccountbyidComponent } from './account/getaccountbyid/getaccountbyid.component';
import { AddaccountComponent } from './account/addaccount/addaccount.component';
import { AccountoperationComponent } from './account/accountoperation/accountoperation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WithdrawComponent } from './account/withdraw/withdraw.component';
import { DepositComponent } from './account/deposit/deposit.component';
import { GetCustomerTransactionComponent } from './transaction-info/get-customer-transaction/get-customer-transaction.component';
import { GetAllTransactionComponent } from './transaction-info/get-all-transaction/get-all-transaction.component';
import { TransactionOperationComponent } from './transaction-info/transaction-operation/transaction-operation.component';
import { RouterOutlet } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    GetAllCustomerComponent,
    AddCustomerComponent,
    UpdateCustomerComponent,
    GetCustomerByIdComponent,
    CustomeroperationComponent,
    HomeComponent,
    PageNotFoundComponent,
    GetCustomerWithAccountComponent,
    GetallaccountComponent,
    GetaccountbyidComponent,
    AddaccountComponent,
    AccountoperationComponent,
    WithdrawComponent,
    DepositComponent,
    GetAllTransactionComponent,
    TransactionOperationComponent,
    GetCustomerTransactionComponent,
    AuthenticationComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
