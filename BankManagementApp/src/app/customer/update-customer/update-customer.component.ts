import { Component,OnInit,OnDestroy, Inject} from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomerService } from '../../Services/customer.service';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { dobValidator } from '../ValidatorCustomer/DOBvalidator';
import { FetchCountryNamesService } from '../../Services/fetch-country-names.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { formatDate } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import { IGetcust } from '../IGetcust';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.scss'
})
export class UpdateCustomerComponent implements OnInit,OnDestroy {

  private sub! : Subscription ; 
  error! : String;
  show_hide:boolean = false
  id: number
  
  countryNames: string[] = [];

  customerIdToUpdate!: number;

  updateForm: FormGroup = new FormGroup({
    custId: new FormControl('',[Validators.required])
  })

  constructor(private custserve: CustomerService , private fetchcountry: FetchCountryNamesService, private route: ActivatedRoute, private router:Router,@Inject(LOCALE_ID) public local:string){}
 
  body: IGetcust = {
    customerId:0,
    customerFirstName : "",
    customerLastName: "",
    customerDateOfBirth : "",
    customerEmail: "",
    customerPincode: "",
    customerCountry: "",
    customerAdharNumber : "" 
  } 

  userForm: FormGroup = new FormGroup({
    customerFirstName : new FormControl("",[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
    customerLastName: new FormControl("",[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
    customerDateOfBirth : new FormControl("",[Validators.required, dobValidator()]),
    customerEmail: new FormControl("",[Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
    customerPincode: new FormControl("",[Validators.required,Validators.pattern(/^[0-9]{6}$/)]),
    customerCountry: new FormControl("",[Validators.required]),
    customerAdharNumber : new FormControl("",[Validators.required,Validators.pattern(/^[0-9]{12}$/)]) 
  });
   
  UpdatingCustomer(){ 
    const body= this.userForm.value
    console.log(this.updateForm.value)
    this.sub = this.custserve.updatecust(this.id,body).subscribe(
     (response) => {
      console.log(response);
      alert("Customer Updated Successfully!")
      this.router.navigate(['/customer/getallcust'])
     },
     (error:HttpErrorResponse) => {
       console.log(error.error)
      }
    )
 }

 ngOnInit(): void {
   this.route.params.subscribe(
    params => {
      this.id = +params['id'];
    }
   )
  
    this.fetchcountry.fetchcountryname().subscribe(
    (countries)=>
    {
      this.countryNames = countries.map((country:any)=>country.name);
    },
    (error)=>
    {
      console.error('Error fetching country',error)
    }
  )   

   this.custserve.getcustbyid(this.id).subscribe(
        (data)=>
        { 
           this.body=data 
           this.userForm.get('customerFirstName').setValue(this.body.customerFirstName);
           this.userForm.get('customerLastName').setValue(this.body.customerLastName); 
           this.userForm.get('customerDateOfBirth').setValue(formatDate(this.body.customerDateOfBirth,"yyyy-MM-dd",this.local)); 
           this.userForm.get('customerEmail').setValue(this.body.customerEmail); 
           this.userForm.get('customerPincode').setValue(this.body.customerPincode); 
           this.userForm.get('customerCountry').setValue(this.body.customerCountry); 
           this.userForm.get('customerAdharNumber').setValue(this.body.customerAdharNumber);   
        },
        (error:HttpErrorResponse)=>{
          if(error){
            this.router.navigate(['/**']);
           }
        }
  
      )

   
  
 }

 ngOnDestroy(): void {
  if(this.sub){
   this.sub.unsubscribe();
  }
 }
}
