import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-personal',
  templateUrl: './page-personal.component.html',
  styleUrls: ['./page-personal.component.css']
})
export class PagePersonalComponent implements OnInit {
  fName = '';
  lName = '';
  mobile = '';
  email = '';
  firstName = '';
  lastName = '';
  mobileNum = '';
  emailUser = '';
  basicDetails : FormGroup;
  constructor(
    private _fb : FormBuilder,
  ) {
    this.basicDetails = this._fb.group({
      fName : new FormControl('', [Validators.required]),
      lName: new FormControl('', [Validators.required]),
      mobile : new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      email : new FormControl('', [Validators.required]),
      passWord : new FormControl(''),
      confirm_password : new FormControl(''),
      userType : new FormControl('',[Validators.required]),
    })
   }

  ngOnInit() {
  }

  get f() {
    return this.basicDetails.controls;
  }

  onKey(event: any) {
    if (event.target.value === '') {
      this.firstName = 'First name should not be blank'; return true;
    } else { this.firstName = ''; return false; }
  }
  onKey2(event: any) {
    if (event.target.value === '') {
      this.lastName = 'Last name should not be blank'; return true;
    } else { this.lastName = ''; return false; }
  }
  onKey3(event: any) {
    if (event.target.value === '') {
      this.mobileNum = 'Mobile should not be blank'; return true;
    } else if (event.target.value.length !== 10) {
      this.mobileNum = 'should be 10 digit';
      return true;
    }  else if (event.target.value.length[0] === 6 || event.target.value.length[0] === 7) {
      this.mobileNum = 'invalid';
      return true;
    } else { this.mobileNum = ''; return false; }
  }

}
