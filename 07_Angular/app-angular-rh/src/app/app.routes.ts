import { Routes } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { HomeComponent } from './components/home/home.component';
import { ExemplosComponent } from './components/exemplos/exemplos.component';
import { CandidatosComponent } from './components/candidatos/candidatos.component';

export const routes: Routes = [
    {path: '', component: StartComponent},
    {path: 'home', component: HomeComponent},
    {path: 'exemplos', component: ExemplosComponent},
    {path: 'candidatos', component: CandidatosComponent}
];
