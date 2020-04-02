import { Component } from '@angular/core';
// import { products } from '../../../../../data/shop-products';
import { Product } from '../../../../shared/interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { categories } from '../../../../../data/shop-widget-categories';
import { map } from 'rxjs/operators';
import { CommonService } from '../../../../shared/services/common.service';

@Component({
    selector: 'app-page-product',
    templateUrl: './page-product.component.html',
    styleUrls: ['./page-product.component.scss']
})
export class PageProductComponent {
    categories = categories;
    products: Product[];
    product: Product;
    layout: 'standard' | 'columnar' | 'sidebar' = 'standard';
    sidebarPosition: 'start' | 'end' = 'start'; // For LTR scripts "start" is "left" and "end" is "right"

    constructor(private route: ActivatedRoute, private common: CommonService) {
        this.route.data.subscribe(data => {
            this.layout = 'layout' in data ? data.layout : this.layout;
            this.sidebarPosition = 'sidebarPosition' in data ? data.sidebarPosition : this.sidebarPosition;
        });
        this.route.params.pipe(map(params => {
            if (params.hasOwnProperty('id')) {
                // console.log('pro id - ', params.id);
                // const product = products.find(eachProduct => eachProduct.productId === parseFloat(params.id));
                common.getProductById(params.id).subscribe(
                    (data) => {
                    this.product = data;
                    console.log(this.product);
                    },
                    (error) => console.log('error', error)
                );
                // console.log('pro-', product);
                // if (product) {
                //     return product;
                // }
            }
            return this.product;
        })).subscribe(product => this.product = product);
    }
}
