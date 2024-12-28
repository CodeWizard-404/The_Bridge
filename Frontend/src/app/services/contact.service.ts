import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Contact } from '../classes/contact';
import { AdminAuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = `${environment.apiUrl}/api/contact`;

  constructor(private http: HttpClient, private authService: AdminAuthService) {}

  // Submit contact form
  submitContactForm(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.apiUrl, contact);
  }

  getContact(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiUrl, {
      headers: { 'Authorization': `Bearer ${this.authService.getToken()}` }
    });
  }
}