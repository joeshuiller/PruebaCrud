import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HistarialComponent} from './histarial.component'

const routes: Routes = [
  {
    path: '', component: HistarialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistarialRoutingModule { }
