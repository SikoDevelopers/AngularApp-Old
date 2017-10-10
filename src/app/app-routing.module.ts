import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import {LoginComponent} from './login/login.component';
import {EstudanteAutenticadoComponent} from './estudante-autenticado/estudante-autenticado.component';
import {EstudanteTrabalhoComponent} from "./estudante-autenticado/estudante-trabalho/estudante-trabalho.component";

const appRoutes: Routes = [
  {path: '',component: LoginComponent},
  {path: 'estudante/home', component: EstudanteAutenticadoComponent},
  {path: 'estudante/trabalho', component: EstudanteAutenticadoComponent},
  {path: 'estudante/trabalho/submeter', component: EstudanteAutenticadoComponent},
  {path: '**', component: LoginComponent}
 ];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}
