import { NgModule } from '@angular/core';
import { Routes, RouterModule,} from '@angular/router';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./@pages/login/login.module').then( m => m.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./@pages/home/home.module').then( m => m.HomeModule),
    canActivate: [LoginGuard],
  },
  {
    path: 'admin',
    loadChildren: () => import('./@pages/admin/admin.module').then( m => m.AdminModule),
    canActivate: [LoginGuard],
  },
  {
    path: 'register',
    loadChildren: () => import('./@pages/register/register.module').then( m => m.RegisterModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
