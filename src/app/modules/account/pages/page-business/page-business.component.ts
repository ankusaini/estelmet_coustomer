import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-page-business',
  templateUrl: './page-business.component.html',
  styleUrls: ['./page-business.component.css']
})
export class PageBusinessComponent implements OnInit {

  buisnessDetails : FormGroup;

  constructor(
    private _fb : FormBuilder,
  ) {
    this.buisnessDetails = this._fb.group({
      c_name : new FormControl(),
      address1 : new FormControl(),
      address2 : new FormControl(),
      city : new FormControl(),
      state : new FormControl(),
      country : new FormControl(),
      pincode : new FormControl(),
      gst : new FormControl(),
      b_email : new FormControl(),
      mobile : new FormControl(),
      landline : new FormControl(),
      employee_count : new FormControl(),
    })
   }

  ngOnInit() {
  }

}
