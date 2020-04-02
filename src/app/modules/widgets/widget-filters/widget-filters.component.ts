import { Component, Inject, Input, PLATFORM_ID, Output, EventEmitter, OnInit } from '@angular/core';
import { ProductFilter } from '../../../shared/interfaces/product-filter';
import { isPlatformBrowser } from '@angular/common';
import { DirectionService } from '../../../shared/services/direction.service';
import { ShopFilter } from 'src/app/shared/interfaces/sales-filter';

@Component({
    selector: 'app-widget-filters',
    templateUrl: './widget-filters.component.html',
    styleUrls: ['./widget-filters.component.scss']
})
export class WidgetFiltersComponent implements OnInit {

    @Input() filters: ProductFilter[] = [];
    @Input() offcanvas: 'always' | 'mobile' = 'mobile';
    @Output() filterProduct: EventEmitter<ShopFilter> = new EventEmitter<ShopFilter>();


    isPlatformBrowser = isPlatformBrowser(this.platformId);
    rightToLeft = false;
    filterdata: ShopFilter = {};

    constructor(
        @Inject(PLATFORM_ID) private platformId: any,
        private direction: DirectionService
    ) {
        this.rightToLeft = this.direction.isRTL();
        console.log(this.filters);
    }

    ngOnInit(): void {
        console.log(this.filters);
    }

    statusChnage(filter, item) {
        console.log(item);
        item.checked = !item.checked;
        console.log(this.filters);
    }

    filter() {
        console.log('filter');
        this.filterProduct.next(this.updateFilter());
    }

    reset() {
        this.filterdata = {
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
        this.filterProduct.next(this.filterdata);

    }

    updateFilter(): ShopFilter {
        console.log('updatefilter ', this.filters);
        this.filters.forEach(element => {
            if (element.name === 'Category') {
                const temp: any[] = [];
                element.options.items.forEach(data => {
                    if (data.checked) {
                        temp.push(data.id);
                    }
                });
                this.filterdata.productCategory = temp.toString();
            } else if (element.name === 'Shape') {
                const temp: any[] = [];
                element.options.items.forEach(data => {
                    if (data.checked) {
                        temp.push(data.id);
                    }
                });
                this.filterdata.productShape = temp.toString();
            } else if (element.name === 'Class') {
                const temp: any[] = [];
                element.options.items.forEach(data => {
                    if (data.checked) {
                        temp.push(data.id);
                    }
                });
                this.filterdata.productClass = temp.toString();
            } else if (element.name === 'Thickness') {
                this.filterdata.thicknessMax = element.options.to.toString();
                this.filterdata.thicknessMin = element.options.from.toString();
            } else if (element.name === 'Width') {
                this.filterdata.widthMax = element.options.to.toString();
                this.filterdata.widthMin = element.options.from.toString();
            } else if (element.name === 'Length') {
                this.filterdata.lengthMax = element.options.to.toString();
                this.filterdata.lengthMin = element.options.from.toString();
            }
        });
        return this.filterdata;
    }
}
