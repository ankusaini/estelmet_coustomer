import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { products } from 'src/data/shop-products';
import { ApiService } from 'src/app/shared/services/api.service';
import { CommonService } from 'src/app/shared/services/common.service';
import { SaleList } from 'src/app/shared/interfaces/latestOffers';
import { CartService } from 'src/app/shared/services/cart.service';
import { Product, UserProductPreference, Status, ProductStage, ProductType, ProductCategory, ProductShape, ProductClass, ProductTemper } from 'src/app/shared/interfaces/product';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { StaticDataService } from 'src/app/shared/services/static-data.service';
import { RegisterService } from 'src/app/shared/services/register.service';
import { CustomValidator } from 'src/app/validators/custom-validators';
import { UserService } from 'src/app/shared/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserDetail } from 'src/app/shared/interfaces/user';


function MaxlengthConfirming(c: AbstractControl): any {
  if(!c.parent || !c) return;
  const minLength = (c.parent.get("lengthMin"));
  const maxLength = (c.parent.get("lengthMax"));
  if(!maxLength || ! minLength) return;
  if(maxLength.value < minLength.value) {
    return { invalid: true};
  } 
}

function MaxwidthConfirming(c: AbstractControl): any {
  if(!c.parent || !c) return;
  const minWidth = (c.parent.get("widthMin"));
  const maxWidth = (c.parent.get("widthMax"));
  if(!maxWidth || ! minWidth) return;
  if(maxWidth.value < minWidth.value) {
    return { invalid: true};
  } 
}

function MaxthicknessConfirming(c: AbstractControl): any {
  if(!c.parent || !c) return;
  const minThickness = (c.parent.get("thicknessMin"));
  const maxThickness = (c.parent.get("thicknessMax"));
  if(!maxThickness || ! minThickness) return;
  if(maxThickness.value < minThickness.value) {
    return { invalid: true};
  } 
}

function MaxtemperConfirming(c: AbstractControl): any {
  if(!c.parent || !c) return;
  const minTemper = (c.parent.get("temperMin"));
  const maxTemper = (c.parent.get("temperMax"));
  if(!maxTemper || ! minTemper) return;
  if(maxTemper.value < minTemper.value) {
    return { invalid: true};
  } 
}


@Component({
  selector: 'app-block-quote',
  templateUrl: './block-quote.component.html',
  styleUrls: ['./block-quote.component.css']
})
export class BlockQuoteComponent implements OnInit {

  @Input() products: SaleList[];

  public productTypeList: ProductType[];
  public productCategoryList: ProductCategory[];
  public productShapeList: ProductShape[];
  public productClassList: ProductClass[];
  public productTemperList: ProductTemper[];
  public isLogin: boolean;
  public userId: any;
  public userDto: UserDetail = {};
  public tradeArrList: any[] = [];

  public quoteForm = new FormGroup({
    userProductPreferenceId: new FormControl(""),
    productType: new FormControl("", [Validators.required]),
    productCategory: new FormControl("", [Validators.required]),
    productShape: new FormControl("", [Validators.required]),
    productClass: new FormControl("", [Validators.required]),
    thicknessMin: new FormControl("", [Validators.required, CustomValidator.compondValueValidate]),
    thicknessMax: new FormControl("", [Validators.required, CustomValidator.compondValueValidate, MaxthicknessConfirming]),
    temperMin: new FormControl("", [Validators.required, CustomValidator.compondValueValidate]),
    temperMax: new FormControl("", [Validators.required, CustomValidator.compondValueValidate, MaxtemperConfirming]),
    lengthMin: new FormControl("", [CustomValidator.compondValueValidate]),
    lengthMax: new FormControl("", [CustomValidator.compondValueValidate, MaxlengthConfirming]),
    widthMin: new FormControl("",[CustomValidator.compondValueValidate]),
    widthMax: new FormControl("", [CustomValidator.compondValueValidate, MaxwidthConfirming]),
    monthlyRequirement: new FormControl("", [Validators.required, CustomValidator.compondValueValidate])
  });


  product : Product = {};
  // quoteForm : FormGroup;
  isSubmit : boolean = false;
  // blockProduct : Product;
  newArrivals = {
    loading: false,
    products: products.slice(),
    groups: [
      { name: 'All Category', current: true },
      { name: 'Cold Rolled', current: false },
      { name: 'Galvanised', current: false },
      { name: 'Tin Plate', current: false },
      { name: 'Tin Free', current: false },
      { name: 'Black plate', current: false },
      { name: 'Galvalume', current: false }
    ],

    timeout: null, // only for demo

    groupChange: group => {
      // only for demo
      this.newArrivals.loading = true;

      clearTimeout(this.newArrivals.timeout);

      this.newArrivals.timeout = setTimeout(() => {
        const itemsArray = this.newArrivals.products;
        const newItemsArray = [];
        while (itemsArray.length > 0) {
          const randomIndex = Math.floor(Math.random() * itemsArray.length);
          const randomItem = itemsArray.splice(randomIndex, 1)[0];
          newItemsArray.push(randomItem);
        }
        this.newArrivals.products = newItemsArray;
        this.newArrivals.loading = false;
      }, 1000);
    }
  };


  constructor(
    // private commonService: CommonService, 
    public cart: CartService, 
    private cd: ChangeDetectorRef,
    private _fb : FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private _staticData : StaticDataService,
    private toastr: ToastrService,
    public registerService: RegisterService,
    private userService: UserService
  ) {
    this.initializeProduct();
    // this.quoteForm = this._fb.group({
    //   productType : new FormControl('', Validators.required),
    //   productCategory : new FormControl('', Validators.required),
    //   productShape : new FormControl('', Validators.required),
    //   productClass : new FormControl('', Validators.required),
    //   thicknessMin : new FormControl('', Validators.required),
    //   thicknessMax : new FormControl('', ),
    //   widthMin : new FormControl('', Validators.required),
    //   widthMax : new FormControl('', ),
    //   lengthMin : new FormControl('', Validators.required),
    //   lengthMax : new FormControl('', ),
    //   temperMin : new FormControl(''),
    //   temperMax : new FormControl(''), 
    // })
  }

