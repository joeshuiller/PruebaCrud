import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children:[
      {
        path: '',
        redirectTo: 'content',
        pathMatch: 'full'
      },
      {
        path: 'content',
        loadChildren: () => import('./content/content.module').then( m => m.ContentModule)
      },
      {
        path: 'listusers',
        loadChildren: () => import('./listusers/listusers.module').then( m => m.ListusersModule)
      },
      {
        path: 'list/negado',
        loadChildren: () => import('./listnegado/listnegado.module').then( m => m.ListnegadoModule)
      },
      {
        path: 'list/activ',
        loadChildren: () => import('./listuactive/listuactive.module').then( m => m.ListuactiveModule)
      },
      {
        path: 'list/close',
        loadChildren: () => import('./listclose/listclose.module').then( m => m.ListcloseModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
