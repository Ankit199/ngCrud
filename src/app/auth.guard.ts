import { Injectable } from '@angular/core';
import{Router} from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {tokenNotExpired} from 'angular2-jwt';


@Injectable()

export class AuthGuard implements CanActivate 
{
  
 constructor(  private router:Router) 
  {  }  
  canActivate()
    {
      if(tokenNotExpired())
      {
        return true;
      }
      
    this.router.navigate(['/login']);
    return false;
  }
  
}
