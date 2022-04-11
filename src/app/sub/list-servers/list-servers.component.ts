import { Component, OnInit } from '@angular/core';
import { GererServersService } from '../gerer-servers.service';

@Component({
  selector: 'app-list-servers',
  templateUrl: './list-servers.component.html',
  styleUrls: ['./list-servers.component.css'],
})
export class ListServersComponent implements OnInit {
  listServeurs = [];
  constructor(private serSer: GererServersService) {}

  ngOnInit(): void {
    this.listServeurs = this.serSer.tabServeurs;
  }
}
