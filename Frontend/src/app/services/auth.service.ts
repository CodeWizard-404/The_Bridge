import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

interface AdminLogin {
  username: string;
  password: string;
}

interface AuthResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  private apiUrl = `${environment.apiUrl}/api/admin/login`;

  constructor(private http: HttpClient, private router: Router) {}

  // Admin login
  login(credentials: AdminLogin): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.apiUrl, credentials);
  }

  // Save token to localStorage
  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Get token from localStorage
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Remove token from localStorage
  logout(): void {
    localStorage.removeItem('authToken');
    this.router.navigate(['/admin/login']);
  }

  // Check if token is present
  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}