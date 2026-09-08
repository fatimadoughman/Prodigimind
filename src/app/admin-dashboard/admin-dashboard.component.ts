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


  newCourse: Omit<Course, 'id'> = this.getEmptyCourse();


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

    if (!this.newCourse.projectName.trim()) {
      alert('Please enter a name.');
      return;
    }


    if (this.editingId) {

      this.courseService.updateCourse(
        this.editingId,
        { ...this.newCourse }
      );

      this.editingId = null;

    }

    else {

      this.courseService.addCourse(
        { ...this.newCourse }
      );

    }


    this.resetForm();

    this.showCard = false;

  }


  editCourse(course: Course) {

    this.showCard = true;

    this.editingId = course.id ?? null;


    this.newCourse = {

      category: course.category ?? 'Course',

      section: course.section ?? '',

      icon: course.icon ?? '',

      tag: course.tag ?? '',

      projectName: course.projectName ?? '',

      major: course.major ?? '',

      image: course.image ?? '',

      description: course.description ?? '',

      oldPrice: course.oldPrice ?? '',

      newPrice: course.newPrice ?? '',

      duration: course.duration ?? '',

      detail1: course.detail1 ?? '',

      detail2: course.detail2 ?? '',

      detail3: course.detail3 ?? '',

      detail4: course.detail4 ?? '',

      buttonText: course.buttonText ?? 'Enroll Now'

    };

  }


  deleteCourse(course: Course) {

    if (!course.id) return;


    const confirmed = confirm(
      `Delete "${course.projectName}"?`
    );


    if (confirmed) {

      this.courseService.deleteCourse(course.id);

    }

  }


  onImageUpload(event: Event) {

    const input =
      event.target as HTMLInputElement;


    if (
      !input.files ||
      input.files.length === 0
    ) {
      return;
    }


    const file = input.files[0];


    const reader = new FileReader();


    reader.onload = () => {

      this.newCourse.image =
        reader.result as string;

      this.cdr.detectChanges();

    };


    reader.readAsDataURL(file);

  }


  resetForm() {

    this.newCourse =
      this.getEmptyCourse();

  }


  private getEmptyCourse(): Omit<Course, 'id'> {

    return {

      category: 'Course',

      section: '',

      icon: '',

      tag: '',

      projectName: '',

      major: '',

      image: '',

      description: '',

      oldPrice: '',

      newPrice: '',

      duration: '',

      detail1: '',

      detail2: '',

      detail3: '',

      detail4: '',

      buttonText: 'Enroll Now'

    };

  }

}