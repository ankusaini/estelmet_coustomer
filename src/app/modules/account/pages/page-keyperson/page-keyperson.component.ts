import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/shared/services/register.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-page-keyperson',
  templateUrl: './page-keyperson.component.html',
  styleUrls: ['./page-keyperson.component.css']
})
export class PageKeypersonComponent implements OnInit {

  

  constructor(
    public registerService: RegisterService,
    private toastr: ToastrService
  ) {}

  ngOnInit() { } 

    submitKeyPerson() {
    this.registerService.submitKeyPerson();
    
  }

  updateKeyPerson() {
    this.registerService.updateKeyPersonDetails().subscribe(
      res => {
        this.toastr.success("KeyPerson Details Updated Sucessfully!");
      }, error => {
        console.log(error);
      }
    )
  }


  get f() {
    return this.registerService.keyPerson.controls;
  }

}
