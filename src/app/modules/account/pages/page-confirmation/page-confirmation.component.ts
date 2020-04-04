import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/shared/services/register.service';

@Component({
  selector: 'app-page-confirmation',
  templateUrl: './page-confirmation.component.html',
  styleUrls: ['./page-confirmation.component.css']
})
export class PageConfirmationComponent implements OnInit {

  public termsConditions: FormGroup;


  constructor(private registerService: RegisterService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.termsConditions = new FormGroup({
      verify: new FormControl('', [Validators.required])
    })
  }

  submitTermsCond() {
    this.registerService.submitTermsCond();
  }

}
