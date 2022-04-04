import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Candidat } from '../models/candidat';
import { ListCandidatService } from '../services/list-candidat.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
  providers: [ListCandidatService],
})
export class ListeComponent implements OnInit {
  listCandidats: Candidat[];

  @Output() msgToCv = new EventEmitter();

  constructor(private CandidatServ: ListCandidatService) {}

  ngOnInit(): void {
    this.listCandidats = this.CandidatServ.getAllCandidats();
  }

  TraitementDuList(cand) {
    this.msgToCv.emit(cand);
  }

  showListCandidat() {
    console.log(this.CandidatServ.getAllCandidats());
  }
}
