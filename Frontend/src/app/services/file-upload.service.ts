import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders, HttpRequest } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AdminAuthService } from './auth.service';


@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  private apiUrl = `${environment.apiUrl}/api/admin/upload`;

  constructor(
    private http: HttpClient,
    private authService: AdminAuthService
  ) {}

  // Upload file
  upload(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getToken()}`,
    });

    const req = new HttpRequest('POST', this.apiUrl, formData, {
      headers: headers,
      reportProgress: true,
      responseType: 'json',
    });

    return this.http.request(req).pipe(
      map((event) => {
        if (event.type === HttpEventType.UploadProgress) {
          const percentDone = event.total ? Math.round((100 * event.loaded) / event.total) : 0;
          return { status: 'progress', message: percentDone };
        } else if (event.type === HttpEventType.Response) {
          return event.body;
        }
        return { status: 'unknown', message: 0 };
      })
    );
  }
}
