import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListuactiveRoutingModule } from './listuactive-routing.module';
import { ListuactiveComponent } from './listuactive.component';


@NgModule({
  declarations: [ListuactiveComponent],
  imports: [
    CommonModule,
    ListuactiveRoutingModule
  ]
})
export class ListuactiveModule { }
