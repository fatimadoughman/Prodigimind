import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent {

  project = {
    name: '',
    email: '',
    phone: '',
    university: '',
    major: '',
    year: '',
    deadline: '',
    description: ''
  };

  onlyNumbers(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');
    this.project.phone = input.value;
  }

  submitProject(form: NgForm) {

    if (form.invalid) {
      alert('Please check your information.');
      return;
    }

    console.log('Project Request:', this.project);

    alert('Project Submitted Successfully!');

    this.project = {
      name: '',
      email: '',
      phone: '',
      university: '',
      major: '',
      year: '',
      deadline: '',
      description: ''
    };

    form.resetForm();
  }
}