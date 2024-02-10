import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public apiSer:ApiService,public myroute:Router){}
  canActivate(): boolean  {
    if(!this.apiSer.isLogin())
    {
      localStorage.clear();
      this.myroute.navigateByUrl("/login");
    }
    return this.apiSer.isLogin();
  }
  
}
