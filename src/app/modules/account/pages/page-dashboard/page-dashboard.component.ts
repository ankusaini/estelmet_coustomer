import { Component, OnInit } from '@angular/core';
import { Order } from '../../../../shared/interfaces/order';
import { orders } from '../../../../../data/account-orders';
import { Address } from '../../../../shared/interfaces/address';
import { addresses } from '../../../../../data/account-addresses';
import { RegisterService } from 'src/app/shared/services/register.service';
import { UserDetail } from 'src/app/shared/interfaces/user';
import { AccountService } from 'src/app/shared/services/account.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
    selector: 'app-page-dashboard',
    templateUrl: './page-dashboard.component.html',
    styleUrls: ['./page-dashboard.component.sass']
})
export class PageDashboardComponent implements OnInit {
    // address: Address = addresses[0];
    orders: Order[] = orders.slice(0, 3);

    public user: UserDetail = {};
    public userId: any;

    constructor(private registerService: RegisterService,
        private accountService: AccountService,
        private userService: UserService,
        private router: Router
        ) {
     }

     ngOnInit() {
        this.getUser();
        this.userId = JSON.parse(this.userService.getUser()).id;
     }

     getUser() {
        //  this.accountService.getLoggedIn().subscribe(
        //      res => {
                this.registerService.findUserById(this.userId).subscribe(
                    res => {
                        this.user = res;
                        console.log(this.user);
                    }, error => {
                        console.log(error);
                    }
                )
        //      }, error => {
        //          this.router.navigateByUrl('/classic/account/login');
        //      }
        //  )
     }
}
