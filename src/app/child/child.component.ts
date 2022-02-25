import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Output() msgToParent = new EventEmitter<string>();
  @Input() isie: string = 'isie';
  constructor() {}

  ngOnInit(): void {}

  sendMsgToParent() {
    this.msgToParent.emit('Message en provenance du composant Enfant');
  }
}
