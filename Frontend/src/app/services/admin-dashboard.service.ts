import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AdminAuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {

  private apiUrl = `${environment.apiUrl}/api/admin/dashboard/stats`;

  constructor(private http: HttpClient, private authService: AdminAuthService) {}

  // Get dashboard stats (e.g., number of courses, submissions)
  getStats(): Observable<any> {
    return this.http.get<any>(this.apiUrl, {
      headers: { 'Authorization': `Bearer ${this.authService.getToken()}` }
    });
  }
}
