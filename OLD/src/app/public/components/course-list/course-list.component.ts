import { Component } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../../classes/course';
import { PublicRoutingModule } from '../../public-routing.module';
import { CourseCardComponent } from '../course-card/course-card.component';

@Component({
  selector: 'app-course-list',
  imports: [PublicRoutingModule,CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (data) => (this.courses = data),
      error: (err) => console.error('Failed to fetch courses', err),
    });
  }

}
