import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../services/course';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [FormsModule],
  providers: [CourseService],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  showCard = false;
  editingIndex: number | null = null;

  courses: any[] = [];

  newCourse = {
    projectName: '',
    major: '',
    image: '',
    description: '',
    fees: ''
  };

  constructor(private courseService: CourseService) {
    this.courses = this.courseService.getCourses();
  }

  openCard() {
    this.showCard = true;
  }

  addCourse() {
    if (!this.newCourse.projectName || !this.newCourse.description) return;

    if (this.editingIndex !== null) {
      this.courseService.updateCourse(this.editingIndex, { ...this.newCourse });
      this.editingIndex = null;
    } else {
      this.courseService.addCourse({ ...this.newCourse });
    }

    this.resetForm();
    this.showCard = false;
  }

  editCourse(index: number) {
    this.newCourse = { ...this.courses[index] };
    this.editingIndex = index;
    this.showCard = true;
  }

  deleteCourse(index: number) {
    this.courseService.deleteCourse(index);
  }

  resetForm() {
    this.newCourse = {
      projectName: '',
      major: '',
      image: '',
      description: '',
      fees: ''
    };

    if (this.fileInput) {
      this.fileInput.nativeElement.value = '';
    }
  }

  onImageUpload(event: any) {
    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      this.newCourse.image = reader.result as string;
    };

    reader.readAsDataURL(file);
  }
}
