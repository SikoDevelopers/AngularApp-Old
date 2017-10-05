import { Component, OnInit } from '@angular/core';
import { ConteudoDescricaoService } from './conteudo-descricao.service';

@Component({
  selector: 'app-conteudo-descricao',
  templateUrl: './conteudo-descricao.component.html',
  styleUrls: ['./conteudo-descricao.component.css']
})
export class ConteudoDescricaoComponent implements OnInit {
  descricoes;

  constructor(private _descricaoService: ConteudoDescricaoService) { }

  ngOnInit() {
    this.descricoes = this._descricaoService.getDescricoes();

  }



}
