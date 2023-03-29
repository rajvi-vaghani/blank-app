import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [FormGroupDirective]
})
export class LoginComponent implements OnInit {

  formGroup !: FormGroup

  mat_field = {
    email: {
      type: "text",
      value: "",
      appearance: "outline",
      placeholder: "Enter email",
      name: 'email',
      formControlName: 'email',
      rules: {
        required: true
      }
    },
    name: {
      type: "text",
      value: "",
      appearance: "outline",
      placeholder: "Enter email",
      name: 'name',
      formControlName: 'name',
      rules: {
        required: true
      }
    },
    test: {
      type: "text",
      value: "",
      appearance: "outline",
      placeholder: "Enter email",
      name: 'test',
      formControlName: 'test',
      rules: {
        required: true
      }
    },
  }
  constructor(private formgroupDirective: FormGroupDirective) {
    this.formGroup = this.formgroupDirective.control

  }

  ngOnInit(): void {

  }

  onSubmit() {
    // this.login()
  }

  parentFunction(parameter: any) {
    console.log(parameter);
  }

}
