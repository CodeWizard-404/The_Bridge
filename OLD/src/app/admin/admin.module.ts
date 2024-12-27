import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../app.component';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    CommonModule,
    AdminRoutingModule
  ],
  bootstrap: [AppComponent],
})
export class AdminModule { }
