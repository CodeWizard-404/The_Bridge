import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Course } from '../classes/course';
import { AdminAuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminCourseService {
  private apiUrl = `${environment.apiUrl}/api/admin/courses`;

  constructor(
    private http: HttpClient,
    private authService: AdminAuthService
  ) {}

  // Get all courses (admin)
  getCourses(): Observable<Course[]> {
    const headers = { Authorization: `Bearer ${this.authService.getToken()}` };
    console.log('Request Headers:', headers);
    return this.http.get<Course[]>(this.apiUrl, { headers });
  }

  // Get course by ID
  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`, {
      headers: { Authorization: `Bearer ${this.authService.getToken()}` },
    });
  }

  // Create new course
  createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course, {
      headers: { Authorization: `Bearer ${this.authService.getToken()}` },
    });
  }

  // Update course by ID
  updateCourse(id: number, course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/${id}`, course, {
      headers: { Authorization: `Bearer ${this.authService.getToken()}` },
    });
  }

  // Delete course by ID
  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, {
      headers: { Authorization: `Bearer ${this.authService.getToken()}` },
    });
  }
}
