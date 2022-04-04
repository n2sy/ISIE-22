import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListRecruesService {
  tabRecrues = [];
  constructor() {}

  addRecrue(newRec) {
    if (this.tabRecrues.indexOf(newRec) == -1) this.tabRecrues.push(newRec);
    else alert('Cette personne a déjà été recrutée !');
  }
}
