import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/layout/components/service/alert.service';
import { UserService } from '../services/user-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginModel = {
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
  private token: string
  private currentuser: {}

  constructor(private user_service: UserService, private router: Router, private alertService: AlertService,) {

  }

  ngOnInit(): void {

  }

  submit(loginform: any) {
    const user = {
      email: loginform.value.email,
      password: loginform.value.password,
    }
    this.user_service.login(user).subscribe((res: any) => {
      if (res.isSuccess) {
        this.alertService.openSnackBar('Login Successfully!');
        this.token = res.responseData.token
        this.currentuser = [{
          email: res.responseData.email,
          userRole: res.responseData.userRole,
          userid: res.responseData.id,
          token: res.responseData.token
        }]

        localStorage.setItem('currentUser', JSON.stringify(this.currentuser))
        this.router.navigateByUrl('/component')
      } else {
        this.alertService.openSnackBar('Incorrect email or password');
      }

    })
  }

}
