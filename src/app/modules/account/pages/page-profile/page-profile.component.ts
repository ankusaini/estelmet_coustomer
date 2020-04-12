import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/shared/services/register.service';
import { ToastrService } from 'ngx-toastr';

  
@Component({
    selector: 'app-page-profile',
    templateUrl: './page-profile.component.html',
    styleUrls: ['./page-profile.component.sass']
})
export class PageProfileComponent implements OnInit {

    constructor(
       public registerService: RegisterService,
       private toastr: ToastrService
    ) { }

    ngOnInit() {
      // alert("Hello");
      this.registerService.basicDetails.removeControl("otp");
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
}
