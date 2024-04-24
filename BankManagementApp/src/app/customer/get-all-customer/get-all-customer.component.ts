import { Component,OnInit ,OnDestroy} from '@angular/core';
import { CustomerService } from '../../Services/customer.service';
import { Subscription } from 'rxjs';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { IGetcust } from '../IGetcust';


@Component({
  selector: 'app-get-all-customer',
  templateUrl: './get-all-customer.component.html',
  styleUrl: './get-all-customer.component.scss'
})
export class GetAllCustomerComponent implements OnInit{
  private sub! : Subscription;
  custdata:IGetcust[];
  error:string = "";
    constructor(private custserve : CustomerService , private router: Router){} 

    navigatetoupdate(custid:number){
      this.router.navigate(['/customer/updatecust',custid])
    }

    navigatetogetcustwithaccount(custid:number){
      this.router.navigate(['/customer/getcustwithaccount',custid])
    }
     
    
    getcustData(){
      this.sub = this.custserve.getcust().subscribe(
        (response) => {
          this.custdata = response;
          console.log(this.custdata);
        },
        (error) => {
          this.error = error.Message;
        }
      )
     } 

     deletecustomer( customerIdToDelete: number){
      var flag = confirm(`Are You Sure Want To Delete Customer ${customerIdToDelete}?`);
      if(!flag){
        return;
      }
      this.sub = this.custserve.deletecust(customerIdToDelete).subscribe(
        (response) =>
        {       
          console.log(response);
          this.ngOnInit();
          // window.location.reload();
        },
        (error) =>
        {
          this.error = error.Message; 
          console.log(error);
        }
      )  
      
    }
  

     ngOnInit(): void {
       this.getcustData();
     }
  // ngOnDestroy(): void {
  //   this.sub.unsubscribe();
  // }
}
