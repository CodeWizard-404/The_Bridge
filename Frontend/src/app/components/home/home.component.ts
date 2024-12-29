import { Component, OnInit } from '@angular/core';
import { CourseCardComponent } from "../course-card/course-card.component";
import { ContactFormComponent } from "../contact-form/contact-form.component";
import { CourseService } from '../../services/course.service';
import { Course } from '../../classes/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CourseCardComponent, ContactFormComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  courses: Course[] = [];
  loading = true;


  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.courseService.getCourses().subscribe(
      (data) => {
        console.log('Courses:', data);
        
        this.courses = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error loading courses:', error);
        this.loading = false;
      }
    );
  }



}
