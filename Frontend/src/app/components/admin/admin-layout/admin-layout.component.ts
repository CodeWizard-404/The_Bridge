import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AdminAuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {
  sidebarOpen: boolean = false;

  constructor(private authService: AdminAuthService, private router: Router) {}

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }
  logout(): void {
    this.authService.logout();
  }
}
