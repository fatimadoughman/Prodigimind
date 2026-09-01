import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-servicess',
  templateUrl: './servicess.component.html',
  styleUrls: ['./servicess.component.css'],

})
export class ServicessComponent implements OnInit {
    openService: number | null = null;

  toggleService(index: number) {
    this.openService =
      this.openService === index ? null : index;
  }

  constructor() { }

  ngOnInit() {
  }

}
