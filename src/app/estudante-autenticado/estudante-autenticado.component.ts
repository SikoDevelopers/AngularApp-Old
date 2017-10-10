import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-estudante-autenticado',
  templateUrl: './estudante-autenticado.component.html',
  styleUrls: ['./estudante-autenticado.component.css']
})
export class EstudanteAutenticadoComponent implements OnInit {
  routa : string;
  mostrarPaginaInicial: boolean = true;
  constructor(private _router: Router) { }

  ngOnInit() {
    this.routa = this._router.url;

  }


}
