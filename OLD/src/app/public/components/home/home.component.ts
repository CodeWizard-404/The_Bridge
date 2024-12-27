import { Component } from '@angular/core';
import { PublicRoutingModule } from '../../public-routing.module';
import { CourseListComponent } from '../course-list/course-list.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false, 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}