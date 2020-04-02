import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';
import { SaleList } from 'src/app/shared/interfaces/latestOffers';
@Component({
  selector: 'app-page-purchase-offer',
  templateUrl: './page-purchase-offer.component.html',
  styleUrls: ['./page-purchase-offer.component.css']
})
export class PagePurchaseOfferComponent implements OnInit {

  purchaseList: SaleList[];

  constructor(
    private _commonService : CommonService
  ) { }

  ngOnInit() {
  }

    //MEthod for getting all product category on main page
    getAllGeneralOffers(){
      this._commonService.getAllGeneralOffers().subscribe(data=>{
        this.purchaseList = data.salesList;
        this.purchaseList = this.setImage(this.purchaseList);
        console.log("all purchaseList"+this.purchaseList);
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
