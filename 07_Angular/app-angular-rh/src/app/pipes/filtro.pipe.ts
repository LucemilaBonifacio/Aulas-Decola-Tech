import { Pipe, PipeTransform } from '@angular/core';
import { Pessoa } from '../classes/pessoa';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: Pessoa[], input: String): Pessoa[]{

    return !input ? value : value.filter(p => p.nome.toLocaleLowerCase().includes(input.toLocaleLowerCase()));

  }

}
