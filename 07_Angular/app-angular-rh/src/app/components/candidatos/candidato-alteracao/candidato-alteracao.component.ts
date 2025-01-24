import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatosService } from '../../../services/candidatos.service';
import { Candidato } from '../../../classes/candidato';

@Component({
  selector: 'app-candidato-alteracao',
  imports: [FormsModule],
  templateUrl: './candidato-alteracao.component.html',
  styleUrl: './candidato-alteracao.component.css'
})
export class CandidatoAlteracaoComponent implements OnInit{

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private candidatoService: CandidatosService){}
  
    ngOnInit(): void {
      this.cpf = this.route.snapshot.paramMap.get('id') as string;
      this.candidatoService.getCandidatoApi(this.cpf)
      .subscribe(resposta => this.candidato = resposta);
  }
  cpf!: string;
  candidato: Candidato = new Candidato();

  fechar(): void{
    this.router.navigate(['/candidatos'])
  }
  alterar (candidato: Candidato): void {
    this.candidatoService.putCandidatoApi(candidato, this.cpf)
    .subscribe(() => this.fechar());
  }
}
