import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StoreService {
    address = 'J-18, MIDC Taloja, District Raigad,';
    address2 = 'Navi Mumbai - 410208 Maharashtra.';
    email = 'enquiry@gpglobal.com';
    phone = ['+91-9136968509', '+91-9136968508'];

    get primaryPhone(): string|null {
        return this.phone.length > 0 ? this.phone[0] : null;
    }

    constructor() { }
}
