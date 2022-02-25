import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() oneCandidat: Candidat;
  @Output() msgToList = new EventEmitter<Candidat>();
  constructor() {}

  ngOnInit(): void {}
  sendMsgToList() {
    this.msgToList.emit(this.oneCandidat);
  }
}
