import { Component, OnInit } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  tabCandidats = [
    new Candidat(1, 'Nidhal', 'Jelassi', 'Enseignant', 36, 'nidhal.jpg'),
    new Candidat(2, 'Bart', 'Simpson', 'Ingénieur', 26, 'bart.jpeg'),
    new Candidat(3, 'Homer', 'Simpson', 'Plombier', 56, 'homer.jpg'),
  ];
  selectedCandidat: Candidat;
  constructor() {}

  ngOnInit(): void {
    console.log(this.tabCandidats);
  }

  RecupererCandidat(cand) {
    this.selectedCandidat = cand;
  }
}
