import { Component, OnInit } from '@angular/core';
import { HomepageComponent } from "./homepage/homepage.component";
import { CoursesComponent } from "./Courses/Courses.component";
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../app/navbar/navbar.component";
import { ContactUsComponent } from "../app/contact-us/contact-us.component";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  imports: [HomepageComponent, CoursesComponent, RouterOutlet, NavbarComponent, ContactUsComponent]
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