  initializeProduct() {
    this.product.addToCart = false;
    this.product.productId= 0;
      this.product.images  = [];
      this.product.features = [];
      this.product.productType = {};
      this.product.productCategory = {};
      this.product.productShape = {};
      this.product.productClass = {};
      this.product.productFinish = {};
      this.product.productCoating = {};
      this.product.productPackaging = {};
      this.product.productDefect = {};
      this.product.productAnnealing = {};
      this.product.productOiling = {};
      this.product.productOrigin = {};
      this.product.productSurfaceCoating = {};
      this.product.temperMin = {};
      this.product.temperMax = {};
      this.product.productStage = ProductStage.ACTIVE;
      this.product.status = Status.APPROVED;
      this.product.thicknessMin = "";
      this.product.thicknessMax = "";
      this.product.widthMin = "";
      this.product.widthMax = "";
      this.product.lengthMin = "";
      this.product.lengthMax = "";
      this.product.hardnessMin = {};
      this.product.hardnessMax = {};
      this.product.heigth = "";
      this.product.field = "";
      this.product.gwt = "";
      this.product.nwt = "";
      this.product.remarks = "";
      this.product.packagingType="";
      this.product.userProductPreference = UserProductPreference.REQUEST_QUOTATION;
      this.product.description= "";
      this.product.createdBy = "";
      this.product.createdDate= new Date();
      this.product.lastModifiedBy = new Date().toDateString();
      this.product.lastModifiedDate= new Date();
      this.product.title = "";
  }

  ngOnInit() {
    this.getAllProductType();
    this.getAllProductCategory();
    this.getAllProductShape();
    this.getAllProductClass();
    this.getAllProductTemper();
    this.userService.isAuthenticated.subscribe(
      res => {
        this.isLogin = res;
      }, error => {
        console.log(error);
      }
    )

  }

  submitQuoteForm() {
    if(this.isLogin && this.quoteForm.valid) {
    this.userDto = JSON.parse(this.userService.getUser());
    this.tradeArrList = this.userDto.userProductPreference;
    this.tradeArrList.push(this.quoteForm.value);
    this.updateProductPreference();
    
    } else if(this.isLogin && this.quoteForm.invalid) {
      this.toastr.error("Invalid Details!");
    } else {
      // this.toastr.error("You are not Login!");
      this.router.navigateByUrl('/classic/account/login');
      this.quoteForm.reset();
    }
    
  }

  updateProductPreference() {
    let url = '/estelmet/users/saveUserProductPreference';
    this.apiService.put(url, this.userDto.userProductPreference).subscribe(
        res => {
          this.toastr.success("Added successfully");
          this.quoteForm.reset();
        }, error => {
          console.log(error);
        }
    )
  }


  // addToCart(): void {
  //   this.isSubmit = true;
  //   if(this.registerService.tradeDetails.status == 'VALID'){
  //     // if(this.quoteForm.status == 'VALID'){
  //     this.preparequotation();
  //     console.log(this.product);
  //     if (this.product.addToCart) {
  //       return;
  //     }
  //     this.product.addToCart = true;
  //     this.cart.add(this.product, 1).subscribe({
  //       complete: () => {
  //         this.product.addToCart = false;
  //         this.cd.markForCheck();
  //       }
  //     });
  //   } else {
  //     // console.log(this.quoteForm);
  //   }
  // }

  preparequotation(){
    this.product.productShape.id = this.f.productShape.value;
    this.product.productType.id = this.f.productType.value;
    this.product.productCategory.id = this.f.productCategory.value;
    this.product.productClass.id = this.f.productClass.value;
    this.product.thicknessMin = this.f.thicknessMin.value;
    this.product.thicknessMax = this.f.thicknessMax.value;
    this.product.widthMin = this.f.widthMin.value;
    this.product.widthMax = this.f.widthMax.value;
    this.product.lengthMax = this.f.lengthMax.value;
    this.product.lengthMin = this.f.lengthMin.value;
    this.product.temperMin = this.f.temperMin.value;
    this.product.temperMax = this.f.temperMax.value;
  }

  get f() {
    return this.quoteForm.controls;
  }



  // MEthod for getting all product type on main page
  getAllProductType() {
    this._staticData.getProductType().subscribe(data=>{
      this.productTypeList = data;
      console.log("items here" ,this.productTypeList);
    });
  }

  // MEthod for getting all product category on main page
  getAllProductCategory() {
    this._staticData.getAllProductCategory().subscribe(data=>{
      this.productCategoryList = data;
      console.log("items here" ,this.productCategoryList);
    });
  }

  // MEthod for getting all product shape on main page
  getAllProductShape() {
    this._staticData.getProductShape().subscribe(data=>{
      this.productShapeList = data;
      console.log("items here" ,this.productShapeList);
    });
  }

  // MEthod for getting all product class on main page
  getAllProductClass() {
    this._staticData.getProductClass().subscribe(data=>{
      this.productClassList = data;
      console.log("items here" ,this.productClassList);
    });
  }

  // MEthod for getting all product class on main page
  getAllProductTemper() {
    this._staticData.getProductTempor().subscribe(data=>{
      this.productTemperList = data;
      console.log("items here" ,this.productTemperList);
    });
  }

  
}
