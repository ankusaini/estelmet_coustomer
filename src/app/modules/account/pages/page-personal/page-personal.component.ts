import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/app/shared/services/register.service';
import { UserService } from 'src/app/shared/services/user.service';



@Component({
  selector: 'app-page-personal',
  templateUrl: './page-personal.component.html',
  styleUrls: ['./page-personal.component.css']
})

export class PagePersonalComponent implements OnInit {

  constructor(
    public registerService: RegisterService,
    public userService: UserService,
    private toastr:ToastrService,
  ) { 

  }

  ngOnInit() {

  }

  sendOTP() {
    this.registerService.enterOTP = true;
    this.registerService.sendOTP(this.registerService.basicDetails.value.email, 
      this.registerService.basicDetails.value.mobile).subscribe(
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
        this.registerService.markAsComplete = true;
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

  updateBasicDetails() {
    this.registerService.updateBasicDetails().subscribe(
      res => {
        console.log(res);
        this.toastr.success("Profile update Sucessfully!")
      }, error => {
        console.log(error);
      }
    );
}


  get f() {
    return this.registerService.basicDetails.controls;
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    this.userService.isAuthenticated.subscribe(data=>{
      if(data){
        this.f.userRole.disable();
        this.f.emailId.disable();
      }
    })
  }



}
