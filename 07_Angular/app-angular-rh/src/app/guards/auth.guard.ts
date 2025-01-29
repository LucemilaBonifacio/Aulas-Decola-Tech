import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

export const authGuard: CanActivateFn = (route, state) => {
  
  const usuarioService  = inject(UsuarioService);
  const router = inject(Router);

  if(!localStorage.getItem('nome_usuario')){

    return router.parseUrl('/login');
  
  } else{
    return true;
    /*
    // buscando o usuario armazenado no localStorage
    let usuario: string = localStorage.getItem('nome_usuario') as string;
    
    // buscando o usuário na lista que contenha como username, o nome
    // buscado aleatoriamente
    let usuarioLista = usuarioService.getUsuarios().find(u => u.username == usuario);
    
    if(usuarioLista?.username == usuario){
      return true;
    }
    return router.parseUrl('login');*/
  }
    
};

