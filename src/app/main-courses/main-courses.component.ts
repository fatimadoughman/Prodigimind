import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Course, CourseService } from '../services/course';

@Component({
  selector: 'app-main-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main-courses.component.html',
  styleUrls: ['./main-courses.component.css']
})
export class MainCoursesComponent implements OnInit {

  courses: Course[] = [];
  searchText = '';
  selectedMajor = 'All';

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

  get filteredCourses() {
    return this.courses.filter(course => {
      const name = course.projectName || '';
      const desc = course.description || '';
      const major = course.major || '';

      const matchesSearch =
        name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        desc.toLowerCase().includes(this.searchText.toLowerCase());

      const matchesMajor =
        this.selectedMajor === 'All' || major === this.selectedMajor;

      return matchesSearch && matchesMajor;
    });
  }

  enroll(course: Course) {
    const phone = '96181633168';

    const message =
`Hello ProdigiMind,

I would like to enroll in:

Project: ${course.projectName}
Major: ${course.major}
Fees: ${course.fees}

Please send me more details.`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  }
}
