import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasenia',
})
export class ContraseñaPipe implements PipeTransform {
  transform(value: string, mostrar: boolean = true): string {
    return mostrar ? '*'.repeat(value.length) : value;
  }
}
