import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GererServersService } from '../gerer-servers.service';

@Component({
  selector: 'app-info-server',
  templateUrl: './info-server.component.html',
  styleUrls: ['./info-server.component.css'],
})
export class InfoServerComponent implements OnInit {
  selectedServeur;
  hd = true;
  constructor(
    private activRoute: ActivatedRoute,
    private router: Router,
    private gerServers: GererServersService
  ) {}

  ngOnInit(): void {
    this.activRoute.paramMap.subscribe({
      next: (p) => {
        this.selectedServeur = this.gerServers.getServeurById(p.get('id'));
      },
    });

    this.activRoute.queryParamMap.subscribe({
      next: (p) => {
        this.hd = p.get('allow') == '1' ? false : true;
      },
    });
  }

  goToEdit() {
    this.router.navigate(['/serveur', this.selectedServeur.id, 'edit'], {
      queryParams: { allow: '5' },
    });
  }
}
