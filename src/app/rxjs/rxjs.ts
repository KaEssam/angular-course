import { Component, signal } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  imports: [],
  templateUrl: './rxjs.html',
  styleUrl: './rxjs.css',
})
export class Rxjs {
  num = signal(0);
  running = signal(false);

  sub?: Subscription;

  start() {
    this.running.set(true);
    this.sub = interval(1000).subscribe((n) => {
      this.num.set(n);
    });
  }

  stop() {
    this.sub?.unsubscribe();
    this.running.set(false);
  }
}
