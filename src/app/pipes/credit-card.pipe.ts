import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard',
})
export class CreditCardPipe implements PipeTransform {
  transform(value: string): string {
    const notReadable = '*'.repeat(value.length - 4);
    const readable = value.substr(value.length - 4, value.length);
    const result = notReadable + readable;
    const separatedResult = result.match(/.{1,4}/g);
    const joinedResult = separatedResult.join(' ');
    return joinedResult;
  }
}
