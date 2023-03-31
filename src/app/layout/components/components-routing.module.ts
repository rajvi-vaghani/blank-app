import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      {
        path: '',
        component: UserComponent
      },
      {
        path: 'user',
        component: UserComponent
      },
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: 'product/update/:id',
        component: ProductComponent
      },
      {
        path: 'product/delete/:id',
        component: ProductComponent
      },
      {
        path: 'product/add',
        component: ProductComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
