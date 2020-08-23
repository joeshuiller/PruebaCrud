import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistarialRoutingModule } from './histarial-routing.module';
import { HistarialComponent } from './histarial.component';


@NgModule({
  declarations: [HistarialComponent],
  imports: [
    CommonModule,
    HistarialRoutingModule
  ]
})
export class HistarialModule { }
