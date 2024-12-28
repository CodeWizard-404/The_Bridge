import { Component, OnInit } from '@angular/core';
import { AdminDashboardService } from '../../../services/admin-dashboard.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  dashboardStats = {
    courses: 0,
    activeCourses: 0,
    contactSubmissions: 0
  };
  loading = true;

  constructor(private dashboardService: AdminDashboardService) { }

  ngOnInit(): void {
    this.fetchDashboardStats();
  }

  fetchDashboardStats(): void {
    this.dashboardService.getStats().subscribe(
      (data) => {
        this.dashboardStats = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching dashboard stats', error);
        this.loading = false;
      }
    );
  }
}
