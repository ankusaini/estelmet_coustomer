import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidator } from 'src/app/validators/custom-validators';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/shared/services/account.service';
import { Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { ApiService } from 'src/app/shared/services/api.service';
import { RegisterService } from 'src/app/shared/services/register.service';

@Component({
  selector: 'app-page-forgot-pass',
  templateUrl: './page-forgot-pass.component.html',
  styleUrls: ['./page-forgot-pass.component.css']
})
export class PageForgotPassComponent implements OnInit {

  public firstForm: FormGroup;
  public secondForm: FormGroup;
  public enterOtp : boolean = false;

  constructor(private registerService: RegisterService,  private toastr: ToastrService,
    private router: Router,
    private accountService: AccountService) { }

  ngOnInit() {
    this.createFirstForm();
    this.createSecondForm();
  }

  createFirstForm() {
   this.firstForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    number: new FormControl('', [CustomValidator.contactNumberValidation, Validators.required])
   })
  }

  createSecondForm() {
    this.secondForm = new FormGroup({
      newPassword: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
      otp: new FormControl('', [Validators.required]),

     })
  }

   submitFirstForm() {
    this.registerService.sendOTP(this.firstForm.value.email, this.firstForm.value.number).subscribe(
      res => {
        if(res.message === "Success"){
          this.toastr.success("OTP sent successfully."); 
          this.enterOtp = true;
        } else {
          this.toastr.error("Error sending OTP."); 
        }
        console.log(res);
      }, error => {
        console.log(error);
      }
    );

  }

  submitSecondForm() {
  this.accountService.forgetPassword(this.secondForm , this.firstForm.value.number).subscribe(
        res => {
          this.toastr.success("Password Reset successfully!");
          this.router.navigateByUrl('/classic/account/login');
        }, error => {
          console.log(error);
        }
      )

  }

}
