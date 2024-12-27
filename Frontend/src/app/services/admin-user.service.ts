import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AdminUser } from '../classes/admin-user';


@Injectable({
  providedIn: 'root',
})
export class AdminUserService {
  private apiUrl = `${environment.apiUrl}/api/admin/users`;

  constructor(private http: HttpClient) {}

  // Fetch all admin users
  getUsers(): Observable<AdminUser[]> {
    return this.http.get<AdminUser[]>(this.apiUrl, this.getHeaders());
  }

  // Fetch a specific admin user by ID
  getUser(id: number): Observable<AdminUser> {
    return this.http.get<AdminUser>(`${this.apiUrl}/${id}`, this.getHeaders());
  }

  // Create a new admin user
  createUser(user: AdminUser): Observable<AdminUser> {
    return this.http.post<AdminUser>(this.apiUrl, user, this.getHeaders());
  }

  // Update an existing admin user
  updateUser(id: number, user: AdminUser): Observable<AdminUser> {
    return this.http.put<AdminUser>(`${this.apiUrl}/${id}`, user, this.getHeaders());
  }

  // Delete an admin user
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, this.getHeaders());
  }

  // Authenticate an admin user (login)
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/api/admin/login`, { username, password });
  }

  // Attach JWT token to requests
  private getHeaders() {
    return {
      headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('jwt')}`),
    };
  }
}
