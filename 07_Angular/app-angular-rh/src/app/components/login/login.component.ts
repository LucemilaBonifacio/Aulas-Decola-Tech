import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../../classes/usuario';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  constructor(
    private router: Router,
    private usuarioService: UsuarioService){}
    
  ngOnInit(): void {
    localStorage.removeItem('nome_usuario');
  }

  user: Usuario = new Usuario();
  erro!: string;

  validar(usuario: Usuario): void{
    let resposta = this.usuarioService.getUsuarios()
    .find(u => u.username == usuario.username && u.password == usuario.password);

    if(resposta){
      localStorage.setItem('nome_usuario', usuario.username);
      this.router.navigate(['/candidatos']);
    } else{
      this.erro = "Usuário ou senha inválidos";
    }
  }
}
