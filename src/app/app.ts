import { Component } from '@angular/core';
import { Child } from './child/child';

@Component({
  selector: 'app-root',
  // template: `<h1>Hi, angular</h1>`,
  // styles: [
  //   `
  //     H1 {
  //       color: aquamarine;
  //     }
  //   `,
  // ],

  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Child],
})
export class App {}
