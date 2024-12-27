import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../../classes/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = 'http://localhost:8080/api/contact'; 

  constructor(private http: HttpClient) {}

  submitContactForm(data: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.apiUrl, data);
  }
}
