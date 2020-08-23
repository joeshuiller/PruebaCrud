import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListcloseRoutingModule } from './listclose-routing.module';
import { ListcloseComponent } from './listclose.component';


@NgModule({
  declarations: [ListcloseComponent],
  imports: [
    CommonModule,
    ListcloseRoutingModule
  ]
})
export class ListcloseModule { }
