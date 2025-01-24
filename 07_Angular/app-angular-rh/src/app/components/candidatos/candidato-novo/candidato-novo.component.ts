import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Candidato } from '../../../classes/candidato';
import { FormsModule } from '@angular/forms';
import { CandidatosService } from '../../../services/candidatos.service';

@Component({
  selector: 'app-candidato-novo',
  imports: [FormsModule],
  templateUrl: './candidato-novo.component.html',
  styleUrl: './candidato-novo.component.css'
})
export class CandidatoNovoComponent {

  constructor(
    private router: Router, 
    private candidatoService: CandidatosService) {}

  candidato: Candidato = new Candidato();

  fechar() : void {
    this.router.navigate(['/candidatos'])
  }

  mostrar(): void{
    window.alert(this.candidato.mostrar());
  }

  incluir(candidato: Candidato) : void {
    this.candidatoService.postCandidatoApi(candidato)
    .subscribe({
      complete:() => this.fechar(),
      error: erro => {
        console.error(erro);
        window.alert(erro);
      }
          
      
    });
  }
}
