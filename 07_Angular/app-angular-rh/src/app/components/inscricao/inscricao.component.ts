import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CargoService } from '../../services/cargo.service';
import { Cargo } from '../../classes/cargo';
import { Candidato } from '../../classes/candidato';
import { CandidatosService } from '../../services/candidatos.service';
import { Inscricao } from '../../classes/inscricao';
import { InscricoesService } from '../../services/inscricoes.service';

@Component({
  selector: 'app-inscricao',
  imports: [FormsModule, CommonModule],
  templateUrl: './inscricao.component.html',
  styleUrl: './inscricao.component.css'
})
export class InscricaoComponent implements OnInit{

  constructor(private router: Router, 
  private cargoService: CargoService, 
  private candidatoService: CandidatosService, 
  private inscricaoService: InscricoesService){}

  ngOnInit(): void {
    this.listarCargos();
    this.listarCandidatos();
  }

  cargos: Cargo[] = [];
  candidatos: Candidato[] = [];
  inscricao: Inscricao = new Inscricao;

  erro: string = '';
  sucesso: string = '';


  listarCargos(): void{
    this.cargoService.getCargosApi()
    .subscribe(res => this.cargos = res);
  }
  listarCandidatos(): void{
    this.candidatoService.getCandidatosApi()
    .subscribe(res => this.candidatos = res);
  }
  incluir(): void{
    // console.log(this.inscricao);
    this.inscricaoService.efetuarInscricaoApi(this.inscricao)
    .subscribe({
      next: res => this.sucesso = res.mensagem,
      error: e => this.erro = e.mensage
    })
  }

}
