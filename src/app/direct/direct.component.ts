import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.css'],
})
export class DirectComponent implements OnInit {
  bgColor = 'pink';
  cl = 'green';

  c1: boolean = true;
  c2: boolean = false;
  c3: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  switchClass() {
    if (this.c1) {
      this.c1 = false;
      this.c2 = true;
    } else if (this.c2) {
      this.c2 = false;
      this.c3 = true;
    } else {
      this.c3 = false;
      this.c1 = true;
    }
  }
}
