import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { AdminLayoutComponent } from './components/admin/admin-layout/admin-layout.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { CourseManagementComponent } from './components/admin/course-management/course-management.component';
import { CourseFormComponent } from './components/admin/course-form/course-form.component';
import { LoginComponent } from './components/admin/login/login.component';
import { ContactSubmissionsComponent } from './components/admin/contact-submissions/contact-submissions.component';
import { AuthGuard } from './guards/auth.guard'; 

export const routes: Routes = [
  // Public Routes
  { path: '', component: HomeComponent },
  { path: 'courses', component: CourseListComponent },
  { path: 'contact', component: ContactFormComponent },

  // Admin Routes (Protected by AuthGuard)
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard], // Protect routes with AuthGuard
    children: [
      { path: 'dashboard', component: DashboardComponent }, // Admin Dashboard
      { path: 'courses', component: CourseManagementComponent }, // Course Management
      { path: 'courses/create', component: CourseFormComponent }, // Create Course
      { path: 'courses/edit/:id', component: CourseFormComponent }, // Edit Course
      { path: 'contact-submissions', component: ContactSubmissionsComponent }, // Manage Contact Form Submissions
    ]
  },
  
  // Admin Login Route
  { path: 'admin/login', component: LoginComponent },

  // Catch-all route
  { path: '**', redirectTo: '' }
];
