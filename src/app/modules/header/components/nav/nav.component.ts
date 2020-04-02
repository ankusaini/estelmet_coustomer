import { Component, Input } from '@angular/core';
import { CartService } from '../../../../shared/services/cart.service';
import { WishlistService } from '../../../../shared/services/wishlist.service';
import { RootService } from '../../../../shared/services/root.service';
import { CompareService } from 'src/app/shared/services/compare.service';

@Component({
    selector: 'app-header-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent {
    @Input() departments = true;
    @Input() logo = false;
    @Input() search = false;

    constructor(
        public root: RootService,
        public cart: CartService,
        public wishlist: WishlistService,
        public compare: CompareService
    ) { }
}
