import { Routes } from '@angular/router';
import { App } from './app';
import { UserCard } from './user-card/user-card';

export const routes: Routes = [
  { path: '', component: App },
  // { path: 'user', component: User },
  { path: 'user', loadComponent: () => import('./user/user').then((m) => m.User) },
  { path: 'user-card', component: UserCard },
];
