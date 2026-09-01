import { Component } from '@angular/core';

@Component({
  selector: 'app-main-courses',
  standalone: true,
  templateUrl: './main-courses.component.html',
  styleUrls: ['./main-courses.component.css']
})
export class MainCoursesComponent {

  /* =========================
     COURSE DETAILS
  ========================= */

  openCourse: number | null = null;


  toggleCourse(index: number): void {

    if (this.openCourse === index) {
      this.openCourse = null;
    } else {
      this.openCourse = index;
    }

  }

}
