import { Component, Input } from '@angular/core';
import { NestedLink } from '../../../../shared/interfaces/nested-link';
import { UserService } from 'src/app/shared/services/user.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { AccountService } from 'src/app/shared/services/account.service';

@Component({
    selector: 'app-header-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
    @Input() layout: 'classic'|'topbar' = 'classic';
    @Input() items: NestedLink[] = [];

    constructor(
        private accountService: AccountService
    ) { }

    logout(){
        this.accountService.logout();
        
    }
}
