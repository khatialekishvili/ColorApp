import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changecolor'
})
export class ChangecolorPipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').map((char, index) => {
      return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
    }).join('');
  }
}
