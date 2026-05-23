import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-diractive',
  imports: [CommonModule],
  templateUrl: './diractive.html',
  styleUrl: './diractive.css',
})
export class Diractive {
  isActive = signal(true);
  isDisabel = signal(false);
  hasError = signal(true);

  statues = signal<'online' | 'away' | 'offline'>('online');
  isPremium = signal(true);

  bg = signal('#543145');
}
