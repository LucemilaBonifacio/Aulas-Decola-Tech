import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tamanho'
})
export class TamanhoPipe implements PipeTransform {

  transform(value: string): string {
    let size : number = value.length;
    return `${value} [${size}]`;
  }

}
