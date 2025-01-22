import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../../classes/pessoa';
import { PessoaService } from '../../../services/pessoa.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exemplo02',
  imports: [CommonModule],
  templateUrl: './exemplo02.component.html',
  styleUrl: './exemplo02.component.css'
})
export class Exemplo02Component implements OnInit{

  constructor(private service: PessoaService) {}

  ngOnInit(): void {
    this.listar();
  }

  pessoas : Pessoa[] = [];

  listar() : void{
    this.pessoas = this.service.listarPessoas();
  }

  nomePessoa!: string;
  mostrar(nome: string) : void{
    this.nomePessoa = nome;
  }
}
