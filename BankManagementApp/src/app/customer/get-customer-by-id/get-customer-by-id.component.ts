import { Subscription} from 'rxjs';
import { CustomerService } from '../../Services/customer.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IGetcust } from '../IGetcust';




@Component({
  selector: 'app-get-customer-by-id',
  templateUrl: './get-customer-by-id.component.html',
  styleUrl: './get-customer-by-id.component.scss'
})
export class GetCustomerByIdComponent implements OnDestroy {

    constructor(private custserve: CustomerService, private route: ActivatedRoute, private router: Router){}
    
    private sub! : Subscription ; 
    error! : String;
    customerIdToGet!: number;
    custData : IGetcust;

    
    getcustbyId(){
      this.sub = this.custserve.getcustbyid(this.customerIdToGet).subscribe(
        (response) =>
        {
          this.custData = response;
          console.log(this.custData);
        },
        (error) =>
        {
          this.error = error.Message;  
        }
      )
    }

    navigateTocustOperation(): void {
      this.router.navigate(['/customer/getcustbyid/',this.customerIdToGet]);
    }

    
    
    ngOnDestroy(): void {
      if(this.sub){
      this.sub.unsubscribe();
      }
    }
}
