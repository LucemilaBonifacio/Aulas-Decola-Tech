import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InscricoesService } from '../../../services/inscricoes.service';
import { InscricoesCandidato } from '../../../classes/inscricoes-candidato';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-inscricoes',
  imports: [CommonModule],
  templateUrl: './lista-inscricoes.component.html',
  styleUrl: './lista-inscricoes.component.css'
})
export class ListaInscricoesComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private inscricaoService: InscricoesService
  ){}

    lista : InscricoesCandidato[] = [];

  ngOnInit(): void {
    const cpf = this.route.snapshot.paramMap.get('id') as string;
    this.inscricaoService.listarInscricoesApi(cpf)
    .subscribe(res => this.lista = res);
  }

}
