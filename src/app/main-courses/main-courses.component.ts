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
  goToWhatsApp(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();

    const link = event.currentTarget as HTMLElement;
    const card = link.closest('.course-card');

    const courseName =
      card?.querySelector('h3')?.textContent?.trim() || 'this course';

    const message =
      `Hi, I'm interested in ${courseName}. I want to know more details about this course.`;

    
    const whatsappUrl =
      `https://web.whatsapp.com/send?phone=96181633168&text=${encodeURIComponent(message)}&type=phone-number&app-absent=0`;
    
    window.open(whatsappUrl, '-blank');
  }
}
