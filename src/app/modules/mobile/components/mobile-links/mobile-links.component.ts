import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MobileMenuItem } from '../../../../shared/interfaces/mobile-menu-item';
// import { categoryLinks } from 'src/app/modules/header/components/departments/departments.component';
import { ProductCategory } from 'src/app/shared/interfaces/product';

@Component({
    selector: 'app-mobile-links',
    templateUrl: './mobile-links.component.html',
    styleUrls: ['./mobile-links.component.scss']
})
export class MobileLinksComponent {
    @Input() links: ProductCategory[] = [];
    @Input() level = 0;

    @Output() itemClick: EventEmitter<MobileMenuItem> = new EventEmitter();

    constructor() { }

    onItemClick(item: MobileMenuItem): void {
        this.itemClick.emit(item);
    }
}
