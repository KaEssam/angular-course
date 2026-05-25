import { Routes } from '@angular/router';
import { App } from './app';
import { authGuard, guestGuard } from './auth-guard';
import { Login } from './login/login';
import { User } from './user/user';

export const routes: Routes = [
  { path: '', component: App },
  { path: 'login', component: Login, canActivate: [guestGuard] },
  { path: 'user', component: User, canActivate: [authGuard] },
];
