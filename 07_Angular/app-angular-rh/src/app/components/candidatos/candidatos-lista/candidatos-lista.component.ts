import { Component, OnInit } from '@angular/core';
import { CandidatosService } from '../../../services/candidatos.service';
import { Candidato } from '../../../classes/candidato';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-candidatos-lista',
  imports: [CommonModule, RouterLink],
  templateUrl: './candidatos-lista.component.html',
  styleUrl: './candidatos-lista.component.css'

})
export class CandidatosListaComponent implements OnInit {

  constructor(private candidatoSeervice: CandidatosService){}

    ngOnInit(): void {
        this.candidatoSeervice
        .getCandidatosApi()
        .subscribe(resposta => this.candidatos = resposta);
    }
    candidatos: Candidato[] = [];
  
}
