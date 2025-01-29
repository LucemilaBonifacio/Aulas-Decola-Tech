import { Injectable } from '@angular/core';
import { Usuario } from '../classes/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  getUsuarios() : Usuario[] {
    return [
      {username: 'admin', password: '1234'},
      {username:'avanade', password: 'decolatech'},
      {username: 'impacta', password: 'impacta'}
    ];
  }
}
