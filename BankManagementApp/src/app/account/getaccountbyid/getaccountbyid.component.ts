import { Component, OnDestroy } from '@angular/core';
import { AccountService } from '../../Services/account.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-getaccountbyid',
  templateUrl: './getaccountbyid.component.html',
  styleUrl: './getaccountbyid.component.scss'
})
export class GetaccountbyidComponent implements OnDestroy{


  constructor(private accserve: AccountService){}

  private sub! : Subscription ; 
  error! : String;
  accIdToGet!: number;
  accData : any;

  
  getaccbyId(){
    this.sub = this.accserve.getaccbyid(this.accIdToGet).subscribe(
      (response) =>
      {
        this.accData = response;
        console.log(this.accData);
      },
      (error) =>
      {
        this.error = error.Message;  
      }
    )
  }

 
  // ngOnInit(): void {
   
  //       this.getaccbyId();
  //     };
  
  ngOnDestroy(): void {
    if(this.sub){
    this.sub.unsubscribe();
    }
  }

}

