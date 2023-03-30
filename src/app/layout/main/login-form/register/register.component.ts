import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../services/user-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerModel = {
    email: {
      type: "text",
      value: "",
      appearance: "outline",
      placeholder: "Enter email",
      name: 'email',
      rules: {
        required: true
      }
    },
    fullName: {
      type: "text",
      value: "",
      appearance: "outline",
      placeholder: "Enter fullName",
      name: 'fullName',
      rules: {
        required: true
      }
    },
    mobileNumber: {
      type: "number",
      value: "",
      appearance: "outline",
      placeholder: "Enter mobileNumber",
      name: 'mobileNumber',
      rules: {
        required: true
      }
    },
    password: {
      type: "text",
      value: "",
      appearance: "outline",
      placeholder: "Enter password",
      name: 'password',
      rules: {
        required: true
      }
    },
  }

  constructor(private user_service: UserService, public snackBar: MatSnackBar) {

  }

  submit(registerform: any) {
    const user = {
      email: registerform.value.email,
      fullName: registerform.value.fullName,
      mobileNumber: registerform.value.mobileNumber,
      "userRole": [
        {
          "userRoleId": 0,
          "userId": 0,
          "roleType": 1
        }
      ],
      roleId: '1',
      password: registerform.value.password,
    }

    this.user_service.createUser(user).subscribe((res: any) => {
      if (res.isSuccess) {
        this.snackBar.open('Register Successfully !', 'Close', {
          duration: 2000,
        });
      }
    })
  }

}
