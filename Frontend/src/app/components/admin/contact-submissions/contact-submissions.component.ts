import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from '../../../services/auth.service';
import { Contact } from '../../../classes/contact';
import { ContactService } from '../../../services/contact.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-submissions',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-submissions.component.html',
  styleUrl: './contact-submissions.component.css'
})
export class ContactSubmissionsComponent  implements OnInit {
  contact: Contact[] = [];
  loading = true;

  constructor(private contactService: ContactService, private authService: AdminAuthService) {}

  ngOnInit(): void {
    this.loadContactSubmissions();
  }

  // Fetch all contact form submissions
  loadContactSubmissions(): void {
    this.contactService.getContact().subscribe(
      (data) => {
        this.contact= data;
        this.loading = false;
      },
      (error) => {
        console.error('Error loading contact submissions:', error);
        this.loading = false;
      }
    );
  }

}
