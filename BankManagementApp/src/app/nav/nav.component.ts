import { Component } from '@angular/core';
import { AuthService } from '../MyAuth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  constructor(public authserve:AuthService){}
  
  logout(){
    this.authserve.logout(); 
  }
}
