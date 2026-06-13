import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminLogin } from "./admin-login/admin-login";
import { NavbarComponent } from "./navbar/navbar.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Prodigimind');
}
