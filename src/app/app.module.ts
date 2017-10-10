import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BarraDoTopoComponent } from './barra-do-topo/barra-do-topo.component';
import {AppRoutingModule} from './app-routing.module';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { DescricaoComponent } from './descricao/descricao.component';
import { ConteudoDescricaoComponent } from './descricao/conteudo-descricao/conteudo-descricao.component';
import {ConteudoDescricaoService} from './descricao/conteudo-descricao/conteudo-descricao.service';
import { BarraDePesquisaComponent } from './barra-de-pesquisa/barra-de-pesquisa.component';
import { FooterComponent } from './footer/footer.component';
import { TrabalhosComponent } from './trabalhos/trabalhos.component';
import { TrabalhoComponent } from './trabalhos/trabalho/trabalho.component';
import {TrabalhoService} from './trabalhos/trabalho/trabalho.service';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { EstudanteAutenticadoComponent } from './estudante-autenticado/estudante-autenticado.component';
import { SidenavComponent } from './estudante-autenticado/sidenav/sidenav.component';
import { EstudantePaginaInicialComponent } from './estudante-autenticado/estudante-pagina-inicial/estudante-pagina-inicial.component';
import { EstudanteTrabalhoComponent } from './estudante-autenticado/estudante-trabalho/estudante-trabalho.component';
import { SubmeterTrabalhoComponent } from './estudante-autenticado/submeter-trabalho/submeter-trabalho.component';


@NgModule({
  declarations: [
    AppComponent,
    BarraDoTopoComponent,
    PaginaInicialComponent,
    DescricaoComponent,
    ConteudoDescricaoComponent,
    BarraDePesquisaComponent,
    FooterComponent,
    TrabalhosComponent,
    TrabalhoComponent,
    LoginComponent,
    LoginFormComponent,
    EstudanteAutenticadoComponent,
    SidenavComponent,
    EstudantePaginaInicialComponent,
    EstudanteTrabalhoComponent,
    SubmeterTrabalhoComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    ConteudoDescricaoService,
    TrabalhoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
