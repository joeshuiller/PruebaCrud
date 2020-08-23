import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListnegadoRoutingModule } from './listnegado-routing.module';
import { ListnegadoComponent } from './listnegado.component';


@NgModule({
  declarations: [ListnegadoComponent],
  imports: [
    CommonModule,
    ListnegadoRoutingModule
  ]
})
export class ListnegadoModule { }
