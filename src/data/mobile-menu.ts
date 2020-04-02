import { MobileMenuItem } from '../app/shared/interfaces/mobile-menu-item';

export const mobileMenu: MobileMenuItem[] = [
   {type: 'link', label: 'Home', url: './home'},
    {type: 'link', label: 'About Us', url: './site/about-us'},
    {type: 'link', label: 'Latest News', url: './blog/category-classic'},
    {type: 'link', label: 'Store Location', url: './site/store'},
    {type: 'link', label: 'Career', url: './site/career'},
    {type: 'link', label: 'Contact Us', url: './site/contact-us'},
    {type: 'link', label: 'Purchase Offer', url: './account/purchaseOffer'},
    {type: 'link', label: 'Sales Offer', url: './account/saleseOffer'},
    {type: 'link', label: 'Login', url: './account/login'},
    {type: 'link', label: 'Register', url: './account/personal'},
    {type: 'button', label: 'My Account', children: [
        {type: 'link', label: 'Dashboard', url: './account/dashboard'},
        {type: 'link', label: 'Edit Profile', url: './account/personal'},
        {type: 'link', label: 'Order History', url: './account/orders'},
        {type: 'link', label: 'Addresses', url: './account/addresses'},
        {type: 'link', label: 'Password', url: './account/password'},
        {type: 'link', label: 'Logout', url: './account/login'}
    ]},
];
