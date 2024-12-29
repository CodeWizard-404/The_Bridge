import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Course } from '../../../classes/course';
import { AdminCourseService } from '../../../services/admin-course.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-management',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './course-management.component.html',
  styleUrl: './course-management.component.css'
})
export class CourseManagementComponent implements OnInit {
  courses: Course[] = [];
  loading = true;
  searchQuery = '';
  showConfirmation: number | null = null; 

  constructor(private courseService: AdminCourseService, private router: Router) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  // Fetch all courses
  loadCourses(): void {
    this.courseService.getCourses().subscribe(
      (data) => {
        this.courses = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error loading courses:', error);
        this.loading = false;
      }
    );
  }

  // Show confirmation for deletion
  confirmDelete(id: number): void {
    this.showConfirmation = id;
  }

  // Cancel the deletion
  cancelDelete(): void {
    this.showConfirmation = null;
  }

  // Perform the delete
  deleteCourse(id: number): void {
    this.courseService.deleteCourse(id).subscribe(
      () => {
        this.courses = this.courses.filter(course => course.id !== id);
        console.log('Course deleted successfully');
      },
      (error) => {
        console.error('Error deleting course:', error);
      }
    );
    this.showConfirmation = null; // Hide confirmation dialog after deletion
  }

  // Navigate to edit page
  editCourse(id: number): void {
    this.router.navigate([`/admin/courses/edit/${id}`]);
  }

  // Search courses based on title
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
