import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from "@angular/router";
import { Router } from "@angular/router";
import { UserService } from "./user.service";
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard implements  CanActivate {

  loginStatus:boolean;
 public user:any;

  constructor(
    private router: Router,
    private _userService: UserService,
    private _jwtService : JwtService,
  ) { 

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
  //   this.user=this._userService.getUser();
  //    if(this.user!=undefined){
  //     if(!Object.keys(this.user).length){
  //         this.router.navigateByUrl("/classic/account/login");
  //       } else {
  //           this.user= JSON.parse(this._userService.getUser());

  //           return true;
  //       }
  //    }
  //   else {
  //      this.router.navigateByUrl("/classic/account/login");
  //   }
  //   //
  //   return true;
  // }

    if(this._jwtService.getToken()){
      return true;
    } else{
      this.router.navigate(['/classic/account/login'],{queryParams:{'redirectURL':state.url}});
      // this.router.navigateByUrl("/classic/account/login");
      return false;
    }
  }
}
