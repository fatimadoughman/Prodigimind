import { Component } from '@angular/core';
import { CourseService } from '../services/course';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-courses',
  standalone: true,
  imports:  [FormsModule],
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
searchText = '';
selectedMajor = 'All';

get filteredCourses() {
  return this.courses.filter(course => {
    const matchesSearch =
      course.projectName.toLowerCase().includes(this.searchText.toLowerCase()) ||
      course.description.toLowerCase().includes(this.searchText.toLowerCase());

    const matchesMajor =
      this.selectedMajor === 'All' ||
      course.major === this.selectedMajor;

    return matchesSearch && matchesMajor;
  });
}
}
