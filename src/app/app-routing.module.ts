import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './layout/main/login-form/services/authguard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layout/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'component',
    loadChildren: () => import('./layout/components/components.module').then(m => m.ComponentsModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//        component/user - user grid