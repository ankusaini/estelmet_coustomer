import { JwtService } from './jwt.service';

import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { UserDetail } from '../interfaces/user';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserSubject = new BehaviorSubject<UserDetail>({} as UserDetail);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(
    private jwtService: JwtService,
    private apiService: ApiService, 
    private router: Router,
    private _commonService : CommonService,
  ) {
    this.populate();
   }

  // Response we are getting is accessToken and tokenType which are not presesnt
  // in user class


  populate() {
    // If JWT detected, attempt to get & store user's info
    if (this.jwtService.getToken()) {
      this.apiService.get('/user')
        .subscribe(
          data => this.setAuth(data.user),
          err => this.purgeAuth()
        );
    } else {
      // Remove any potential remnants of previous auth states
      this.purgeAuth();
    }
  }

  // Response we are getting is accessToken and tokenType which are not presesnt in user class

  setAuth(token) {
    // console.log('user us' + JSON.stringify(user));

    // Save JWT sent from server in localstorage
    this.jwtService.saveToken(token);
    // Set current user data into observable
    // this.currentUserSubject.next(user);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);

    // this.saveUser(user);
  }

  logout() {
    console.log('logout');
    this.purgeAuth();

    this.router.navigate(['/home']);
    //
  }

  purgeAuth() {
    // Remove JWT from localstorage
    this.jwtService.destroyToken();
    // Set current user to an empty object
    this.currentUserSubject.next({} as UserDetail);
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
    this.destroyUser();
  }

  attemptAuth(credentials): Observable<UserDetail> {
    const route = '/login';
    return this.apiService.post(route, credentials).pipe(
      map(data => {
        console.log("login res",data.headers.get('authorization'));
        this.setAuth(data.headers.get('authorization'));
        this.getUserById(data.headers.get('ID'));
        return data;
      }
      ));
  }

  attempiSignUp(credentials) {
    const route = '/signup';
    return this.apiService.post(route, credentials).pipe(
      map(data => {
        return data;
      }
      ));
  }

  getUserById(userId) {
    this._commonService.getUserById(userId).subscribe((res)=>{
      console.log(res);
    })
  }

  getCurrentUser(): UserDetail {
    return this.currentUserSubject.value;
  }

  getUser(): string {
    return window.localStorage['user'];
  }

  destroyUser() {
    window.localStorage.removeItem('user');
  }

  saveUser(user) {
    window.localStorage['user'] = JSON.stringify(user);
  }

  // Update the user on the server (email, pass, etc)
  update(user): Observable<UserDetail> {
    return this.apiService
      .put('/user', { user })
      .pipe(map(data => {
        // Update the currentUser observable
        this.currentUserSubject.next(data['user']);
        return data['user'];
      }));
  }

}
