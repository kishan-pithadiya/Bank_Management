import { Subscription} from 'rxjs';
import { CustomerService } from '../../Services/customer.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IGetCustWithAcc } from '../IGetCustWithAcc';


@Component({
  selector: 'app-get-customer-with-account',
  templateUrl: './get-customer-with-account.component.html',
  styleUrl: './get-customer-with-account.component.scss'
})
export class GetCustomerWithAccountComponent implements OnInit, OnDestroy {

  constructor(private custserve: CustomerService, private route: ActivatedRoute,private router:Router){}

    private sub! : Subscription ; 
    error! : String;
    customerId!: number;
    custDataWithacc : IGetCustWithAcc[];

    getcustwithacc(){
      this.sub = this.custserve.getcustwithacc(this.customerId).subscribe(
        (response) =>
        {
          this.custDataWithacc = response;
          console.log(this.custDataWithacc);
        },
        (error) =>
        {
          this.router.navigate(['/**']); 
        }
      )
    }
    
ngOnInit(): void {
  this.route.params.subscribe(
    params => {
      this.customerId = +params['id'];
    }
   )
   this.getcustwithacc();
}
 
    ngOnDestroy(): void {
      if(this.sub){
        this.sub.unsubscribe();
      }
     
    }

}
