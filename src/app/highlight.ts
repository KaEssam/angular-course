import { Directive, input, signal } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: {
    '(mouseenter)': 'onEnter()',
    '(mouseleave)': 'onLeave()',
    '[style.Color]': 'currentColor()',
    '[style.backgroundColor]': 'currnetbg()',
  },
})
export class Highlight {
  // el = inject(ElementRef<HTMLElement>);
  // constructor() {
  //   this.el.nativeElement.style.backgroundColor = 'yellow';
  // }

  currentColor = signal('');
  color = input('');

  currnetbg = signal('');
  bg = input('');

  onEnter() {
    this.currentColor.set(this.color() || 'yellow');
    this.currnetbg.set(this.bg() || 'blue');
  }

  onLeave() {
    this.currentColor.set('');
    this.currnetbg.set('');
  }
}
