import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.service';
import { SaleOffer } from 'src/app/shared/interfaces/saleOfferList';

@Component({
  selector: 'app-purchase-offer-list',
  templateUrl: './purchase-offer-list.component.html',
  styleUrls: ['./purchase-offer-list.component.css']
})
export class PurchaseOfferListComponent implements OnInit {

  purchaseOffer : SaleOffer[];

  constructor(
    private route : ActivatedRoute,
      private _commonService : CommonService
  ) {
    this.route.queryParams.subscribe(param=>{
      this.getAllPurchaseOfferList(param.id);
    });
   }

   getAllPurchaseOfferList(saleId){
    this._commonService.getAllProductsOfASales(saleId).subscribe(data => {
        this.purchaseOffer = data;
        console.log(this.purchaseOffer);
    })
}

  ngOnInit() {
  }

}
