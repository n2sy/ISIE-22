import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemaccount',
  templateUrl: './itemaccount.component.html',
  styleUrls: ['./itemaccount.component.css'],
})
export class ItemaccountComponent implements OnInit {
  @Input() oneAccount;
  constructor() {}

  ngOnInit(): void {}

  changeStatus(newStatus) {
    this.oneAccount.status = newStatus;
  }
}
