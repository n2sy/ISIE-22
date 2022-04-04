import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short',
})
export class ShortPipe implements PipeTransform {
  transform(value: string, nbMax: number): string {
    if (value.length > nbMax) return value.substring(0, nbMax) + '...';
    else return value;
  }
}
