import { Component, Input } from '@angular/core';
import { NestedLink } from '../../../../shared/interfaces/nested-link';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
    selector: 'app-header-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
    @Input() layout: 'classic'|'topbar' = 'classic';
    @Input() items: NestedLink[] = [];

    constructor(
        private _userService : UserService,
    ) { }

    logout(){
        this._userService.purgeAuth();
    }
}
