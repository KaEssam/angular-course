import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = signal(!!localStorage.getItem('isLogged'));

  login() {
    localStorage.setItem('isLogged', 'true');
    this.isLoggedIn.set(true);
  }

  logout() {
    localStorage.removeItem('isLogged');
    this.isLoggedIn.set(false);
  }
}
