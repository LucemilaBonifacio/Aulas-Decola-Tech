import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ExemplosComponent } from './components/exemplos/exemplos.component';
import { CandidatosComponent } from './components/candidatos/candidatos.component';
import { Erro404Component } from './components/erros/erro404/erro404.component';
import { CandidatoNovoComponent } from './components/candidatos/candidato-novo/candidato-novo.component';
import { CandidatoAlteracaoComponent } from './components/candidatos/candidato-alteracao/candidato-alteracao.component';
import { CandidatoRemocaoComponent } from './components/candidatos/candidato-remocao/candidato-remocao.component';
import { InscricaoComponent } from './components/inscricao/inscricao.component';
import { ListaInscricoesComponent } from './components/inscricao/lista-inscricoes/lista-inscricoes.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'exemplos', component: ExemplosComponent},

    {path: 'candidatos', component: CandidatosComponent},
    {path: 'candidatos/novo', component: CandidatoNovoComponent, canActivate: [authGuard] },
    {path: 'candidatos/alteracao/:id', component: CandidatoAlteracaoComponent, canActivate: [authGuard] },
    {path: 'candidatos/remocao/:id', component: CandidatoRemocaoComponent, canActivate: [authGuard] },
   
    {path: 'inscricoes', component: InscricaoComponent},
    {path: 'inscricoes/candidato/:id', component: ListaInscricoesComponent},
    {path: 'login', component: LoginComponent},

    {path: '**', component: Erro404Component}
];
