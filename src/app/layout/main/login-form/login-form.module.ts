import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginFormRoutingModule } from './login-form-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StorybookLibraryModule } from 'intergation-storybook-library';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AlertService } from '../../components/service/alert.service';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    LoginFormRoutingModule,
    StorybookLibraryModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    AlertService
  ]
})
export class LoginFormModule { }
