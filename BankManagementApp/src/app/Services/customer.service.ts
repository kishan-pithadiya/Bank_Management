import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { IGetcust } from '../customer/IGetcust';
import { IAddcust } from '../customer/IAddCust';
import { IGetCustWithAcc } from '../customer/IGetCustWithAcc';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
private getcustUrl = "https://localhost:7102/api/Customer/GetAllCustomers";
private addcustUrl = "https://localhost:7102/api/Customer/CreateCustomer";
private deletecustUrl = "https://localhost:7102/api/Customer/DeleteCustomer";
private updatecustUrl = "https://localhost:7102/api/Customer/UpdateCustomer";
private getcustByidUrl = "https://localhost:7102/api/Customer/GetCustomerById";
private getcustWithaccUrl = "https://localhost:7102/api/Customer/GetCustomerWithAccountDetails";
  
constructor(private http: HttpClient) { }

  getcust():Observable<IGetcust[]>{
    return this.http.get<IGetcust[]>(this.getcustUrl);
  }

  addcust(body:IAddcust):Observable<String>{
    return this.http.post(this.addcustUrl,body,{responseType:'text'});
  }

  deletecust(custId:number):Observable<String>{
    return this.http.delete(`${this.deletecustUrl}?customerId=${custId}`,{responseType:'text'});
  }

  updatecust(custid:number,body:IGetcust):Observable<String>{
    return this.http.put(`${this.updatecustUrl}?customerId=${custid}`,body,{responseType:'text'})
  }

  getcustbyid(custID:number):Observable<IGetcust>{
    return this.http.get<IGetcust>(`${this.getcustByidUrl}?customerId=${custID}`);
  }

  getcustwithacc(custid:number):Observable<IGetCustWithAcc[]>{
    return this.http.get<IGetCustWithAcc[]>(`${this.getcustWithaccUrl}?customerId=${custid}`)
  }

}





