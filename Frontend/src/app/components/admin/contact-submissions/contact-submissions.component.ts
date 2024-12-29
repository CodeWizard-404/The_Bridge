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
  showConfirmation: number | null = null;  // Track which contact needs confirmation

  constructor(private contactService: ContactService, private authService: AdminAuthService) {}

  ngOnInit(): void {
    this.loadContactSubmissions();
  }

  // Fetch all contact form submissions
  loadContactSubmissions(): void {
    this.contactService.getContact().subscribe(
      (data) => {
        this.contact = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error loading contact submissions:', error);
        this.loading = false;
      }
    );
  }

  // Show confirmation for deletion
  confirmDelete(id: number): void {
    this.showConfirmation = id;
  }

  // Cancel the deletion
  cancelDelete(): void {
    this.showConfirmation = null;
  }

  // Perform the delete
  deleteContact(id: number): void {
    this.contactService.deleteContact(id).subscribe(
      () => {
        this.contact = this.contact.filter(contact => contact.id !== id);
        console.log('Contact deleted successfully');
      },
      (error) => {
        console.error('Error deleting contact', error);
      }
    );
    this.showConfirmation = null; // Hide confirmation dialog after deletion
  }
}
