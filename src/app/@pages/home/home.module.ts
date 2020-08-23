import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
//import { PrestamosComponent } from '../../components/prestamos/prestamos.component';
@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
