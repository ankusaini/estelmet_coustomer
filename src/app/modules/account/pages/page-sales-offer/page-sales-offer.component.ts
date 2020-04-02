import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';
import { SaleList } from 'src/app/shared/interfaces/latestOffers';

@Component({
  selector: 'app-page-sales-offer',
  templateUrl: './page-sales-offer.component.html',
  styleUrls: ['./page-sales-offer.component.css']
})
export class PageSalesOfferComponent implements OnInit {

  generalOffersList: SaleList[];

  constructor(
    private _commonService : CommonService
  ) { }

  ngOnInit() {
    this.getAllGeneralOffers();
  }


  //MEthod for getting all product category on main page
  getAllGeneralOffers(){
    this._commonService.getAllGeneralOffers().subscribe(data=>{
      this.generalOffersList = data.salesList;
      this.getAllHotOffer();
      console.log("all genral offers"+this.generalOffersList);
    },error=>{
      console.log('error');
    });
  }

  //MEthod for getting all product category on main page
  getAllHotOffer(){
    this._commonService.getAllHotOffer().subscribe(data=>{
     this.generalOffersList = this.generalOffersList.concat(data.salesList);
     this.getAllLatestOffer();
    },error=>{
      console.log('error');
    });
  }


    //MEthod for getting all product shape on main page
    getAllLatestOffer(){
      
    this._commonService.getAllLatestOffer().subscribe(data=>{
      this.generalOffersList = this.generalOffersList.concat(data.salesList);
      this.generalOffersList = this.setImage(this.generalOffersList);
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
