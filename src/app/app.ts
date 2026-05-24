import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular');

  http = inject(HttpClient);
  token = signal('');

  getAll() {
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(console.log);
  }

  login() {
    console.log('login');
    this.http
      .post<any>('http://linkvaultapi.runasp.net/api/auth/login', {
        email: 'angular@mail.com',
        password: 'Angular@123!',
      })
      .subscribe((data) => {
        localStorage.setItem('token', data.token);
        console.log(data);
      });
  }

  cat() {
    this.http.get<any>('http://linkvaultapi.runasp.net/api/categories').subscribe(console.log);
  }
}
