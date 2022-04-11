import { ListServersComponent } from './list-servers/list-servers.component';
import { InfoServerComponent } from './info-server/info-server.component';
import { EditServerComponent } from './edit-server/edit-server.component';
import { RouterModule, Routes } from '@angular/router';

const sub_routes: Routes = [
  {
    path: 'serveur',
    component: ListServersComponent,
    children: [
      { path: ':id', component: InfoServerComponent },
      { path: ':id/edit', component: EditServerComponent },
    ],
  },
];

export const SUB_ROUTING = RouterModule.forChild(sub_routes);
