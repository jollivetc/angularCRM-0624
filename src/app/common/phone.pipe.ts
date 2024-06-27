import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
  standalone: true
})
export class PhonePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(typeof value === 'string'){
      return value.replace(/(.{2})/g, "$1 ").trim();
    }
    return value;
  }

}
