import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inscricao } from '../classes/inscricao';
import { Observable } from 'rxjs';
import { Resposta } from '../classes/Resposta';
import { InscricoesCandidato } from '../classes/inscricoes-candidato';

@Injectable({
  providedIn: 'root'
})
export class InscricoesService {

  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:8081/inscricoes';

  public efetuarInscricaoApi(inscricao: Inscricao): Observable<Resposta>{
    const novo = "novo";
    return this.http.post<Resposta>(`${this.url}/${novo}`, inscricao);
  }
  public listarInscricoesApi(cpf: string) : Observable<InscricoesCandidato[]>{
    const candidatos = `candidatos/${cpf}`;
    return this.http.get<InscricoesCandidato[]>(`${this.url}/${candidatos}`);
  }
}
