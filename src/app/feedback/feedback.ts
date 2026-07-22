import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { Subscription } from 'rxjs';

import {
  Feedback,
  FeedbackService
} from '../services/feedback';
@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './feedback.html',
  styleUrl: './feedback.css'
})
export class FeedbackComponent implements OnInit, OnDestroy {
  feedbackList: Feedback[] = [];
@ViewChild('feedbackSlider')
feedbackSlider?: ElementRef<HTMLDivElement>;

scrollFeedback(direction: 'left' | 'right'): void {
  const slider = this.feedbackSlider?.nativeElement;

  if (!slider) {
    return;
  }

  const firstCard =
    slider.querySelector<HTMLElement>('.feedback-card');

  const cardWidth = firstCard?.offsetWidth ?? 320;

  const gap = 22;

  slider.scrollBy({
    left:
      direction === 'right'
        ? cardWidth + gap
        : -(cardWidth + gap),
    behavior: 'smooth'
  });
}
  readonly stars = [1, 2, 3, 4, 5];

  isLoading = true;
  isSubmitting = false;

  successMessage = '';
  errorMessage = '';
showFeedbackForm = false;

openFeedbackForm(): void {
  this.showFeedbackForm = true;
  document.body.style.overflow = 'hidden';
}

closeFeedbackForm(): void {
  this.showFeedbackForm = false;
  document.body.style.overflow = '';
}

  private feedbackSubscription?: Subscription;

  readonly feedbackForm;

  constructor(
    private readonly feedbackService: FeedbackService,
    private readonly formBuilder: FormBuilder,
    private readonly cdr: ChangeDetectorRef
  ) {
    this.feedbackForm =
      this.formBuilder.nonNullable.group({
        name: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(60)
          ]
        ],

        university: [
          '',
          [
            Validators.maxLength(100)
          ]
        ],

        rating: [
          5,
          [
            Validators.required,
            Validators.min(1),
            Validators.max(5)
          ]
        ],

        message: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(500)
          ]
        ]
      });
  }

  ngOnInit(): void {
    this.feedbackSubscription =
      this.feedbackService.getFeedback().subscribe({
        next: feedback => {
          this.feedbackList = feedback.filter(
            item => item.approved
          );

          this.isLoading = false;
          this.cdr.detectChanges();

          console.log(
            'Firebase feedback:',
            this.feedbackList
          );
        },

        error: error => {
          console.error(
            'Failed to load feedback:',
            error
          );

          this.errorMessage =
            'Could not load feedback.';

          this.isLoading = false;
          this.cdr.detectChanges();
        }
      });
  }

  ngOnDestroy(): void {
    this.feedbackSubscription?.unsubscribe();
  }

  setRating(rating: number): void {
    this.feedbackForm.controls.rating.setValue(rating);
    this.feedbackForm.controls.rating.markAsTouched();
  }

  async submitFeedback(): Promise<void> {
    this.successMessage = '';
    this.errorMessage = '';

    if (this.feedbackForm.invalid) {
      this.feedbackForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    try {
      const value = this.feedbackForm.getRawValue();

      await this.feedbackService.addFeedback({
        name: value.name.trim(),
        university: value.university.trim(),
        message: value.message.trim(),
        rating: value.rating,
        approved: true
      });

      this.feedbackForm.reset({
        name: '',
        university: '',
        message: '',
        rating: 5
      });

      this.successMessage =
        'Thank you! Your feedback was submitted.';
    } catch (error) {
      console.error(
        'Failed to submit feedback:',
        error
      );

      this.errorMessage =
        'Could not submit your feedback.';
    } finally {
      this.isSubmitting = false;
      this.cdr.detectChanges();
    }
  }
}