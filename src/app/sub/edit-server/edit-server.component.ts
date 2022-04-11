import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GererServersService } from '../gerer-servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit {
  editedServeur;
  constructor(
    private actRoute: ActivatedRoute,
    private serService: GererServersService
  ) {}

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe({
      next: (q) => {
        this.editedServeur = this.serService.getServeurById(q.get('id'));
      },
    });
  }
}
