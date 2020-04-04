import { Component, Input } from '@angular/core';
import { NestedLink } from '../../../../shared/interfaces/nested-link';
import { UserService } from 'src/app/shared/services/user.service';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
    selector: 'app-header-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
    @Input() layout: 'classic'|'topbar' = 'classic';
    @Input() items: NestedLink[] = [];

    constructor(
        private userService : UserService,
        private apiService: ApiService
    ) { }

    logout(){
        let url= '/estelmet/logout';
        this.apiService.get(url).subscribe(
            res => {
                // this.userService.purgeAuth();
                this.userService.logout();
            }, error => {
                console.log(error);
            }
        )
    }
}
