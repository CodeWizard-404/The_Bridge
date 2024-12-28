import { Component, Input } from '@angular/core';
import { Course } from '../../classes/course';
import { CourseCardComponent } from "../course-card/course-card.component";

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css',
})
export class CourseListComponent {
  @Input() courses: Course[] = [];

}
