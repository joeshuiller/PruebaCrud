import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContRoutingModule } from './cont-routing.module';
import { ContComponent } from './cont.component';
import { PrestamosComponent } from '../../../components/prestamos/prestamos.component';
@NgModule({
  declarations: [
    ContComponent,
    PrestamosComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ContRoutingModule
  ]
})
export class ContModule { }
