import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/shared/services/register.service';
import { ToastrService } from 'ngx-toastr';
import csc from 'country-state-city';
@Component({
  selector: 'app-page-business',
  templateUrl: './page-business.component.html',
  styleUrls: ['./page-business.component.css']
})
export class PageBusinessComponent implements OnInit {

  countryList: any;
  stateList: any;
  cityList: any;

  constructor(
    public registerService: RegisterService,
    private toastr: ToastrService
  ) { }

  ngOnInit() { 
    this.getAllCountry();
   }

  getAllCountry() {
    this.countryList = csc.getAllCountries();
  }
  getAllState(countryId) {
    this.stateList = csc.getStatesOfCountry(countryId);
  }
  getAllCity(stateId) {
    this.cityList = csc.getCitiesOfState(stateId);
  }

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
