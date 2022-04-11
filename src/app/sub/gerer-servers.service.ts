import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GererServersService {
  tabServeurs = [
    {
      id: 1,
      nom: 'Serveur de production',
      statut: 'offline',
    },
    {
      id: 2,
      nom: 'Serveur de test',
      statut: 'online',
    },
    {
      id: 3,
      nom: 'Serveur de Développement',
      statut: 'online',
    },
  ];
  constructor() {}

  getServeurById(id) {
    return this.tabServeurs.find((s) => s.id == id);
  }
}
