import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BarraDoTopoComponent } from './barra-do-topo/barra-do-topo.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraDoTopoComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
