import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {
  name = input.required<string>();
  email = input<string>('no email');

  deleted = output<string>();
  selected = output();

  incremant = output();


  onDelete() {
    this.deleted.emit(this.email());
    console.log('user deleted:', this.email());
  }

  onSelect() {
    this.selected.emit();
  }
}
