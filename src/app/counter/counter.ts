import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count = signal(0);

  incrment() {
    // this.count.set(this.count() + 1);d
    this.count.update((count) => count + 1);
  }

  do = this.count() * 2;
  double = computed(() => this.count() * 2);
  // double = computed(() => {
  //   console.log('double computed');
  //   this.count.set(this.count() + 1);
  //   return this.count();
  // });
  isEven = computed(() => this.count() % 2 === 0);
  label = computed(() => (this.isEven() ? 'even' : 'odd'));

  constructor() {
    effect(() => console.log(`count:`, this.count()));
  }
}
