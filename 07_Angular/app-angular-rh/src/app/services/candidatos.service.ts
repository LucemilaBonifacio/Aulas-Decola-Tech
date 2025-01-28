import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidato } from '../classes/candidato';
import { Resposta } from '../classes/Resposta';

@Injectable({
  providedIn: 'root'
})
export class CandidatosService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:8081/candidatos";

  // método para listar todos os candidatos

public getCandidatosApi(): Observable<Candidato[]> {
  const url: string = "lista";
  return this.http.get<Candidato[]>(`${this.baseUrl}/${url}`);
  }
//método para buscar um candidato pelo cpf
public getCandidatoApi(cpf: string) : Observable<Candidato> {
  const url = `buscar/${cpf}`;
  return this.http.get<Candidato>(`${this.baseUrl}/${url}`);
}

//método para incluir novos candidatos
public postCandidatoApi(candidato: Candidato) : Observable<Candidato> {
  const url : string = "novo";
  return this.http.post<Candidato>(`${this.baseUrl}/${url}`, candidato);
 }
//método para alterar um candidato
public putCandidatoApi(candidato : Candidato, cpf: string) : Observable<Candidato>{
  const url = `alterar/${cpf}`;
  return this.http.put<Candidato>(`${this.baseUrl}/${url}`, candidato);
}
//método para remover um candidato
public deleteCandidatoApi(cpf: string) : Observable<Resposta>{
  const url = `remover/${cpf}`;
  return this.http.delete<Resposta>(`${this.baseUrl}/${url}`);
}

}
