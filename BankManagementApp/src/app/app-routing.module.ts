import { CommonModule } from '@angular/common';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { myGuard } from './MyAuth/my.guard';




const routes: Routes = [
    {path: '', component: HomeComponent,canActivate:[myGuard]},
    {path:'login',component:AuthenticationComponent},
    {path:'customer',loadChildren:()=>import('./customer/customer.module').then(m=>m.CustomerModule)},
    {path:'account',loadChildren:()=>import('./account/account.module').then(m=>m.AccountModule)},
    {path:'transactioninfo',loadChildren:()=>import('./transaction-info/transaction-info.module').then(m=>m.TransactionInfoModule)},
    {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
