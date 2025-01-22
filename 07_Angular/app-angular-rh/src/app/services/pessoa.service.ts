import { Injectable } from '@angular/core';
import { Pessoa } from '../classes/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor() { }

  public listarPessoas(): Pessoa[] {
    return [
      {nome: 'Samuel', idade: 22},
      {nome: 'Ana Paula', idade: 25},
      {nome: 'Daniela', idade: 33},
      {nome: 'Maria', idade: 40},
      {nome: 'Osvaldo', idade: 45}
    ];
  }
}
