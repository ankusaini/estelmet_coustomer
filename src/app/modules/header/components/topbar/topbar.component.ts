import { Component, Input } from '@angular/core';
import { CurrencyService } from '../../../../shared/services/currency.service';
import { QuickviewService } from 'src/app/shared/services/quickview.service';
import { Product } from 'src/app/shared/interfaces/product';
import { UserService } from 'src/app/shared/services/user.service';
import { logWarnings } from 'protractor/built/driverProviders';

@Component({
    selector: 'app-header-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
    loginOption: boolean;

    @Input() product: Product;
    // languages = [
    //     {name: 'English', image: 'language-1'},
    //     {name: 'French',  image: 'language-2'},
    //     {name: 'German',  image: 'language-3'},
    //     {name: 'Russian', image: 'language-4'},
    //     {name: 'Italian', image: 'language-5'}
    // ];

    // currencies = [
    //     { name: '₹ INDIA', url: '', code: 'IND', symbol: '₹' },
    //     { name: '€ Euro', url: '', code: 'EUR', symbol: '€' },
    //     { name: '£ Pound Sterling', url: '', code: 'GBP', symbol: '£' },
    //     { name: '$ US Dollar', url: '', code: 'USD', symbol: '$' },
    //     { name: '₽ Russian Ruble', url: '', code: 'RUB', symbol: '₽' }
    // ];
    showingQuickview = false;
    constructor(
        public currencyService: CurrencyService,
        public quickview: QuickviewService,
        private userService: UserService,
    ) {


    }

    setCurrency(currency): void {
        this.currencyService.options = {
            code: currency.code,
            display: currency.symbol,
        };
    }


}
