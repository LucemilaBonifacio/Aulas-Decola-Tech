import { Routes } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { HomeComponent } from './components/home/home.component';
import { ExemplosComponent } from './components/exemplos/exemplos.component';
import { CandidatosComponent } from './components/candidatos/candidatos.component';
import { Erro404Component } from './components/erros/erro404/erro404.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'exemplos', component: ExemplosComponent},
    {path: 'candidatos', component: CandidatosComponent},

    {path: '**', component: Erro404Component}
];
