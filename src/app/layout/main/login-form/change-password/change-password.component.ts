import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertService } from 'src/app/layout/components/service/alert.service';
import { UserService } from '../services/user-api.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {

  changepassword = {
    current_password: {
      type: "text",
      value: "",
      appearance: "outline",
      placeholder: "Enter current password",
      name: 'current_password',
      rules: {
        required: true
      }
    },
    new_password: {
      type: "text",
      value: "",
      appearance: "outline",
      placeholder: "Enter new password",
      name: 'new_password',
      rules: {
        required: true
      }
    },
  }

  constructor(private user_service: UserService, private alertService: AlertService,) {

  }


  submit(formgroup: any) {
    const userid = JSON.parse(localStorage.getItem('currentUser'))[0].userid

    const user = {
      id: userid,
      currentPassword: formgroup.value.current_password,
      password: formgroup.value.new_password
    }

    this.user_service.changepassowrd(user).subscribe((res: any) => {
      if (res.isSuccess) {
        this.alertService.openSnackBar('Password Change Successfully!');
      }
    })
  }
}