import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminCourseService } from '../../../services/admin-course.service';
import { FileUploadService } from '../../../services/file-upload.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.css',
})
export class CourseFormComponent implements OnInit {
  courseForm: FormGroup;
  isEditMode = false;
  courseId: number | null = null;
  selectedFile!: File;
  selectedFileName: string = 'Choose a file...';
  uploadResponse = { status: '', message: '', filePath: '' };
  uploadProgress: number = -1;

  constructor(
    private fb: FormBuilder,
    private courseService: AdminCourseService,
    private route: ActivatedRoute,
    private router: Router,
    private fileUploadService: FileUploadService
  ) {
    this.courseForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      duration: ['', Validators.required],
      status: ['active', Validators.required],
      imageUrl: [''],
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

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.selectedFileName = this.selectedFile.name;
  }

  onUpload(): void {
    console.log('Uploading file:', this.selectedFile);

    this.fileUploadService.upload(this.selectedFile).subscribe(
      (res) => {
        if (res.status === 'progress') {
          console.log('Upload progress:', res.message);

          this.uploadProgress = res.message;
        } else if (res.url) {
          console.log('File uploaded successfully:', res);
          this.uploadResponse = res;
          console.log('File uploaded successfully:', res.url);
          this.courseForm.patchValue({ imageUrl: res.url });
          console.log('Form value:', this.courseForm.value);

          this.uploadProgress = -1; // Reset progress after completion
        }
      },
      (err) => {
        console.log(err);
        this.uploadProgress = -1; // Reset progress on error
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
        console.log('Creating course:', courseData);
        this.courseService.createCourse(courseData).subscribe(
          () => {
            console.log('Course created successfully');
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
