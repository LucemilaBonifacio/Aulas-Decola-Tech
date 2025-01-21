import { Component } from '@angular/core';
import { Exemplo01Component } from "./exemplo01/exemplo01.component";

@Component({
  selector: 'app-exemplos',
  imports: [Exemplo01Component],
  templateUrl: './exemplos.component.html',
  styleUrl: './exemplos.component.css'
})
export class ExemplosComponent {

}

