import { Component, OnInit } from '@angular/core';

import { RegisterService } from 'src/app/shared/services/register.service';
import { UserDetail } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-page-keyperson',
  templateUrl: './page-keyperson.component.html',
  styleUrls: ['./page-keyperson.component.css']
})
export class PageKeypersonComponent implements OnInit {

  
  public userData: UserDetail;

  constructor(
    public registerService: RegisterService,
  ) {
    
  }

  ngOnInit() {
 
    } 
    
  

  submitKeyPerson() {
    this.registerService.submitKeyPerson();
    
  }


  get f() {
    return this.registerService.keyPerson.controls;
  }

}
