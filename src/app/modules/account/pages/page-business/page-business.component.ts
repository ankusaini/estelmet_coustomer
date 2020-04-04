import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/shared/services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-business',
  templateUrl: './page-business.component.html',
  styleUrls: ['./page-business.component.css']
})
export class PageBusinessComponent implements OnInit {

  

  constructor(
    public registerService: RegisterService,
    private router:Router
  ) {
   }

  ngOnInit() {
  
    
  }

  submitBusinesDetails() {
    
    this.registerService.submitBusinesDetails();
    

  }

  


  get f() {
    return this.registerService.buisnessDetails.controls;
  }

}
