import { Component, OnInit } from '@angular/core';
import { filters } from '../../../../../data/shop-filters';
import { Product } from '../../../../shared/interfaces/product';
import { products } from '../../../../../data/shop-products';
import { ActivatedRoute } from '@angular/router';
import { ProductFilter } from '../../../../shared/interfaces/product-filter';
import { ShopSidebarService } from '../../services/shop-sidebar.service';
import { CommonService } from 'src/app/shared/services/common.service';
import { ShopFilter } from 'src/app/shared/interfaces/sales-filter';
import { StaticDataService } from 'src/app/shared/services/static-data.service';

@Component({
  selector: 'app-grid',
  templateUrl: './page-category.component.html',
  styleUrls: ['./page-category.component.scss'],
  providers: [
    { provide: ShopSidebarService, useClass: ShopSidebarService },
  ]
})
export class PageCategoryComponent implements OnInit {

  products: Product[] = [];
  filters: ProductFilter[];
  shopFilter: ShopFilter = {};
  images = [
    ['assets/images/products/product-1.jpg', 'assets/images/products/product-1-1.jpg'],
    ['assets/images/products/product-2.jpg', 'assets/images/products/product-2-1.jpg'],
    ['assets/images/products/product-3.jpg', 'assets/images/products/product-3-1.jpg'],
    ['assets/images/products/product-4.jpg', 'assets/images/products/product-4-1.jpg'],
    ['assets/images/products/product-5.jpg', 'assets/images/products/product-5-1.jpg'],
    ['assets/images/products/product-6.jpg', 'assets/images/products/product-6-1.jpg'],
    ['assets/images/products/product-7.jpg', 'assets/images/products/product-7-1.jpg'],
    ['assets/images/products/product-8.jpg', 'assets/images/products/product-8-1.jpg'],
    ['assets/images/products/product-9.jpg', 'assets/images/products/product-9-1.jpg'],
    ['assets/images/products/product-10.jpg', 'assets/images/products/product-10-1.jpg'],
    ['assets/images/products/product-11.jpg', 'assets/images/products/product-11-1.jpg'],
    ['assets/images/products/product-12.jpg', 'assets/images/products/product-12-1.jpg'],
    ['assets/images/products/product-13.jpg', 'assets/images/products/product-13-1.jpg'],
    ['assets/images/products/product-14.jpg', 'assets/images/products/product-14-1.jpg'],
    ['assets/images/products/product-15.jpg', 'assets/images/products/product-15-1.jpg'],
    [
      'assets/images/products/product-16.jpg',
      'assets/images/products/product-16-1.jpg',
      'assets/images/products/product-16-2.jpg',
      'assets/images/products/product-16-3.jpg',
      'assets/images/products/product-16-4.jpg'
    ],
  ];

  columns: 3 | 4 | 5 = 3;
  viewMode: 'grid' | 'grid-with-features' | 'list' = 'grid';
  sidebarPosition: 'start' | 'end' = 'start'; // For LTR scripts "start" is "left" and "end" is "right"

  constructor(
    private route: ActivatedRoute,
    private _commonService: CommonService,
    private _staticData : StaticDataService
  ) {
    this.route.data.subscribe(data => {
      this.columns = 'columns' in data ? data.columns : this.columns;
      this.viewMode = 'viewMode' in data ? data.viewMode : this.viewMode;
      this.sidebarPosition = 'sidebarPosition' in data ? data.sidebarPosition : this.sidebarPosition;
    });
    this.shopFilter = {
      status: 'APPROVED',
      productStage: 'ACTIVE',
      pageNumber: '1',
      pageSize: '5',
      thicknessMin: '',
      thicknessMax: '',
      widthMin: '',
      widthMax: '',
      lengthMin: '',
      lengthMax: '',
      productCategory: '',
      productClass: '',
      productShape: ''
    };

    this.getAllFilter();
    // this.getAllProducts();
  }

  ngOnInit() {
    this.route.queryParams.subscribe(param => {
      this.shopFilter.productCategory = param.categoryId.toString();
      this.getAllProducts();
    });
    this.products = products;
  }

  getAllProducts() {
    this._commonService.getAllProduct(this.shopFilter).subscribe(data => {
      this.products = this.setImage(data.body);

      console.log(this.products);
    });
    console.log('final', this.shopFilter);
  }

  filterdata(event) {
    this.shopFilter.thicknessMin = event.thicknessMin;
    this.shopFilter.thicknessMax = event.thicknessMax;
    this.shopFilter.widthMin = event.widthMin;
    this.shopFilter.widthMax = event.widthMax;
    this.shopFilter.lengthMin = event.lengthMin;
    this.shopFilter.lengthMax = event.lengthMax;
    this.shopFilter.productCategory = event.productCategory;
    this.shopFilter.productClass = event.productClass;
    this.shopFilter.productShape = event.productShape;
    this.getAllProducts();
    console.log('main call', event);
  }

  onpageDataDetection(event) {
    this.shopFilter.pageNumber = event.pageNumber;
    this.shopFilter.pageSize = event.pageSize;

    this.getAllProducts();
  }

  // MEthod for getting all product type on main page
  getAllFilter() {
    this._staticData.getSearchFilter().subscribe(data=>{
      this.filters = data;
      if (this.filters) {
        this.filters.forEach(element => {
          if (element.type.includes('checkbox')) {
            element.options.items.forEach(ele => {
              if (ele.checked === 'false') {
                ele.checked = false;
              }
            });
          }
        });
      }
      console.log(this.filters);
    })
  }

  setImage(data: Product[]): Product[] {
    console.log(this.images);
    let i = 0;
    data.forEach(element => {
      element.images = this.images[i % 15];
      i++;
    });
    // let data2 : Product[] = [];
    // for (let i = 0; i < 30; i++) {
    //   const element = data[i];
    //   element.images = this.images[i%15];
    //   data2.push(element);
    // }
    // console.log(data);
    return data;
  }

}
