import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  selectedStatus: string = '';
  listServers = [
    {
      nom: 'Development Server',
      type: 'small',
      status: 'critical',
      date_d: new Date(2021, 6, 30),
    },
    {
      nom: 'Test Development Server',
      type: 'medium',
      status: 'stable',
      date_d: new Date(2022, 2, 3),
    },
    {
      nom: 'Testing Server',
      type: 'large',
      status: 'critical',
      date_d: new Date(2021, 1, 22),
    },
    {
      nom: 'Nidhal Server',
      type: 'small',
      status: 'offline',
      date_d: new Date(2021, 1, 22),
    },
  ];
  constructor() {}

  addNewServer() {
    this.listServers.push({
      nom: 'New Server',
      type: 'small',
      status: 'offline',
      date_d: new Date(2021, 1, 22),
    });
  }

  ngOnInit(): void {}

  affecterClass(s) {
    return {
      'list-group-item-danger': s.status == 'critical' ? true : false,
      'list-group-item-warning': s.status == 'offline' ? true : false,
      'list-group-item-success': s.status == 'stable' ? true : false,
    };
  }
}
