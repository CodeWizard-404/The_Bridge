import { Component, OnInit } from '@angular/core';
import { AdminDashboardService } from '../../../services/admin-dashboard.service';
import { CommonModule } from '@angular/common';
import { AdminAuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  dashboardStats: any = {};
  loading = true;

  constructor(private authService: AdminAuthService, private dashboardService: AdminDashboardService) {}

  ngOnInit(): void {
    this.fetchDashboardStats();
  }

  fetchDashboardStats(): void {
    this.dashboardService.getStats().subscribe(
      (data) => {
        console.log('Dashboard Stats:', data);
        this.dashboardStats = {
          courses: data.courseCount,
          activeCourses: data.activeCourseCount,
          contactSubmissions: data.contactSubmissionsCount,
        };
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching dashboard stats', error);
        this.loading = false;
      }
    );
  }
  logout(): void {
    this.authService.logout();
  }
}
