import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseService, Course } from '../services/course';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit {

  courses: Course[] = [];
  showCard = false;
  editingId: string | null = null;

  newCourse: Course = {
    projectName: '',
    major: '',
    image: '',
    description: '',
    category: 'Course',
    fees: '',
    duration: ''
  };


  constructor(
    private courseService: CourseService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.courseService.getCourses().subscribe(data => {
      this.courses = data;
      this.cdr.detectChanges();
      console.log('Firebase courses:', data);
    });
  }
  openCard() {
    this.showCard = true;
    this.editingId = null;
    this.resetForm();
  }

  publishCourse() {
    if (this.editingId) {
      this.courseService.updateCourse(this.editingId, { ...this.newCourse });
      this.editingId = null;
    } else {
      this.courseService.addCourse({ ...this.newCourse });
    }

    this.resetForm();
    this.showCard = false;
  }

  editCourse(course: Course) {
    this.showCard = true;
    this.editingId = course.id!;
    this.newCourse = { ...course };
  }

  deleteCourse(course: Course) {
    if (course.id) {
      this.courseService.deleteCourse(course.id);
    }
  }

  onImageUpload(event: Event) {
    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.newCourse.image = reader.result as string;
    };

    reader.readAsDataURL(file);
  }

  resetForm() {
    this.newCourse = {
      projectName: '',
      major: '',
      image: '',
      description: '',
      category: 'Course',
      fees: '',
      duration: ''
    };
  }
}
