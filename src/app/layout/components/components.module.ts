import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { AlertService } from './service/alert.service';
import { StorybookLibraryModule } from 'intergation-storybook-library';
import { ProductComponent } from './product/product.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { MaterialModule } from 'src/app/material.modules';

@NgModule({
  declarations: [
    UserComponent,
    ProductComponent,
    ProductFormComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    StorybookLibraryModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [
    AlertService
  ]
})
export class ComponentsModule { }
