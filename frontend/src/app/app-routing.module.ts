import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'auth', pathMatch: 'full'},
      {path: 'auth', loadChildren: () => import('./core/components/auth/auth.module').then(m => m.AuthModule)},
      {path: 'admin', loadChildren: () => import('./core/components/admin/admin.module').then(m => m.AdminModule)},
      {path: 'user', loadChildren: () => import('./core/components/user/user.module').then(m => m.UserModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
