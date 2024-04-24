import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITransactionInfo } from '../transaction-info/ITransactionInfo';


@Injectable({
  providedIn: 'root'
})
export class TransactionInfoService {

  constructor(private http: HttpClient) { }

 getalltransUrl = "https://localhost:7102/api/TransactionInfo/GetAllTransactionInfo";
 getcusttransUrl = "https://localhost:7102/api/TransactionInfo/GetCustomerTransactionInfo";

 getalltrans():Observable<ITransactionInfo[]>{
  return this.http.get<ITransactionInfo[]>(this.getalltransUrl);
 }

 getcusttrans(custId:number, accId:number):Observable<ITransactionInfo[]>{
    return this.http.get<ITransactionInfo[]>(`${this.getcusttransUrl}?custId=${custId}&accId=${accId}`);
 }
}
