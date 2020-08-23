import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListusersComponent } from './listusers.component';

const routes: Routes = [
  {
    path: '', component: ListusersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListusersRoutingModule { }
