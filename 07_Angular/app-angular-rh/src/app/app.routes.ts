import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ExemplosComponent } from './components/exemplos/exemplos.component';
import { CandidatosComponent } from './components/candidatos/candidatos.component';
import { Erro404Component } from './components/erros/erro404/erro404.component';
import { CandidatoNovoComponent } from './components/candidatos/candidato-novo/candidato-novo.component';
import { CandidatoAlteracaoComponent } from './components/candidatos/candidato-alteracao/candidato-alteracao.component';
import { CandidatoRemocaoComponent } from './components/candidatos/candidato-remocao/candidato-remocao.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'exemplos', component: ExemplosComponent},
    {path: 'candidatos', component: CandidatosComponent},
    {path: 'candidatos/novo', component: CandidatoNovoComponent },
    {path: 'candidatos/alteracao/:id', component: CandidatoAlteracaoComponent},
    {path: 'candidatos/remocao/:id', component: CandidatoRemocaoComponent},

    {path: '**', component: Erro404Component}
];
