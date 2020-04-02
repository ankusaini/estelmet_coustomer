import { Component, Input } from '@angular/core';
import { SaleList } from '../../../shared/interfaces/latestOffers';

@Component({
    selector: 'app-block-products',
    templateUrl: './block-products.component.html',
    styleUrls: ['./block-products.component.scss']
})
export class BlockProductsComponent {
    @Input() header: string;
    @Input() layout: 'large-first'|'large-last' = 'large-first';
    @Input() products: SaleList[];

    get large(): any {
        // if (this.layout == 'large-first' && this.products.length > 0) {
            return this.products[0];
        // } else if (this.layout === 'large-last' && this.products.length > 6) {
        //     return this.products[6];
        // }
    }

    get smalls(): any[] {
        // if (this.layout === 'large-first') {
            return this.products.slice(1, this.products.length);
        // } else  {
        //     return this.products.slice(0, 6);
        // }
    }

    constructor() { }

    ngOnInit(): void {
       console.log("xyz",this.products);
       console.log(this.layout);
       console.log(this.large);
       console.log("small",this.smalls);
    }
}
