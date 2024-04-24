import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAccount } from '../account/IAccount';
import { IAddAccount } from '../account/IAddAccount';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private addaccUrl = "https://localhost:7102/api/Account/CreateAccount";
  private getallaccUrl = "https://localhost:7102/api/Account/GetAllAccount";
  private getaccbyidUrl = "https://localhost:7102/api/Account/GetAccountById";
  private deleteaccUrl = "https://localhost:7102/api/Account/DeleteAccount";
  private withdrawUrl = "https://localhost:7102/api/Account/WithdrawMoney";
  private depositeUrl = "https://localhost:7102/api/Account/DepositMoney";

  constructor(private http: HttpClient) { }

  addacc(body: IAddAccount):Observable<String>{
    return this.http.post(this.addaccUrl,body,{responseType:'text'});
  }

  getallacc():Observable<IAccount[]>{
    return this.http.get<IAccount[]>(this.getallaccUrl);
  }

  getaccbyid(accId:number):Observable<IAccount>{
    return this.http.get<IAccount>(`${this.getaccbyidUrl}?accountId=${accId}`);
  }

  deleteacc(accId:number):Observable<String>{
    return this.http.delete(`${this.deleteaccUrl}?accountId=${accId}`,{responseType:'text'});
  }

  withdraw(accnumber:number, amount:number, accTypeId:number):Observable<String>{
    return this.http.post(`${this.withdrawUrl}?accountnumber=${accnumber}&amount=${amount}&AccountTypeId=${accTypeId}`,null,{responseType:'text'});
  }

  deposite(accnumber:number, amount:number, accTypeId:number):Observable<String>{
    return this.http.post(`${this.depositeUrl}?accountnumber=${accnumber}&amount=${amount}&AccountTypeId=${accTypeId}`,null,{responseType:'text'});
  }
}
