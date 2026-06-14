import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  showCard = false;

  newCourse = {
    title: '',
    image: '',
    description: ''
  };

  openCard() {
    this.showCard = true;
  }

  onImageUpload(event: Event) {
    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
      return;
    }

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.newCourse.image = reader.result as string;
    };

    reader.readAsDataURL(file);
  }

  addCourse() {
    console.log(this.newCourse);

    alert('Course Added Successfully');

    this.newCourse = {
      title: '',
      image: '',
      description: ''
    };

    this.showCard = false;
  }
}