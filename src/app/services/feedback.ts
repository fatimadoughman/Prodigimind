import {
  EnvironmentInjector,
  Injectable,
  inject,
  runInInjectionContext
} from '@angular/core';

import {
  Firestore,
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';

export interface Feedback {
  id?: string;
  name: string;
  university: string;
  message: string;
  rating: number;
  approved: boolean;
  createdAt?: unknown;
}

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private readonly firestore = inject(Firestore);
  private readonly injector = inject(EnvironmentInjector);

  getFeedback(): Observable<Feedback[]> {
    return new Observable<Feedback[]>(observer => {
      return runInInjectionContext(this.injector, () => {
        const feedbackRef = collection(
          this.firestore,
          'feedback'
        );

        const feedbackQuery = query(
          feedbackRef,
          orderBy('createdAt', 'desc')
        );

        const unsubscribe = onSnapshot(
          feedbackQuery,
          snapshot => {
            const feedbackList: Feedback[] =
              snapshot.docs.map(document => ({
                id: document.id,
                ...(document.data() as Feedback)
              }));

            observer.next(feedbackList);
          },

          error => {
            console.error('Failed to load feedback:', error);
            observer.error(error);
          }
        );

        return () => unsubscribe();
      });
    });
  }

  addFeedback(feedback: Omit<Feedback, 'id' | 'createdAt'>) {
    return runInInjectionContext(this.injector, () => {
      const feedbackRef = collection(
        this.firestore,
        'feedback'
      );

      return addDoc(feedbackRef, {
        ...feedback,
        createdAt: serverTimestamp()
      });
    });
  }
}