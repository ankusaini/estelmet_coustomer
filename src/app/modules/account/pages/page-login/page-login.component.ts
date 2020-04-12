import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { RegisterService } from 'src/app/shared/services/register.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {
  errorMsg: string = '';
  authForm: FormGroup;
  name = '';
  redirectURL : string;
  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private userService: UserService,
    private toastr: ToastrService,
    // private registerService: RegisterService,
    private route : ActivatedRoute,
  ) {
    
  }

  ngOnInit(){
    let params = this.route.snapshot.queryParams;
    if (params['redirectURL']) {
        this.redirectURL = params['redirectURL'];
    }

    

    this.authForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });

    ///// user login status detection
    // this.userService.isAuthenticated.subscribe(res => {
    //   if (res) {
    //     console.log('worked');
    //     this.router.navigateByUrl(this.redirectURL);
    //   } else {
    //     this.errorMsg = 'Invalid Credential. Please try again latter'
    //     console.log(this.errorMsg);
    //   }
    // });

  }

  submitForm() {
    // this.isSubmitting = true;
    // this.errors = {errors: {}};
    const credentials = this.authForm.value;
    this.userService.attemptAuth(credentials).subscribe(
      data => {
        console.log('login success');
        // if (Object.keys(data)) {
          // this.userService.saveUser(data);
          this.router.navigateByUrl('dashboard/default');
        // }
      },
      err => {
        console.log(err);
        if (err.status === 401) {
          // this.router.navigateByUrl('guest/signup');
          // this.toastr.errorToastr('Invalid email and password');
        }
        if (err.status === 400) {
          //  this.toastr.errorToastr(err.message);
        }
      }
    );
  }
  onKey(event: any) { // without type info
      if (event.target.value === '') {
          console.log(event.target.value);
          this.name = 'Email required';
          return true;
      } else {
          this.name = '';
          return false;
      }
  }
}
