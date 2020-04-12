import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { AccountService } from 'src/app/shared/services/account.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.sass']
})
export class LayoutComponent {
    links: {label: string; url: string}[] = [
        {label: 'Dashboard', url: './dashboard'},
        {label: 'Edit Profile', url: './profile'},
        {label: 'Edit Business Details', url: './editBusiness'},
        {label: 'Edit KeyPerson Details', url: './editKeyperson'},
        {label: 'Edit Product Prefrences', url: './editTrade'},
        {label: 'Order History', url: './orders'},
        {label: 'Addresses', url: './addresses'},
        {label: 'Password', url: './password'},
        {label: 'Logout', url: '/'}
    ];

    constructor(private accountService: AccountService) { }

    logout() {
        this.accountService.logout();
    }

}
