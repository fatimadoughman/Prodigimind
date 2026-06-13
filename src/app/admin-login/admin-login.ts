import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-login.html',
  standalone: true,
  styleUrl: './admin-login.css'
})
export class AdminLogin {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  showPassword = false;

  private adminEmail = 'admin@prodigimind.com';
  private adminPassword = 'promind2026';

  constructor(private router: Router) {}
  login() {
    if (this.email === this.adminEmail && this.password === this.adminPassword) {
      this.router.navigate(['/admin-dashboard']);
    } else {
      this.errorMessage = 'Oops! Try again. Please check your email and password.';
    }
  }
}
