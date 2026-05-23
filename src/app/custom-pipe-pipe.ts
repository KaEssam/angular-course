import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
})
export class CustomPipePipe implements PipeTransform {
  transform(v: string, maxLenght = 50) {
    if (!v || v.length <= maxLenght) return v;

    return v.slice(0, maxLenght) + '...';
  }
}
