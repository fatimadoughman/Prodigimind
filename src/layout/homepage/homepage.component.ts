import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeedbackComponent } from "../../app/feedback/feedback";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterLink, FeedbackComponent],
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








  moveCharacter(event: MouseEvent) {

  const container =
    event.currentTarget as HTMLElement;

  const leftEye =
    container.querySelector('#leftEyeMove') as HTMLElement | null;

  const rightEye =
    container.querySelector('#rightEyeMove') as HTMLElement | null;

  if (!leftEye || !rightEye) {
    return;
  }

  this.moveEye(leftEye, event);
  this.moveEye(rightEye, event);
}


private moveEye(
  eye: HTMLElement,
  event: MouseEvent
) {

  const rect = eye.getBoundingClientRect();

  const eyeCenterX =
    rect.left + rect.width / 2;

  const eyeCenterY =
    rect.top + rect.height / 2;

  const dx =
    event.clientX - eyeCenterX;

  const dy =
    event.clientY - eyeCenterY;

  const angle =
    Math.atan2(dy, dx);

  const maxDistance = 9;

  const moveX =
    Math.cos(angle) * maxDistance;

  const moveY =
    Math.sin(angle) * maxDistance;

  eye.style.transform =
    `translate(${moveX}px, ${moveY}px)`;
}


resetCharacter() {

  const leftEye =
    document.querySelector('#leftEyeMove') as HTMLElement | null;

  const rightEye =
    document.querySelector('#rightEyeMove') as HTMLElement | null;

  if (leftEye) {
    leftEye.style.transform =
      'translate(0px, 0px)';
  }

  if (rightEye) {
    rightEye.style.transform =
      'translate(0px, 0px)';
  }
}
}