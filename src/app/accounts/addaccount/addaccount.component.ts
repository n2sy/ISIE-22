import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-addaccount',
  templateUrl: './addaccount.component.html',
  styleUrls: ['./addaccount.component.css'],
})
export class AddaccountComponent implements OnInit {
  tabStatus = ['', 'actif', 'inactive', 'unknown'];
  @Output() msgToList = new EventEmitter<{ name: string; status: string }>();
  constructor() {}

  ngOnInit(): void {}

  sendToList(inputName, selName) {
    // console.log(inputName);
    // console.log(inputName.value);
    console.log(inputName, selName);
    this.msgToList.emit({ name: inputName, status: selName });
  }
}
