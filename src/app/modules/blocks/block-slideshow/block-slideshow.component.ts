import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DirectionService } from '../../../shared/services/direction.service';

@Component({
    selector: 'app-block-slideshow',
    templateUrl: './block-slideshow.component.html',
    styleUrls: ['./block-slideshow.component.scss']
})
export class BlockSlideshowComponent {
    @Input() withDepartments = false;

    options = {
        nav: false,
        dots: true,
        loop: true,
        responsive: {
            0: {items: 1}
        },
        rtl: this.direction.isRTL()
    };

    slides = [
        {
            title: 'Largest Stock<br>of Tin Mill Products',
            text: 'We have a huge variety of Tin Mill Products.<br>Stay engaged & connect with us.',
            image_classic: 'assets/images/slides/slide-1.jpg',
            image_full: 'assets/images/slides/slide-1-full.jpg',
            image_mobile: 'assets/images/slides/slide-1-mobile.jpg'
        },
        {
            title: 'Customise Your Own<br>Sizes & Requirements',
            text: 'We are offer you to customise your own , <br>sizes & requirements of steel products.',
            image_classic: 'assets/images/slides/slide-2.jpg',
            image_full: 'assets/images/slides/slide-2-full.jpg',
            image_mobile: 'assets/images/slides/slide-2-mobile.jpg'
        },
        {
            title: 'Buy Now, Pay Later',
            text: 'Buy Now, Pay Later facility to support your business.<br>Etiam pharetra laoreet dui quis molestie.',
            image_classic: 'assets/images/slides/slide-3.jpg',
            image_full: 'assets/images/slides/slide-3-full.jpg',
            image_mobile: 'assets/images/slides/slide-3-mobile.jpg'
        }
    ];

    constructor(
        public sanitizer: DomSanitizer,
        private direction: DirectionService
    ) { }
}
