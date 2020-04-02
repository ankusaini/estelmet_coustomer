import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { products } from 'src/data/shop-products';
import { ApiService } from 'src/app/shared/services/api.service';
import { CommonService } from 'src/app/shared/services/common.service';
import { SaleList } from 'src/app/shared/interfaces/latestOffers';
import { CartService } from 'src/app/shared/services/cart.service';
import { Product, UserProductPreference, Status, ProductStage, ProductType, ProductCategory, ProductShape, ProductClass, ProductTemper } from 'src/app/shared/interfaces/product';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { StaticDataService } from 'src/app/shared/services/static-data.service';

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
  product : Product = {};
  quoteForm : FormGroup;
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
    private _staticData : StaticDataService
  ) {
    this.initializeProduct();
    this.quoteForm = this._fb.group({
      productType : new FormControl('', Validators.required),
      productCategory : new FormControl('', Validators.required),
      productShape : new FormControl('', Validators.required),
      productClass : new FormControl('', Validators.required),
      thicknessMin : new FormControl('', Validators.required),
      thicknessMax : new FormControl('', ),
      widthMin : new FormControl('', Validators.required),
      widthMax : new FormControl('', ),
      lengthMin : new FormControl('', Validators.required),
      lengthMax : new FormControl('', ),
      temperMin : new FormControl(''),
      temperMax : new FormControl(''), 
    })
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
  }

  addToCart(): void {
    this.isSubmit = true;
    if(this.quoteForm.status == 'VALID'){
      this.preparequotation();
      console.log(this.product);
      if (this.product.addToCart) {
        return;
      }
      this.product.addToCart = true;
      this.cart.add(this.product, 1).subscribe({
        complete: () => {
          this.product.addToCart = false;
          this.cd.markForCheck();
        }
      });
    } else {
      console.log(this.quoteForm);
    }
  }

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
