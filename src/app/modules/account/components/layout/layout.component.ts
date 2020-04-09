import { Component } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.sass']
})
export class LayoutComponent {
    links: {label: string; url: string}[] = [
        {label: 'Dashboard', url: './dashboard'},
        {label: 'Edit Profile', url: './profile'},
        {label: 'Edit Business Details', url: './business'},
        {label: 'Edit KeyPerson Details', url: './keyperson'},
        {label: 'Edit Product Prefrences', url: './trade'},
        {label: 'Order History', url: './orders'},
        {label: 'Addresses', url: './addresses'},
        {label: 'Password', url: './password'},
        {label: 'Logout', url: '/'}
    ];

    constructor() { }

}
