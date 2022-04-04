import { Component, Input, OnInit } from '@angular/core';
import { Candidat } from '../models/candidat';
import { ListRecruesService } from '../services/list-recrues.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  @Input() candSelected: Candidat;
  constructor(private recrueSer: ListRecruesService) {}

  ngOnInit(): void {}

  addNewRecrue() {
    this.recrueSer.addRecrue(this.candSelected);
    console.log(this.recrueSer.tabRecrues);
  }
}
