import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-page-keyperson',
  templateUrl: './page-keyperson.component.html',
  styleUrls: ['./page-keyperson.component.css']
})
export class PageKeypersonComponent implements OnInit {

  keyPerson : FormGroup;

  constructor(
    private _fb : FormBuilder,
  ) {
    this.keyPerson = this._fb.group({
      name : new FormControl(),
      designation : new FormControl(),
      phone1 : new FormControl(),
      phone2 : new FormControl(),
      email1 : new FormControl(),
      email2 : new FormControl(),
    })
  }

  ngOnInit() {
  }

}
