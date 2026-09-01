
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  selectedFeedback = 0;


  /* =========================
     FEEDBACK SELECT
  ========================= */

  selectFeedback(index: number) {
    this.selectedFeedback = index;
  }


  /* =========================
     COURSES CAROUSEL
  ========================= */

  scrollCourses(direction: 'left' | 'right') {

    const slider =
      document.querySelector('.course-slider') as HTMLElement;

    if (!slider) {
      return;
    }

    const amount = slider.clientWidth * 0.85;

    slider.scrollBy({
      left: direction === 'right' ? amount : -amount,
      behavior: 'smooth'
    });
  }


  /* =========================
     FEEDBACK CAROUSEL
  ========================= */

  scrollFeedbacks(direction: 'left' | 'right') {

    const slider =
      document.querySelector('.feedback-slider') as HTMLElement;

    if (!slider) {
      return;
    }

    const amount = slider.clientWidth * 0.8;

    slider.scrollBy({
      left: direction === 'right' ? amount : -amount,
      behavior: 'smooth'
    });
  }


  /* =========================
     CHARACTER EYES FOLLOW MOUSE
  ========================= */

  moveCharacter(event: MouseEvent) {

    const svg = event.currentTarget as SVGElement;

    const leftEye =
      svg.querySelector('#leftEyeMove') as SVGGElement;

    const rightEye =
      svg.querySelector('#rightEyeMove') as SVGGElement;

    if (!leftEye || !rightEye) {
      return;
    }

    const rect = svg.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = event.clientX - centerX;
    const dy = event.clientY - centerY;

    const distance =
      Math.sqrt(dx * dx + dy * dy) || 1;

    const maxMove = 13;

    const moveX =
      (dx / distance) * maxMove;

    const moveY =
      (dy / distance) * maxMove;

    const transform =
      `translate(${moveX}px, ${moveY}px)`;

    leftEye.style.transform = transform;
    rightEye.style.transform = transform;
  }


  resetCharacter() {

    const leftEye =
      document.querySelector('#leftEyeMove') as SVGGElement;

    const rightEye =
      document.querySelector('#rightEyeMove') as SVGGElement;

    if (leftEye) {
      leftEye.style.transform = 'translate(0px, 0px)';
    }

    if (rightEye) {
      rightEye.style.transform = 'translate(0px, 0px)';
    }
  }
}
