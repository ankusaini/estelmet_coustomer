import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../../shared/interfaces/product';
import { ShopSidebarService } from '../../services/shop-sidebar.service';

export type Layout = 'grid'|'grid-with-features'|'list';

type pageData = {
    pageNumber : string,
    pageSize : string,
}
@Component({
    selector: 'app-products-view',
    templateUrl: './products-view.component.html',
    styleUrls: ['./products-view.component.scss']
})
export class ProductsViewComponent implements OnInit {

    @Input() products: Product[];
    @Input() layout: Layout = 'grid';
    @Input() grid: 'grid-3-sidebar'|'grid-4-full'|'grid-5-full' = 'grid-3-sidebar';
    @Input() limit = 16;
    @Input() offcanvas: 'always'|'mobile' = 'mobile';
    @Output() pageData : EventEmitter<pageData> = new EventEmitter<pageData>();

    page_data : pageData = {
        pageNumber : "1",
        pageSize : "24"
    }


    constructor(
        public sidebar: ShopSidebarService
    ) { 
        
    }

    ngOnInit(): void {
        this.pageData.next(this.page_data);
        console.log("in product page",this.products);
    }

    setLayout(value: Layout): void {
        this.layout = value;
    }

    onChange() {
        console.log(this.page_data);
        this.pageData.next(this.page_data);
    }

    onPageChange(page: number): void {
        this.page_data.pageNumber = page.toString();
        this.pageData.next(this.page_data);
        console.log(this.page_data.pageNumber,this.page_data.pageSize)
    }
}
