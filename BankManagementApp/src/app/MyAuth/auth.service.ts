import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }
  get isloggedIn():boolean{
    return !!localStorage.getItem('token');
  }



  login(userId:string):boolean{
    if(userId=='kishan21'){
      const token="ljalherfoiuhvbnjakwr4luhv";
      localStorage.setItem('token',token);
      return true;
    }
    return false;
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}
