import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  isactive = true;
  menuOpen = false;
  activeSection = 'home';

  ngOnInit() { }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  scrollToCourses() {
    document.getElementById('courses')?.scrollIntoView({
      behavior: 'smooth'
    });
  }

  scrollTo(sectionId: string) {
    this.activeSection = sectionId;

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    this.closeMenu();
  }
}
