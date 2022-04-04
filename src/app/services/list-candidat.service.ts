import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class ListCandidatService {
  private tabCandidats = [
    new Candidat(1, 'Nidhal', 'jelassi', 'Enseignant', 36, 'nidhal.jpg'),
    new Candidat(2, 'Bart', 'simpson', 'Ingénieur', 26, 'bart.jpeg'),
    new Candidat(3, 'Homer', 'simpson', 'Plombier', 56, 'homer.jpg'),
  ];
  constructor() {}

  getAllCandidats() {
    return this.tabCandidats; // SPREAD OPERATOR return [...tabCandidats];
  }

  addCandidat(newC) {
    this.tabCandidats.push(newC);
  }
}
