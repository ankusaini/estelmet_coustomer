import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { ToastrService } from 'ngx-toastr';

function passwordConfirming(c: AbstractControl): any {
    if (!c.parent || !c) return;
    const pwd = c.parent.get("newPassword");
    const cpwd = c.parent.get("confirmPassword");
    if (!pwd || !cpwd) return;
    if (pwd.value !== cpwd.value) {
      return { invalid: true };
    }
  }

@Component({
    selector: 'app-page-password',
    templateUrl: './page-password.component.html',
    styleUrls: ['./page-password.component.sass']
})
export class PagePasswordComponent implements OnInit {

    public userId : any;
    public passwordForm: FormGroup = new FormGroup({
        oldPassword: new FormControl('', [Validators.required]),
        newPassword: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [Validators.required, passwordConfirming])
    });

    constructor(
        private userService: UserService,
        private apiService: ApiService,
        private toastr: ToastrService
    ) { }

    ngOnInit() {
       this.userId =  JSON.parse(this.userService.getUser()).id;
    }

    submitPassword() {
        this.apiService.post(this.passwordForm.value.oldPassword, 
            this.passwordForm.value.newPassword, this.userId ).subscribe(
                res => {
                    this.toastr.success("Password Changed Successfully!");
                    this.passwordForm.reset();
                }, error => {
                    console.log(error);
                }
            )
    }
}
