import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children:[
      {
        path: '',
        redirectTo: 'contenido',
        pathMatch: 'full'
      },
      {
        path: 'contenido',
        loadChildren: () => import('./cont/cont.module').then( m => m.ContModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilModule)
      },
      {
        path: 'historial',
        loadChildren: () => import('./histarial/histarial.module').then( m => m.HistarialModule)
      },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
