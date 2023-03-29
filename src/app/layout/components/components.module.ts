import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { AlertService } from './service/alert.service';
import { StorybookLibraryModule } from 'intergation-storybook-library';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    StorybookLibraryModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AlertService
  ]
})
export class ComponentsModule { }
