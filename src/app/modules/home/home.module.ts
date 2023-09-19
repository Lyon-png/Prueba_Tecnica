import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PhonesComponent } from './phones/phones.component';
import { ComputersComponent } from './computers/computers.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    PhonesComponent,
    ComputersComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BrowserAnimationsModule
  ]
})
export class HomeModule { }
