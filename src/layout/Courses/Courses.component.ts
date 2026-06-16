import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-courses',
  standalone: true,
  templateUrl: './Courses.component.html',
  styleUrls: ['./Courses.component.css'],
  imports: [CommonModule, FormsModule]
})
export class CoursesComponent {
  courses = [
    {
      title: 'AutoCAD Masterclass',
      category: 'Engineering',
      description: 'Learn AutoCAD from basics to professional 2D drafting.',
      price: '$45',
      duration: '4 weeks',
      icon: '🏗️'
    },
    {
      title: 'Web Development',
      category: 'Programming',
      description: 'Build responsive websites using HTML, CSS, JS and Angular.',
      price: '$50',
      duration: '6 weeks',
      icon: '💻'
    },
    {
      title: '3D Rendering',
      category: 'Design',
      description: 'Turn plans into realistic 3D renders.',
      price: '$40',
      duration: '5 weeks',
      icon: '🎨'
    }
  ];


constructor(private router: Router) {}

openCourse(course: any) {
  this.router.navigate(['/main-courses']);
}
searchText = '';
selectedCategory = 'All';

get filteredCourses() {
  return this.courses.filter(course => {

    const matchesSearch =
      course.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
      course.description.toLowerCase().includes(this.searchText.toLowerCase());

    const matchesCategory =
      this.selectedCategory === 'All' ||
      course.category === this.selectedCategory;

    return matchesSearch && matchesCategory;
  });
}
}
