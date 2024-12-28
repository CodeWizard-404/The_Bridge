import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AdminAuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private apiUrl = `${environment.apiUrl}/api/admin/upload`;

  constructor(private http: HttpClient, private authService: AdminAuthService) {}

  // Upload file
  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post<any>(this.apiUrl, formData, {
      headers: {
        'Authorization': `Bearer ${this.authService.getToken()}`
      }
    });
  }
}
