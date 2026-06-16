import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-About',
  templateUrl: './About.component.html',
  styleUrls: ['./About.component.css'],
  imports: [RouterLink]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
