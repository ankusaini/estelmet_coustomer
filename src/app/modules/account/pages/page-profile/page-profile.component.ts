import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidator } from 'src/app/validators/custom-validators';
import { UserService } from 'src/app/shared/services/user.service';
import { RegisterService } from 'src/app/shared/services/register.service';
import { UserDetail } from 'src/app/shared/interfaces/user';

  
@Component({
    selector: 'app-page-profile',
    templateUrl: './page-profile.component.html',
    styleUrls: ['./page-profile.component.sass']
})
export class PageProfileComponent implements OnInit {

  basicDetails : FormGroup;
  userId: any;
  userData : UserDetail;


    constructor(private userService: UserService,
       private registerService: RegisterService) { }

    ngOnInit() {
        this.userData = this.registerService.userDto;
        this.createForm();
    }

    createForm() {
        this.basicDetails = new FormGroup({
            // this.utils.noWhitespaceValidator,CustomValidator.emailValidate
            userDetailId: new FormControl(this.userData.userDetailId),
            firstName: new FormControl(this.userData.firstName, [
              Validators.required,
              Validators.minLength(2)
            ]),
            lastName: new FormControl(this.userData.lastName, [
              Validators.required,
              Validators.minLength(2)
            ]),
            mobile: new FormControl(this.userData.mobile, [
              Validators.required,
              CustomValidator.contactNumberValidation
            ]),
            emailId: new FormControl(this.userData.emailId, [
              Validators.required, 
              Validators.email
            ]),
            // password: new FormControl("", [Validators.required]), //,CustomValidator.passwordValidation
            // cpassword: new FormControl("", [Validators.required,passwordConfirming]),
            // userRole: new FormControl("", [Validators.required]),
            // otp: new FormControl("", [Validators.required]),
            // //  otp: new FormControl(),
            // // status: new FormControl("", [Validators.required])
          });
    }

    updateBasicDetails() {
        this.registerService.updateBasicDetails(this.basicDetails.value);
        // if(this.registerService.mode === 'editBack') {
        //   this.registerService.mode = 'edit';
        // } else {
          // this.registerService.mode = '';
    
        // }
    }

    get f() {
      return this.basicDetails.controls;
    }
}
