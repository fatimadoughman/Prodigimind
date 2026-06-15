import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private storageKey = 'prodigimind_courses';

  private courses: any[] = JSON.parse(
    localStorage.getItem(this.storageKey) || '[]'
  );

  getCourses() {
    return this.courses;
  }

  addCourse(course: any) {
    this.courses.push(course);
    this.saveCourses();
  }

  updateCourse(index: number, course: any) {
    this.courses[index] = course;
    this.saveCourses();
  }

  deleteCourse(index: number) {
    this.courses.splice(index, 1);
    this.saveCourses();
  }

  private saveCourses() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.courses));
  }
}
