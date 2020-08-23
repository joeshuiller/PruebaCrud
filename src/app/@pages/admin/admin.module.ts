import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderadminComponent } from '../../components/headeradmin/headeradmin.component';
import { FooteradminComponent } from '../../components/footeradmin/footeradmin.component';

@NgModule({
  declarations: [AdminComponent,HeaderadminComponent, FooteradminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
