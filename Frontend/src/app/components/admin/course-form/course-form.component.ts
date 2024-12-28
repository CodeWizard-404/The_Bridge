import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminCourseService } from '../../../services/admin-course.service';

@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.css'
})
export class CourseFormComponent implements OnInit {
  courseForm: FormGroup;
  isEditMode = false;
  courseId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private courseService: AdminCourseService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.courseForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      duration: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.courseId = +this.route.snapshot.paramMap.get('id')!;
    if (this.courseId) {
      this.isEditMode = true;
      this.loadCourse();
    }
  }

  loadCourse(): void {
    this.courseService.getCourseById(this.courseId!).subscribe(
      (data) => {
        this.courseForm.patchValue(data);
      },
      (error) => {
        console.error('Error loading course for editing', error);
      }
    );
  }

  onSubmit(): void {
    if (this.courseForm.valid) {
      const courseData = this.courseForm.value;
      if (this.isEditMode) {
        this.courseService.updateCourse(this.courseId!, courseData).subscribe(
          () => {
            this.router.navigate(['/admin/courses']);
          },
          (error) => {
            console.error('Error updating course:', error);
          }
        );
      } else {
        this.courseService.createCourse(courseData).subscribe(
          () => {
            this.router.navigate(['/admin/courses']);
          },
          (error) => {
            console.error('Error creating course:', error);
          }
        );
      }
    }
  }
}
