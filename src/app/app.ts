import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Flow } from './flow/flow';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Flow],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular');
}
