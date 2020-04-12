import { Component, OnInit } from '@angular/core';
import { StaticDataService } from 'src/app/shared/services/static-data.service';
import { ProductType, ProductCategory, ProductShape, ProductClass } from 'src/app/shared/interfaces/product';
import { RegisterService } from 'src/app/shared/services/register.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-page-trade',
  templateUrl: './page-trade.component.html',
  styleUrls: ['./page-trade.component.css']
})
export class PageTradeComponent implements OnInit {
  
  public productTypeList: ProductType[];
  public productCategoryList: ProductCategory[];
  public productShapeList: ProductShape[];
  public productClassList: ProductClass[];
  public isValid: boolean = false;

  constructor(private staticData: StaticDataService,
    private toastr: ToastrService,
    public userService: UserService,
    public registerService: RegisterService) { }

  ngOnInit() {
    this.getProductCategory();
    this.getProductClass();
    this.getProductShape();
    this.getProductType();
    
  }

  

  addMore() {
    this.registerService.addToTradeDetailsArray();
 
  }

  submitTradeDetails() {
    // routerLink="../confirm"
    this.registerService.submitTradeDetails();
      }

  updateTradeDetails() {
    this.registerService.updateTradeDetails().subscribe(
      res => {
        this.toastr.success("User Product Preference Updated Sucessfully!");
      }, error => {
        console.log(error);
      }
    )
  }

  removeFromList(item) {
    const index: number = this.registerService.tradArray.indexOf(item);
    if (index !== -1) {
      this.registerService.tradArray.splice(index, 1);
    }
  }

  editTradeDetailsFromList(item) {
    this.registerService.editTradeDetailsFromList(item);
  }

  getProductType() {
    this.staticData.getProductType().subscribe(
      res => {
        this.productTypeList = res;
        console.log(this.productTypeList);
      }, error => {
        console.log(error);
      }
    )
  }

  getProductCategory() {
    this.staticData.getAllProductCategory().subscribe(
      res => {
        this.productCategoryList = res;
        console.log(this.productCategoryList);
      }, error => {
        console.log(error);
      }
    )
  }

  getProductShape() {
    this.staticData.getProductShape().subscribe(
      res => {
        this.productShapeList = res;
        console.log(this.productShapeList);
      }, error => {
        console.log(error);
      }
    )
  }

  getProductClass() {
    this.staticData.getProductClass().subscribe(
      res => {
        this.productClassList = res;
        console.log(this.productClassList);
      }, error => {
        console.log(error);
      }
    )
  }


  get f() {
    return this.registerService.tradeDetails.controls;
  }

}

// interface tempData {
//   userProductPreferenceId: string;
//   productType: string;
//   productCategory: string;
//   productShape: string;
//   productClass: string;
//   thicknessMin: string;
//   thicknessMax: string;
//   temperMin: string;
//   temperMax: string;
//   lengthMin: string;
//   lengthMax: string;
//   widthMin: string;
//   widthMax: string;
//   monthlyRequirement:string; 

// }

