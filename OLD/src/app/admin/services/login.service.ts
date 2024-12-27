import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminUser } from '../../classes/admin-user';

@Injectable({
  providedIn: 'root',
})
export class AdminUserService {
  private apiUrl = 'http://localhost:8080/api/admin';

  constructor(private http: HttpClient) {}

  login(credentials: { username: string; password: string }): Observable<AdminUser> {
    return this.http.post<AdminUser>(`${this.apiUrl}/login`, credentials);
  }

  // getAdminDetails(): Observable<AdminUser> {
  //   return this.http.get<AdminUser>(`${this.apiUrl}/details`);
  // }
}
