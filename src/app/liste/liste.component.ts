import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent implements OnInit {
  @Input() listCandidats: Candidat[];

  @Output() msgToCv = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  TraitementDuList(cand) {
    this.msgToCv.emit(cand);
  }
}
