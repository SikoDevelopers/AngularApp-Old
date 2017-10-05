import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';

const appRoutes: Routes = [
  { path: '',component: PaginaInicialComponent}
 ];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}
