import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.service';
import { SaleOffer } from 'src/app/shared/interfaces/saleOfferList';
import { Product } from 'src/app/shared/interfaces/product';
import { Subject } from 'rxjs';
import { CartService } from 'src/app/shared/services/cart.service';
import { element } from 'protractor';

@Component({
  selector: 'app-sales-offer-list',
  templateUrl: './sales-offer-list.component.html',
  styleUrls: ['./sales-offer-list.component.css']
})
export class SalesOfferListComponent implements OnInit {

  private destroy$: Subject<void> = new Subject();
  
  @Input() siblings = 1;
  @Input() current = 1;
  @Input() total = 1;

  @Output() pageChange: EventEmitter<number> = new EventEmitter();
  selectedList : Product[] = [];
  markAll : boolean = false;
  pages: number[] = [];
  saleOfferList : Product[];
  constructor(
      private route : ActivatedRoute,
      private _commonService : CommonService,
      private cd: ChangeDetectorRef,
      public cart: CartService,
  ) { 
      this.route.queryParams.subscribe(param=>{
        this.getAllSalesOfferList(param.id);
      })
    }

    ngOnInit(): void {
        this.calc();
    }

    getAllSalesOfferList(saleId){
        this._commonService.getAllProductsOfASales(saleId).subscribe(data => {
            this.saleOfferList = data;
            this.saleOfferList.forEach(element => {
                element['checked'] = false;
                element['addToCart'] = false;
            });
            console.log("updated list",this.saleOfferList);          
        })
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.calc();
    }

    setPage(value: number): void {
        if (value < 1 || value > this.total || value === this.current) {
            return;
        }

        this.current = value;
        this.pageChange.emit(this.current);
        this.calc();
    }

    trackByFn(index: number): number {
        return index;
    }

    private calc(): void {
        const min = Math.max(1, this.current - this.siblings - Math.max(0, this.siblings - this.total + this.current));
        const max = Math.min(this.total, min + this.siblings * 2);

        this.pages = [];

        for (let i = min; i <= max; i++) {
            this.pages.push(i);
        }
    }

    addToCart(data): void {
        if (data.addToCart) {
            return;
        }
        data.addToCart = true;
        this.cart.add(data, 1).subscribe({
            complete: () => {
                data.addToCart = false;
                this.cd.markForCheck();
            }
        });
    }

    addToList(data : Product, event?:any){
        // console.log(event, data)
        if(event.target.checked){
            data.checked = true;
            console.log(data);
            this.selectedList.push(data);
        } else {
            data.checked = false;
            this.selectedList = this.selectedList.filter(element=>{
                return element != data;
            })
        }
        
    }

    putAllSelectedItemIntoCart() {
        this.selectedList.forEach(element => {
            this.addToCart(element);
        })
    }

    markAllSelected(event) {
        this.markAll = !this.markAll;
        if(event.target.checked){ 
            this.selectedList = [];
            this.saleOfferList.forEach(element =>{
                element.checked = true;
                this.selectedList.push(element);
            })
        } else {
            this.selectedList = [];
            this.saleOfferList.forEach(element =>{
                element.checked = false;
            })
        }
    }

}
