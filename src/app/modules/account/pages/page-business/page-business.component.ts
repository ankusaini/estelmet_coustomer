import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/shared/services/register.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-page-business',
  templateUrl: './page-business.component.html',
  styleUrls: ['./page-business.component.css']
})
export class PageBusinessComponent implements OnInit {

  constructor(
    public registerService: RegisterService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {  }

  submitBusinesDetails() {  
    this.registerService.submitBusinesDetails();
  }

  updateBusinessDetails() {
    this.registerService.updateBusinessDetails().subscribe(
      res => {
        this.toastr.success("Business Details Updated Sucessfully!");
      }, error => {
        console.log(error);
      }
    )
  }

  get f() {
    return this.registerService.buisnessDetails.controls;
  }

}
