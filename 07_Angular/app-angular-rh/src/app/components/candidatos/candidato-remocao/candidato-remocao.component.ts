import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidato } from '../../../classes/candidato';
import { CandidatosService } from '../../../services/candidatos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-candidato-remocao',
  imports: [CommonModule],
  templateUrl: './candidato-remocao.component.html',
  styleUrl: './candidato-remocao.component.css'
})
export class CandidatoRemocaoComponent {

  constructor(private router: Router,
     private route:ActivatedRoute, 
     private candidatoService: CandidatosService ){}

     ngOnInit(): void{
      this.cpf = this.route.snapshot.paramMap.get('id') as string;
      this.candidatoService.getCandidatoApi(this.cpf)
      .subscribe(res => this.candidato = res);
     }

     candidato: Candidato = new Candidato();
     cpf!: string;
     erro: string = '';
     

     fechar() : void {
      this.router.navigate(['/candidatos']);
    }

    remover() : void{
      this.candidatoService.deleteCandidatoApi(this.cpf)
      .subscribe({
      next: res => this.erro = res.mensagem,
      complete:() => this.fechar(),       
      error: e => this.erro = e.message
    });

    }

}