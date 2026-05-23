import { Component, inject } from '@angular/core';
import { counterService } from '../counterService';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  counterService = inject(counterService);
}
