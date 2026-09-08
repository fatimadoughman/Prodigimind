import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FeedbackComponent } from '../../app/feedback/feedback';

@Component({
  selector: 'app-courses',
  standalone: true,
  templateUrl: './Courses.component.html',
  styleUrls: ['./Courses.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    FeedbackComponent,
    RouterLink
  ]
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

  searchText = '';
  selectedCategory = 'All';

  goToWhatsApp(courseName: string): void {
    alert('Clicked: ' + courseName);

    const message =
      `Hi, I'm interested in ${courseName}. I want to know more details about this course.`;

    const url =
      `https://wa.me/96181633168?text=${encodeURIComponent(message)}`;

    window.location.href = url;
  }
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
