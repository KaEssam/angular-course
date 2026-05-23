import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Counter],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // lastConut = signal(0);

  // onCountChanged(count: number) {
  //   this.lastConut.set(count);
  // }

  paCount = signal(0);

  changeV() {
    this.paCount.set(this.paCount() + 1);
  }
}
