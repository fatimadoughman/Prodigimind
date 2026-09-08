import {
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';

import {
  CourseService,
  Course
} from '../services/course';


@Component({
  selector: 'app-main-courses',
  standalone: true,
  templateUrl: './main-courses.component.html',
  styleUrls: ['./main-courses.component.css']
})
export class MainCoursesComponent implements OnInit {

  courses: Course[] = [];

  openCourse: string | null = null;


  sections = [

    {
      number: '01',
      name: 'Languages & International Exams'
    },

    {
      number: '02',
      name: 'University Entrance Preparation'
    },

    {
      number: '03',
      name: 'Data & Analytics'
    },

    {
      number: '04',
      name: 'Programming, AI & Cybersecurity'
    },

    {
      number: '05',
      name: 'Business & Professional Skills'
    },

    {
      number: '06',
      name: 'Career Readiness'
    }

  ];


  constructor(
    private courseService: CourseService,
    private cdr: ChangeDetectorRef
  ) {}


  ngOnInit(): void {

    this.courseService
      .getCourses()
      .subscribe({

        next: (data) => {

          this.courses = data;

          console.log(
            'MAIN COURSES RECEIVED:',
            this.courses
          );

          // IMPORTANT
          // Force Angular to refresh the HTML
          this.cdr.detectChanges();

        },

        error: (error) => {

          console.error(
            'COURSES ERROR:',
            error
          );

        }

      });

  }


  getCoursesBySection(
    section: string
  ): Course[] {

    return this.courses.filter(course => {

      const firebaseSection =
        course.section
          ?.trim()
          .toLowerCase();

      const wantedSection =
        section
          .trim()
          .toLowerCase();

      return firebaseSection === wantedSection;

    });

  }


  toggleCourse(
    id: string
  ): void {

    if (this.openCourse === id) {

      this.openCourse = null;

    } else {

      this.openCourse = id;

    }

  }


goToWhatsApp(
  event: MouseEvent,
  course: Course
): void {

  event.preventDefault();
  event.stopPropagation();

  const courseName =
    course.projectName || 'this course';

  const message =
    `Hi, I'm interested in ${courseName}. I want to know more details about this course.`;

  const whatsappUrl =
    `https://wa.me/96181633168?text=${encodeURIComponent(message)}`;

  window.location.href = whatsappUrl;
}

}