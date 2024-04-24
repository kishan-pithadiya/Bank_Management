import { Component } from '@angular/core';
import { AuthService } from '../MyAuth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})
export class AuthenticationComponent {
  constructor(private authserve:AuthService,private router:Router){}

  username:string

  loggin(){
    if(this.username==null){
      alert("Please Enter UserName!");  
    }
    else if(this.authserve.login(this.username)){
      this.router.navigate(['/'])
    } 
    else{
      alert("Invalid UserName!");
    }
  }
}
