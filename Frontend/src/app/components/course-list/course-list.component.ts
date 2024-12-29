import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../../classes/course';
import { CourseCardComponent } from "../course-card/course-card.component";
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { CourseService } from '../../services/course.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CourseCardComponent, ContactFormComponent,CommonModule, FormsModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css',
})
export class CourseListComponent implements OnInit {

  courses: Course[] = [];
  loading = true;
  searchQuery = '';


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

  filteredCourses: Course[] = [];

  onSearchChange(): void {
    if (this.searchQuery.trim() === '') {
      this.loadCourses(); 
    } else {
      this.courses = this.courses.filter(course => 
        course.title.toLowerCase().includes(this.searchQuery.toLowerCase()) 
      );
    }
  }
  
  
}
