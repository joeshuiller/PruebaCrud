import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListcloseComponent } from './listclose.component';

const routes: Routes = [
  {
    path: '', component: ListcloseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListcloseRoutingModule { }
