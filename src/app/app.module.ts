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

@NgModule({
  declarations: [
    AppComponent,
    BarraDoTopoComponent,
    PaginaInicialComponent,
    DescricaoComponent,
    ConteudoDescricaoComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    AppRoutingModule
  ],
  providers: [ConteudoDescricaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
