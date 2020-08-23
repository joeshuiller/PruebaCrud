import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListnegadoComponent } from './listnegado.component';

const routes: Routes = [
  {
    path: '', component: ListnegadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListnegadoRoutingModule { }
