import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent {

  isLoading = false;
  submitted = false;
  errorMessage = '';
  successMessage = '';

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

  showError(field: NgModel): boolean {
    return !!field.invalid && (field.touched || this.submitted);
  }

  onlyNumbers(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');
    this.project.phone = input.value;
  }

  submitProject(form: NgForm) {
    this.submitted = true;
    this.errorMessage = '';
    this.successMessage = '';

    if (form.invalid) {
      this.errorMessage = 'Please fill all required fields correctly.';
      return;
    }

    this.isLoading = true;

    emailjs.send(
      'service_pqx81d8',
      'template_81qb4yr',
      {
        name: this.project.name,
        email: this.project.email,
        phone: this.project.phone,
        university: this.project.university,
        major: this.project.major,
        year: this.project.year,
        deadline: this.project.deadline,
        description: this.project.description
      },
      'y7aOn5_MwXcoPmdNj'
    )
    .then(() => {
      this.successMessage = 'Project submitted successfully!';
      this.isLoading = false;
      this.submitted = false;

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
    })
    .catch((error) => {
      console.log('EMAILJS ERROR:', error);
      this.errorMessage = 'Something went wrong. Please try again.';
      this.isLoading = false;
    });
  }
}
