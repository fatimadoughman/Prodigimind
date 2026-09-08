import { Injectable, inject, EnvironmentInjector, runInInjectionContext } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  onSnapshot
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Course {

  id?: string;

  category: string;

  section: string;

  icon: string;

  tag: string;

  projectName: string;

  major: string;

  image: string;

  description: string;

  oldPrice: string;

  newPrice: string;

  duration: string;

  detail1: string;

  detail2: string;

  detail3: string;

  detail4: string;

  buttonText: string;

}
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private firestore = inject(Firestore);
  private injector = inject(EnvironmentInjector);

  getCourses(): Observable<Course[]> {
    return new Observable<Course[]>((observer) => {
      return runInInjectionContext(this.injector, () => {
        const coursesRef = collection(this.firestore, 'courses');

        const unsubscribe = onSnapshot(coursesRef, (snapshot) => {
          const courses: Course[] = snapshot.docs.map(docItem => ({
            id: docItem.id,
            ...(docItem.data() as Course)
          }));

          observer.next(courses);
        });

        return () => unsubscribe();
      });
    });
  }

  addCourse(course: Course) {
    return runInInjectionContext(this.injector, () => {
      const coursesRef = collection(this.firestore, 'courses');
      return addDoc(coursesRef, course);
    });
  }

  updateCourse(id: string, course: Partial<Course>) {
    return runInInjectionContext(this.injector, () => {
      const courseDoc = doc(this.firestore, `courses/${id}`);
      return updateDoc(courseDoc, course);
    });
  }

  deleteCourse(id: string) {
    return runInInjectionContext(this.injector, () => {
      const courseDoc = doc(this.firestore, `courses/${id}`);
      return deleteDoc(courseDoc);
    });
  }
}
