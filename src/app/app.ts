import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pipe } from './pipe/pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Pipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular');
}
