import { Component, Input } from '@angular/core';
import { Course } from '../../classes/course';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent {
  @Input() course!: Course;

  constructor(private dialog: MatDialog) {}

}
