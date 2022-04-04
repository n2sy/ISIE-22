import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listaccount',
  templateUrl: './listaccount.component.html',
  styleUrls: ['./listaccount.component.css'],
})
export class ListaccountComponent implements OnInit {
  tabAccounts = [
    {
      name: 'Master Account',
      status: 'actif',
    },
    {
      name: 'User Account',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  RecupNewAccount(newAccount) {
    this.tabAccounts.unshift(newAccount);
  }
}
