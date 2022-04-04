import { Component, OnInit } from '@angular/core';
import { Candidat } from '../models/candidat';
import { FirstService } from '../services/first.service';
import { ListCandidatService } from '../services/list-candidat.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  tabCandidats = [];
  selectedCandidat: Candidat;

  constructor(
    private firstSer: FirstService,
    private candidatServ: ListCandidatService
  ) {}

  ngOnInit(): void {
    console.log(this.tabCandidats);
    this.firstSer.showMsg();
    this.tabCandidats = this.candidatServ.getAllCandidats();
  }

  RecupererCandidat(cand) {
    this.selectedCandidat = cand;
  }

  addNewCandidat() {
    this.candidatServ.addCandidat(
      new Candidat(3, 'Badis', 'simpson', 'Plombier', 56, 'homer.jpg')
    );
    console.log(this.candidatServ.getAllCandidats());
  }
}
