import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/app/shared/services/register.service';



@Component({
  selector: 'app-page-personal',
  templateUrl: './page-personal.component.html',
  styleUrls: ['./page-personal.component.css']
})

export class PagePersonalComponent implements OnInit {

  enterOTP : boolean = false;
  markAsComplete : boolean = false;


  constructor(
    public registerService: RegisterService,
    private toastr:ToastrService,
  ) { }

  ngOnInit() {

  }

  sendOTP() {
    this.enterOTP = true;
    this.registerService.sendOTP().subscribe(
      res => {
        if(res.message === "Success"){
          this.toastr.success("OTP sent successfully."); 
        } else {
          this.toastr.error("Error sending OTP."); 
        }
        console.log(res);
      }, error => {
        console.log(error);
      }
    )

  } 

  verifyOTP() {
    this.registerService.verifyOTP().subscribe(
      res => {
        console.log(res);
        if(res.message === "Success")
          {
        this.markAsComplete = true;
        this.toastr.success("OTP verified"); 
          }
        else
          {
            this.toastr.error("Invalid OTP"); 
          }
      }, error => {
        console.log(error);
      }
    )
  }

  submitBasicDetails() {
    this.registerService.submitBasicDetails();
    
  }

  get f() {
    return this.registerService.basicDetails.controls;
  }



}
