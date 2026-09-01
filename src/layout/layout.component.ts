import { Component } from '@angular/core';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../app/navbar/navbar.component';
import { ContactUsComponent } from '../app/contact-us/contact-us.component';

@Component({
  selector: 'app-layout',
  standalone: true,

  imports: [
    HomepageComponent,
    RouterOutlet,
    NavbarComponent,
    ContactUsComponent
  ],

  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
}
