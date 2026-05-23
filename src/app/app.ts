import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Diractive } from './diractive/diractive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Diractive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular');
}
