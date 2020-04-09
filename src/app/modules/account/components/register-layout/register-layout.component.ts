import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/shared/services/currency.service';
import { QuickviewService } from 'src/app/shared/services/quickview.service';
import { UserService } from 'src/app/shared/services/user.service';
import { JwtService } from 'src/app/shared/services/jwt.service';

@Component({
  selector: 'app-register-layout',
  templateUrl: './register-layout.component.html',
  styleUrls: ['./register-layout.component.css']
})
export class RegisterLayoutComponent implements OnInit {
  links: {label: string; url: string; loginRequired : boolean}[] = [
    {label: 'Personal Details', url: './personal', loginRequired : false},
    {label: 'Business Details', url: './business', loginRequired : false},
    {label: 'Key Person Details', url: './keyperson', loginRequired : false},
    {label: 'Trade Details', url: './trade', loginRequired : false},
    {label: 'Confirmation', url: './confirm', loginRequired : false},
];
userLoggedIn : boolean;
  constructor(
    public currencyService: CurrencyService,
    public quickview: QuickviewService,
    private _userService: UserService,
    private _jwtService : JwtService
  ) { 
    this.getInitialStatus();
        this._userService.isAuthenticated.subscribe((res) => {
            if (res) {
                this.userLoggedIn = true;
            } else {
                this.userLoggedIn = false;
            }
        });
  }

  ngOnInit() {
  }

  getInitialStatus() {
    const token = this._jwtService.getToken();
    if (token) {
        this.userLoggedIn = true;
    } else {
        this.userLoggedIn = false;
    }
}

}
