import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable(
  {
    providedIn:'root'
  }
)

export class myGuard implements CanActivate{
  constructor(private authserve:AuthService,private router:Router){}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.authserve.isloggedIn){
      return true;
    }
      this.router.navigate(['/login'])
      return false;
  } 
  

}