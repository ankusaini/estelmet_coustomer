import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root'
  })
export class AccountService {

  constructor(private apiService: ApiService, 
    private userService: UserService
    ) {

  }

  changePassword(oldPassword, newPassword, userId) {
    let body = {
      oldPassword: oldPassword,
      newPassword: newPassword
    }
    let params: HttpParams = new HttpParams().set("userId", userId);
    let url = '/estelmet/changePassword'; 
    return new  Observable<any>(
      obs => {
        this.apiService.post(url, body, params).subscribe(
          res => {
            obs.next(res);
          }, error => {
            console.log(error);
          }
        )
      }
    )
  }

  forgetPassword(form: FormGroup, mobile) {
    let url = '/estelmet/forgetPassword';
    let params: HttpParams = new HttpParams().set("mobile", mobile).set("otp", form.value.otp);
    form.removeControl("otp");

    return new Observable<any>(
      obs => {
        this.apiService.post(url, form.value, params).subscribe(
          res => {
            obs.next(res);
          }, error => {
            console.log(error);
          }
        )
      }
    )
    
  }

  logout(){
    let url= '/estelmet/logout';
    this.apiService.get(url).subscribe(
        res => {
            // this.userService.purgeAuth();
            this.userService.logout();
        }, error => {
            console.log(error);
        }
    )
}

getLoggedIn() {
  let url = '/estelmet/getLoggedInUser';
  return new Observable<any>(
    obs=> {
      this.apiService.get(url).subscribe(
        res => {
          obs.next(obs);
        }
      )
    }
  )
}


}