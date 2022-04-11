import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { ServersComponent } from './servers/servers.component';
import { UpdateComponent } from './update/update.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
const myRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'cv',
    children: [
      { path: '', component: CvComponent },
      { path: 'add', component: AddComponent },
      { path: ':id', component: InfosComponent },
      { path: 'edit/:id', component: UpdateComponent },
    ],
  },
  // {
  //   path: 'cv',
  //   children: [
  //     { path: '', component: CvComponent },
  //     { path: 'add', component: AddComponent },
  //     { path: ':id', component: InfosComponent },
  //     { path: 'edit/:id', component: UpdateComponent },
  //   ],
  // },
  { path: 'ms-word', component: MsWordComponent },
  { path: 'login', component: LoginComponent },
  { path: 'servers', component: ServersComponent },
  {
    path: 'serveur',
    loadChildren: () => import('./sub/sub.module').then((m) => m.SubModule),
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

export const ISIE_ROUTING = RouterModule.forRoot(myRoutes);
