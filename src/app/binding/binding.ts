import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  imports: [FormsModule],
  templateUrl: './binding.html',
  styleUrl: './binding.css',
})
export class Binding {
  //interpolion
  name = signal('mohab');

  // prop binding
  imageUrl = signal(
    'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/angular-icon.png',
  );

  isLoading = signal(true);
  isActive = signal(true);
  isinActive = signal(false);

  ///event bining

  onSave() {
    console.log('saving');
  }

  t = signal('');
  onTyping(event: Event) {
    const target = event.target as HTMLInputElement;
    this.t.set(target.value);
    console.log('value:', target.value);
  }

  word = signal('');
}
