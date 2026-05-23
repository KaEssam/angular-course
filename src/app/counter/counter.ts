import { Component, model } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  ///// input + output + emit
  // label = input<string>();

  // countChanged = output<number>();

  // count = signal(0);

  // increment() {
  //   this.count.update((count) => count + 1); // 2 3 4
  //   this.countChanged.emit(this.count()); //4
  // }

  // two way

  count = model(0);

  increment() {
    this.count.set(this.count() + 1);
  }
}
