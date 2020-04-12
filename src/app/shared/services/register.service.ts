import { Injectable, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { UserDetail } from '../interfaces/user';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';
import { FormGroup, FormControl, Validators, AbstractControl, FormArray } from '@angular/forms';
import { CustomValidator } from 'src/app/validators/custom-validators';

function passwordConfirming(c: AbstractControl): any {
    if (!c.parent || !c) return;
    const pwd = c.parent.get("password");
    const cpwd = c.parent.get("cpassword");
    if (!pwd || !cpwd) return;
    if (pwd.value !== cpwd.value) {
      return { invalid: true };
    }
  }

  function MaxlengthConfirming(c: AbstractControl): any {
    if(!c.parent || !c) return;
    const minLength = (c.parent.get("lengthMin"));
    const maxLength = (c.parent.get("lengthMax"));
    if(!maxLength || ! minLength) return;
    if(maxLength.value < minLength.value) {
      return { invalid: true};
    } 
  }
  
  function MaxwidthConfirming(c: AbstractControl): any {
    if(!c.parent || !c) return;
    const minWidth = (c.parent.get("widthMin"));
    const maxWidth = (c.parent.get("widthMax"));
    if(!maxWidth || ! minWidth) return;
    if(maxWidth.value < minWidth.value) {
      return { invalid: true};
    } 
  }
  
  function MaxthicknessConfirming(c: AbstractControl): any {
    if(!c.parent || !c) return;
    const minThickness = (c.parent.get("thicknessMin"));
    const maxThickness = (c.parent.get("thicknessMax"));
    if(!maxThickness || ! minThickness) return;
    if(maxThickness.value < minThickness.value) {
      return { invalid: true};
    } 
  }
  
  function MaxtemperConfirming(c: AbstractControl): any {
    if(!c.parent || !c) return;
    const minTemper = (c.parent.get("temperMin"));
    const maxTemper = (c.parent.get("temperMax"));
    if(!maxTemper || ! minTemper) return;
    if(maxTemper.value < minTemper.value) {
      return { invalid: true};
    } 
  }

@Injectable({
    providedIn: 'root'
  })
export class RegisterService implements OnInit {

    public userDto : UserDetail = {};
    public userId: any;
    public tradArray = [];
    public isLoggedIn : boolean = false;
    public enterOTP : boolean = false;
    public markAsComplete : boolean = false;
    
    public basicDetails = new FormGroup({
        userDetailId: new FormControl(""),
        firstName: new FormControl("", [
          Validators.required,
          Validators.minLength(2)
        ]),
        lastName: new FormControl("", [
          Validators.required,
          Validators.minLength(2)
        ]),
        mobile: new FormControl("", [
          Validators.required,
          CustomValidator.contactNumberValidation
        ]),
        emailId: new FormControl("", [
          Validators.required, 
          Validators.email
        ]),
        userRole: new FormControl("", [Validators.required]),
      });

      addExtraBasicDetails() {
          this.basicDetails.addControl("password", new FormControl("", [Validators.required]));
          this.basicDetails.addControl("cpassword", new FormControl("", [Validators.required, passwordConfirming]));
          this.basicDetails.addControl("otp", new FormControl("", [Validators.required]));
          this.basicDetails.addControl("image", new FormControl(""));
          
      }

      removeExtraBasicDetails() {
        this.basicDetails.removeControl("password");
        this.basicDetails.removeControl("cpassword");
        this.basicDetails.removeControl("otp");
        this.basicDetails.removeControl("image");
      }


       public buisnessDetails = new FormGroup({
        businessDetailId: new FormControl(""),
        companyName: new FormControl("", [
          Validators.required,
          Validators.minLength(3)
        ]),
        address1: new FormControl("",[
          Validators.required,
          CustomValidator.addressValidation
        ]),
        address2: new FormControl("", [ CustomValidator.addressValidation]),
        gst: new FormControl("", [Validators.required]),
        numberOfEmployees: new FormControl("",[CustomValidator.integer]),
        country: new FormControl("", [Validators.required]),
        state: new FormControl("", [Validators.required]),
        city: new FormControl("", [Validators.required]),
        pinCode: new FormControl("", [
          Validators.required,
          CustomValidator.pinCodeValidation
        ]),
        mobile: new FormControl("",[CustomValidator.contactNumberValidation]),
        landline: new FormControl("", [CustomValidator.contactNumberValidation]),
        businessEmail: new FormControl("", [Validators.email]),
      });
    
      
    public tradeDetails = new FormGroup({
        userProductPreferenceId: new FormControl(""),
        productType: new FormControl("", [Validators.required]),
        productCategory: new FormControl("", [Validators.required]),
        productShape: new FormControl("", [Validators.required]),
        productClass: new FormControl("", [Validators.required]),
        thicknessMin: new FormControl("", [Validators.required, CustomValidator.compondValueValidate]),
        thicknessMax: new FormControl("", [Validators.required, CustomValidator.compondValueValidate, MaxthicknessConfirming]),
        temperMin: new FormControl("", [Validators.required, CustomValidator.compondValueValidate]),
        temperMax: new FormControl("", [Validators.required, CustomValidator.compondValueValidate, MaxtemperConfirming]),
        lengthMin: new FormControl("", [CustomValidator.compondValueValidate]),
        lengthMax: new FormControl("", [CustomValidator.compondValueValidate, MaxlengthConfirming]),
        widthMin: new FormControl("",[CustomValidator.compondValueValidate]),
        widthMax: new FormControl("", [CustomValidator.compondValueValidate, MaxwidthConfirming]),
        monthlyRequirement: new FormControl("", [Validators.required, CustomValidator.compondValueValidate])
      });

      public keyPerson = new FormGroup({
        keyPersonId: new FormControl(""),
        name: new FormControl("", [Validators.required, Validators.minLength(3)]),
        designation: new FormControl("", [Validators.required]),
        mobile1: new FormControl("", [Validators.required, CustomValidator.contactNumberValidation]),
        mobile2: new FormControl("", [CustomValidator.contactNumberValidation]),
        email1: new FormControl("", [Validators.required, Validators.email]),
        email2: new FormControl("", [Validators.email])
      });

    constructor(private apiService: ApiService,
        private router: Router,
        private userService : UserService,
        private route: ActivatedRoute
    ) {
        this.userService.isAuthenticated.subscribe(data=>{
            if(data){
                this.removeExtraBasicDetails();
                this.userDto = JSON.parse(this.userService.getUser());
                this.editUser(this.userDto);
                this.isLoggedIn = true; 
            } else {
                this.addExtraBasicDetails();
                this.userDto = undefined;
                this.isLoggedIn = false; 
                this.basicDetails.reset();
                this.keyPerson.reset();
                this.buisnessDetails.reset();
                this.tradArray = [];
            }
        })
        if(this.userService.isAuthenticated) {
          
        } else {
            //intialize something when user is not login!
        }
          
     }


    ngOnInit() {
    }

    editUser(data) {
        this.basicDetails.patchValue(data);
        this.keyPerson.patchValue(data.keyPerson[0]);
        this.buisnessDetails.patchValue(data.businessDetails[0]);
        this.tradArray = data.userProductPreference;
    }

    finalRegister() {
        let url = '/estelmet/users/createUser';
        this.apiService.post(url, this.basicDetails.value).subscribe(
            res => {
                console.log(res);
                // this.signup();
                let credentials = {
                    firstName: this.basicDetails.value.firstName,
                    lastName: this.basicDetails.value.lastName,
                    emailId : this.basicDetails.value.emailId,
                    mobile: this.basicDetails.value.mobile,
                    password: this.basicDetails.value.password,
                    userRole: this.basicDetails.value.userRole,
                    isEnableMobileNumber: true,
                    
                }
                this.userService.attempiSignUp(credentials).subscribe(
                    res =>{
                        console.log(res);
                    }, error => {
                        console.log(error);
                    }
                );
            }, error => {
                console.log(error);
            }
        )
    }

    submitTermsCond() {
        this.basicDetails.addControl("userProductPreference", new FormArray(this.getPreference()));
        this.basicDetails.addControl("keyPerson", new FormArray(this.getKeyPerson()));
        this.basicDetails.addControl("businessDetails", new FormArray(this.getBusinessPerson()));
        console.log(this.basicDetails);
        this.finalRegister();

    }

    getBusinessPerson(): FormGroup[] {
        let grp :FormGroup[] = [];
        grp.push(this.buisnessDetails);
        return grp;
    }

    getKeyPerson(): FormGroup[] {
        let grp :FormGroup[] = [];
        grp.push(this.keyPerson);
        return grp;
    }

    getPreference(): FormGroup[] {
        let grp: FormGroup[] = [];
        this.tradArray.forEach( ele => {
            
            grp.push(this.getPrefrenceFormWithValue(ele));
        })
        return grp;
    }

    getPrefrenceFormWithValue(data): FormGroup {
        let tradeDetails: FormGroup = new FormGroup({
            userProductPreferenceId: new FormControl(""),
            productType: new FormControl(data.productType, [Validators.required]),
            productCategory: new FormControl(data.productCategory, [Validators.required]),
            productShape: new FormControl(data.productShape, [Validators.required]),
            productClass: new FormControl(data.productClass, [Validators.required]),
            thicknessMin: new FormControl(data.thicknessMin, [Validators.required, CustomValidator.compondValueValidate]),
            thicknessMax: new FormControl(data.thicknessMax, [Validators.required, CustomValidator.compondValueValidate, MaxthicknessConfirming]),
            temperMin: new FormControl(data.temperMin, [Validators.required, CustomValidator.compondValueValidate]),
            temperMax: new FormControl(data.temperMax, [Validators.required, CustomValidator.compondValueValidate, MaxtemperConfirming]),
            lengthMin: new FormControl(data.lengthMin, [CustomValidator.compondValueValidate]),
            lengthMax: new FormControl(data.lengthMax, [CustomValidator.compondValueValidate, MaxlengthConfirming]),
            widthMin: new FormControl(data.widthMin,[CustomValidator.compondValueValidate]),
            widthMax: new FormControl(data.widthMin, [CustomValidator.compondValueValidate, MaxwidthConfirming]),
            monthlyRequirement: new FormControl(data.monthlyRequirement, [Validators.required, CustomValidator.compondValueValidate])
          });
          return tradeDetails;
    }

    submitTradeDetails() {
        this.router.navigateByUrl('/classic/account/confirm');
    }


    submitKeyPerson() {
        this.router.navigateByUrl('/classic/account/trade');
    }

    submitBusinesDetails() {
        this.router.navigateByUrl('/classic/account/keyperson');

    }

    submitBasicDetails() {
        this.router.navigateByUrl('/classic/account/business');
    }

    addToTradeDetailsArray() {
        this.tradArray.push(this.tradeDetails.value);
        this.tradeDetails.reset();
    }

    editTradeDetailsFromList(data) {
        let index = this.tradArray.indexOf(data);
        this.tradeDetails.patchValue(data);
        this.tradArray.splice(index, 1);
    }

    sendOTP(email, number) {
        let url = '/estelmet/common/sendOtp';
        const params: HttpParams = new HttpParams()
        .set("number", number)
        .set("email", email);
        return new Observable<any>(obs => {
            this.apiService.get(url, params).subscribe(
                res => {
                    obs.next(res);
                }, error => {
                    console.log(error);
                }
            )
        });
    }

    verifyOTP() {
        let url= '/estelmet/common/verifyOtp';
        const params: HttpParams = new HttpParams()
        .set("number", this.basicDetails.value.mobile)
        .set("otp", this.basicDetails.value.otp);
        return new Observable<any>(obs => {
            this.apiService.get(url, params).subscribe(
                res => {
                    obs.next(res);
                }, error => {
                    console.log(error);
                }
            )
        });
    }

    updateBasicDetails() {
        let url = '/estelmet/users/updateUser';
        return new Observable<any>(
            obs => {
                this.apiService.put(url, this.userDto).subscribe(
                    res => {
                        obs.next(res);
                    }, error => {
                        console.log(error);
                    }
                );

            }
        )
    }

    updateBusinessDetails() {
        let url = '/estelmet/users/updateBusinessDetails';
        return new Observable<any>(
            obs => {
                this.apiService.put(url, this.userDto.businessDetails).subscribe(
                    res => {
                        obs.next(res);
                    }
                )
            }
        )
    }

    updateKeyPersonDetails() {
        let url = '/estelmet/users/saveKeyPerson';
        return new Observable<any>(
            obs => {
                this.apiService.put(url, this.userDto.keyPerson).subscribe(
                    res => {
                        obs.next(res);
                    }
                )
            }
        )
    }

    updateTradeDetails() {
        let url = '/estelmet/users/saveUserProductPreference';
        return new Observable<any>(
            obs => {
                this.apiService.put(url, this.userDto.userProductPreference).subscribe(
                    res => {
                        obs.next(res);
                    }
                )
            }
        )
    }


}