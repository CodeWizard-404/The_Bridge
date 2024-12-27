import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Contact } from '../classes/contact';


@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = `${environment.apiUrl}/api/contact`;

  constructor(private http: HttpClient) {}

  // Submit a contact form
  submitContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.apiUrl, contact);
  }

  // Fetch all contact submissions (for admin)
  getContactSubmissions(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${environment.apiUrl}/api/admin/contact-submissions`, this.getHeaders());
  }

  // Fetch a single contact submission by ID (for admin)
  getContactSubmission(id: number): Observable<Contact> {
    return this.http.get<Contact>(`${environment.apiUrl}/api/admin/contact-submissions/${id}`, this.getHeaders());
  }

  // Attach JWT token to requests (for admin actions)
  private getHeaders() {
    return {
      headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('jwt')}`),
    };
  }
}
