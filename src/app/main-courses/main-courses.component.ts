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

  /* =========================
     DATA
  ========================= */

  courses: Course[] = [];

  filteredCourses: Course[] = [];

  searchTerm: string = '';

  openCourse: string | null = null;

  loading: boolean = true;


  /* =========================
     SECTIONS
  ========================= */

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


  /* =========================
     CONSTRUCTOR
  ========================= */

  constructor(
    private courseService: CourseService,
    private cdr: ChangeDetectorRef
  ) {}


  /* =========================
     LOAD COURSES
  ========================= */

  ngOnInit(): void {

    this.loading = true;

    this.courseService
      .getCourses()
      .subscribe({

        next: (data: Course[]) => {

          console.log(
            'FIREBASE DATA:',
            data
          );

          this.courses = data || [];

          this.filteredCourses = [
            ...this.courses
          ];

          this.loading = false;

          console.log(
            'COURSES:',
            this.courses.length
          );

          console.log(
            'FILTERED:',
            this.filteredCourses.length
          );


          // Force Angular to update the page
          this.cdr.detectChanges();

        },


        error: (error) => {

          console.error(
            'ERROR LOADING COURSES:',
            error
          );

          this.loading = false;

          this.cdr.detectChanges();

        }

      });

  }


  /* =========================
     SEARCH
  ========================= */

  onSearch(event: Event): void {

    const input =
      event.target as HTMLInputElement;

    this.searchTerm =
      input.value;


    const search =
      this.searchTerm
        .trim()
        .toLowerCase();


    // No search = show everything
    if (search === '') {

      this.filteredCourses = [
        ...this.courses
      ];

      return;

    }


    this.filteredCourses =
      this.courses.filter(
        (course: Course) => {

          const name =
            String(
              course.projectName || ''
            )
              .trim()
              .toLowerCase();


          return name.includes(search);

        }
      );

  }


  /* =========================
     CLEAR SEARCH
  ========================= */

  clearSearch(): void {

    this.searchTerm = '';

    this.filteredCourses = [
      ...this.courses
    ];

  }


  /* =========================
     FILTER BY SECTION
  ========================= */

  getCoursesBySection(
    section: string
  ): Course[] {

    const wantedSection =
      section
        .trim()
        .toLowerCase();


    return this.filteredCourses.filter(
      (course: Course) => {

        const courseSection =
          String(
            course.section || ''
          )
            .trim()
            .toLowerCase();


        return (
          courseSection ===
          wantedSection
        );

      }
    );

  }


  /* =========================
     DETAILS
  ========================= */

  toggleCourse(
    id: string
  ): void {

    this.openCourse =
      this.openCourse === id
        ? null
        : id;

  }


  /* =========================
     WHATSAPP
  ========================= */

  goToWhatsApp(
    event: MouseEvent,
    course: Course
  ): void {

    event.preventDefault();

    event.stopPropagation();


    const courseName =
      course.projectName ||
      'this course';


    const message =
      `Hi, I'm interested in ${courseName}. I want to know more details about this course.`;


    const whatsappUrl =
      `https://wa.me/96181633168?text=${encodeURIComponent(message)}`;


    window.location.href =
      whatsappUrl;

  }

}