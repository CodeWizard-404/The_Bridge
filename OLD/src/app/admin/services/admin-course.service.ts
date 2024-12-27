import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../../classes/course';

@Injectable({
  providedIn: 'root',
})
export class AdminCourseService {
  private apiUrl = 'http://localhost:8080/api/admin/courses';

  constructor(private http: HttpClient) {}

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`);
  }

  createCourse(courseData: Course): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, courseData);
  }

  updateCourse(id: number, courseData: Course): Observable<Course> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, courseData);
  }

  deleteCourse(id: number): Observable<Course> {
    return this.http.delete<Course>(`${this.apiUrl}/${id}`);
  }
}
