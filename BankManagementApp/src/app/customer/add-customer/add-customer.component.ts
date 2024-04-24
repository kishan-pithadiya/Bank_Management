import { Component,OnInit,OnDestroy } from '@angular/core';
import { FormControl, FormsModule, Validators } from '@angular/forms'; 
import { CustomerService } from '../../Services/customer.service';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { FetchCountryNamesService } from '../../Services/fetch-country-names.service';
import { dobValidator } from '../ValidatorCustomer/DOBvalidator';
import { IAddcust } from '../IAddCust';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.scss'
})
export class AddCustomerComponent implements OnInit,OnDestroy {
 
    constructor ( private custserve : CustomerService, private fetchcountry: FetchCountryNamesService ) {}
      private sub! : Subscription ; 
      error! : String;
      countryNames: string[] = [];

    userForm: FormGroup = new FormGroup({
      customerFirstName : new FormControl("",[Validators.required,Validators.minLength(2),Validators.maxLength(100),Validators.pattern(/^[a-zA-Z\s]*$/)]),
      customerLastName: new FormControl("",[Validators.required,Validators.minLength(2),Validators.maxLength(100),Validators.pattern(/^[a-zA-Z\s]*$/)]),
      customerDateOfBirth : new FormControl("",[Validators.required, dobValidator()]),
      customerEmail: new FormControl("",[Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
      customerPincode: new FormControl("",[Validators.required,Validators.pattern(/^[0-9]{6}$/)]),
      customerCountry: new FormControl("",[Validators.required]),
      customerAdharNumber : new FormControl("",[Validators.required,Validators.pattern(/^[0-9]{12}$/)]) 
    });

     
    addingCustomer(){
       const body:IAddcust = this.userForm.value;
      //  console.log(body);
       this.sub = this.custserve.addcust(body).subscribe(
        (response) => {
         console.log(response);
         alert("Customer Created Successfully!");
        },
        (error) => {
          if(error.status == 500){
            alert(`Customer with AdharNumber ${body.customerAdharNumber} Already Exist!`);
          } 
        }

       )
    }

  ngOnInit(): void {
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
  }
    ngOnDestroy(): void {
      if(this.sub){
      this.sub.unsubscribe();
      }
    }
}
