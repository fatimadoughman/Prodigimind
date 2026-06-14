import { Component, OnInit } from '@angular/core';
import { HomepageComponent } from "./homepage/homepage.component";
import { CoursesComponent } from "./Courses/Courses.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  imports: [HomepageComponent, CoursesComponent, RouterOutlet]
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
