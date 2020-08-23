import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListusersRoutingModule } from './listusers-routing.module';
import { ListusersComponent } from './listusers.component';


@NgModule({
  declarations: [ListusersComponent],
  imports: [
    CommonModule,
    ListusersRoutingModule
  ]
})
export class ListusersModule { }
