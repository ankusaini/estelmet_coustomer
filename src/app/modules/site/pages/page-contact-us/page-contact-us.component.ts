import { Component } from '@angular/core';

@Component({
    selector: 'app-contact-us',
    templateUrl: './page-contact-us.component.html',
    styleUrls: ['./page-contact-us.component.scss']
})
export class PageContactUsComponent {
    name = '';
    constructor() { }
    onKey(event: any) { // without type info
        if (event.target.value === '') {
            console.log(event.target.value);
            this.name = 'Name should be required';
            return true;
        } else if (event.target.value.length !== 10){
            this.name = 'should be 10 digit';
            return true;
        } else {
            this.name = '';
            return false;
        }
    }
}
