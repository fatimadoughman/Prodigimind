import { Component } from '@angular/core';
import { CourseService } from '../services/course';

@Component({
  selector: 'app-main-courses',
  standalone: true,
  imports: [],
  templateUrl: './main-courses.component.html',
  styleUrls: ['./main-courses.component.css']
})
export class MainCoursesComponent {

  courses: any[] = [];

  constructor(private courseService: CourseService) {
    this.courses = this.courseService.getCourses();
  }
  enroll(course: any) {

  const phone = '96181633168';
const message =
`Hello ProdigiMind,

I would like to enroll in:

Project: ${course.projectName}
Major: ${course.major}
Fees: ${course.fees}

Please send me more details.`;

  const url =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, '_blank');
}
}
