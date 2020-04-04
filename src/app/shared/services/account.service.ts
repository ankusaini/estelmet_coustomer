import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class AccountService {

  constructor(private apiService: ApiService, 
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

  forgetPassword(newPassword, confirmPassword, otp, mobile) {
    let body = {
      newPassword: newPassword,
      confirmPassword: confirmPassword
    }
    let params: HttpParams = new HttpParams().set("mobile", mobile).set("otp", otp);
    let url = '/estelmet/forgetPassword';
    return new Observable<any>(
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


}