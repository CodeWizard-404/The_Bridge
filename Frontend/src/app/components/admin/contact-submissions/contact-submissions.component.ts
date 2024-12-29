import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from '../../../services/auth.service';
import { Contact } from '../../../classes/contact';
import { ContactService } from '../../../services/contact.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-submissions',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule, CommonModule],
  templateUrl: './contact-submissions.component.html',
  styleUrl: './contact-submissions.component.css'
})
export class ContactSubmissionsComponent implements OnInit {
  contact: Contact[] = [];
  filteredContacts: Contact[] = [];
  loading = true;
  showConfirmation: number | null = null; 
  searchTerm: string = ''; 

  constructor(private contactService: ContactService, private authService: AdminAuthService) {}

  ngOnInit(): void {
    this.loadContactSubmissions();
  }

  // Fetch all contact form submissions
  loadContactSubmissions(): void {
    this.contactService.getContact().subscribe(
      (data) => {
        this.contact = data;
        this.filteredContacts = data; 
        this.loading = false;
      },
      (error) => {
        console.error('Error loading contact submissions:', error);
        this.loading = false;
      }
    );
  }

  // Filter contacts based on search term
  filterContacts(): void {
    if (this.searchTerm) {
      this.filteredContacts = this.contact.filter(contact =>
        contact.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        contact.message.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredContacts = this.contact; 
    }
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
        this.filteredContacts = this.filteredContacts.filter(contact => contact.id !== id); // Remove from filtered list as well
        console.log('Contact deleted successfully');
      },
      (error) => {
        console.error('Error deleting contact', error);
      }
    );
    this.showConfirmation = null; // Hide confirmation dialog after deletion
  }
}
