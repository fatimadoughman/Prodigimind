import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminLogin } from "./admin-login/admin-login";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Prodigimind');
}
