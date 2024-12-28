import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Course } from '../classes/course';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  
  private apiUrl = `${environment.apiUrl}/api/courses`;

  constructor(private http: HttpClient) {}

  // Get all courses
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }

  // Get course by ID
  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`);
  }
}