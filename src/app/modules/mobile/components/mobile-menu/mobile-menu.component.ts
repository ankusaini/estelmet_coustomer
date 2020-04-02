import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MobileMenuService } from '../../../../shared/services/mobile-menu.service';
import { MobileMenuItem } from '../../../../shared/interfaces/mobile-menu-item';
// import { categoryLinks } from 'src/app/modules/header/components/departments/departments.component';
import { ProductCategory } from 'src/app/shared/interfaces/product';
import { StaticDataService } from 'src/app/shared/services/static-data.service';

@Component({
    selector: 'app-mobile-menu',
    templateUrl: './mobile-menu.component.html',
    styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnDestroy, OnInit {
    private destroy$: Subject<any> = new Subject();

    isOpen = false;
    // links: MobileMenuItem[] = mobileMenu;
    items : ProductCategory[];

    constructor(
        public mobilemenu: MobileMenuService,
        // private commonService : CommonService,
        private _staticData : StaticDataService
    ) { 

    }

    ngOnInit(): void {
        this.mobilemenu.isOpen$.pipe(takeUntil(this.destroy$)).subscribe(isOpen => this.isOpen = isOpen);
        this.getAllProductCategory();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    getAllProductCategory(){
      this._staticData.getAllProductCategory().subscribe(data=>{
          this.items = data
      });
    }

    onItemClick(event: MobileMenuItem): void {
        if (event.type === 'link') {
            this.mobilemenu.close();
        }

        // if (event.data && event.data.language) {
        //     console.log(event.data.language); // change language
        // }
    }
}
