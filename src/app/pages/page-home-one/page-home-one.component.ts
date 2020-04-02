import { Component } from '@angular/core';
import { posts } from '../../../data/blog-posts';
import { brands } from '../../../data/shop-brands';
import { products } from '../../../data/shop-products';
import { categories } from '../../../data/shop-block-categories';
import { CommonService } from "src/app/shared/services/common.service";
import { SaleList } from '../../shared/interfaces/latestOffers';

 
@Component({
    selector: 'app-home',
    templateUrl: './page-home-one.component.html',
    styleUrls: ['./page-home-one.component.scss']
})
export class PageHomeOneComponent {
    products = products;
    categories = categories;
    posts = posts;
    brands = brands;

    //As of now , taking empty array as no model available
    public generalOffersList: SaleList[];
    public hotOffersList: SaleList[];
    public latestOffersList:SaleList[];

    columns = [
        {
            header: 'Top Rated Products',
            products: products.slice(0, 3)
        },
        {
            header: 'Special Offers',
            products: products.slice(3, 6)
        },
        {
            header: 'Bestsellers',
            products: products.slice(6, 9)
        }
    ];

    featuredProducts = {
        loading: false,
        products: products.slice(),
        groups: [
            {name: 'All Category', current: true},
            {name: 'Cold Rolled', current: false},
            {name: 'Galvanised', current: false},
            {name: 'Tin Plate', current: false},
            {name: 'Tin Free', current: false},
            {name: 'Black plate', current: false},
            {name: 'Galvalume', current: false}
        ],

        timeout: null, // only for demo

        groupChange: group => {
            // only for demo
            this.featuredProducts.loading = true;

            clearTimeout(this.featuredProducts.timeout);

            this.featuredProducts.timeout = setTimeout(() => {
                const itemsArray = this.featuredProducts.products;
                const newItemsArray = [];
                while (itemsArray.length > 0) {
                    const randomIndex = Math.floor(Math.random() * itemsArray.length);
                    const randomItem = itemsArray.splice(randomIndex, 1)[0];
                    newItemsArray.push(randomItem);
                }
                this.featuredProducts.products = newItemsArray;
                this.featuredProducts.loading = false;
            }, 1000);
        }
    };

    newArrivals = {
        loading: false,
        products: products.slice(),
        groups: [
            {name: 'All Category', current: true},
            {name: 'Cold Rolled', current: false},
            {name: 'Galvanised', current: false},
            {name: 'Tin Plate', current: false},
            {name: 'Tin Free', current: false},
            {name: 'Black plate', current: false},
            {name: 'Galvalume', current: false}
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

      ngOnInit() {
      this.getAllGeneralOffers();
      this.getAllHotOffer();
      this.getAllLatestOffer();      
     }



  constructor(
    private _commonService:CommonService
  ) { }

       //MEthod for getting all product category on main page
   getAllGeneralOffers(){
    this._commonService.getAllGeneralOffers().subscribe(data=>{
      this.generalOffersList = data.salesList;
      this.generalOffersList = this.setImage(this.generalOffersList);
      console.log("all genral offers"+this.generalOffersList);
    },error=>{
      console.log('error');
    });
  }



         //MEthod for getting all product category on main page
   getAllHotOffer(){
    this._commonService.getAllHotOffer().subscribe(data=>{
      this.hotOffersList=data.salesList;
      this.hotOffersList = this.setImage(this.hotOffersList);
      console.log("hotoffer",this.hotOffersList);
    },error=>{
      console.log('error');
    });
  }


   //MEthod for getting all product shape on main page
   getAllLatestOffer(){
      
    this._commonService.getAllLatestOffer().subscribe(data=>{
      this.latestOffersList = data.salesList;
      console.log(this.latestOffersList);
      this.latestOffersList = this.setImage(this.latestOffersList);
      console.log("all hotOffersList offers"+JSON.stringify(this.hotOffersList));
    },error=>{
      console.log('error');
    });
  }

  setImage(data : SaleList[]) : SaleList[] {
    console.log(this.images);
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      element.images = this.images[i%15];
    }
    console.log(data);
    return data;
  }

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
  ]
}
