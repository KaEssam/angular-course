import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCard } from './user-card/user-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular');

  name = signal('mohab');
  email = signal('karim@mail.com');

  Delete() {
    this.email.set('deleted');
  }

  onSelect() {
    console.log('user selected');
  }

  count = signal(0);
}
