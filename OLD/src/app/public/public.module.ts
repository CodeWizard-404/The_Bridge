import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { RouterModule } from '@angular/router';
import { routes } from '../app.routes';


@NgModule({
  declarations: [
HomeComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    PublicRoutingModule,
    RouterModule.forRoot(routes),
  ],
    bootstrap: [],
})
export class PublicModule { }
