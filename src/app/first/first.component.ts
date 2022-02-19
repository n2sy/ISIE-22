import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  nom: string = 'Albert';
  show = false;
  cl = 'pink';
  constructor() {}

  ngOnInit(): void {}

  showAlert() {
    alert("J'ai été cliqué !");
  }
}
