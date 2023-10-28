import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emotionValue',
})
export class EmotionValuePipe implements PipeTransform {
  transform(value: string | number): string {
    if (typeof value === 'string') {
      value = +value;
    }
    switch (value) {
      case 0:
        return 'Happy';
      case 1:
        return 'Indifferent';
      case 2:
        return 'Sad';
      default:
        return '';
    }
  }
}
