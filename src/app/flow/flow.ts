import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-flow',
  imports: [],
  templateUrl: './flow.html',
  styleUrl: './flow.css',
})
export class Flow {
  user = signal<{ name: string } | null>(null);
  loading = signal(false);

  login() {
    this.user.set({ name: 'Ahmed' });
  }

  logout() {
    this.user.set(null);
  }

  todos = signal([
    { id: 1, text: 'to do 1' },
    { id: 2, text: 'to do 2' },
    { id: 3, text: 'to do 3' },
  ]);

  addTodo() {
    this.todos.update((arr) => [...arr, { id: arr.length + 1, text: 'new todo' }]);
  }

  clearTodos() {
    this.todos.set([]);
  }
}
