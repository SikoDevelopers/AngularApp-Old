import { Injectable } from '@angular/core';

@Injectable()
export class ConteudoDescricaoService {

  constructor() { }

  getDescricoes(){
    return [
      {
        icone: 'description',
        titulo: 'Trabalhos Cientificos',
        descricao: 'Encontre monografias passadas! de diversas areas produzidas por estudantes no final do curso.'
      },
      {
        icone: 'file_upload',
        titulo: 'Submissao de trabalho de fim de curso',
        descricao: 'Submeta trabalho de fim de curso a a comissao cientifica do seu departamento e faca o ' +
        'acompanhamento do estagio de avaliacao do mesmo.'
      },
      {
        icone: 'person',
        titulo: 'Supervisores',
        descricao: 'Encontre supervisores disponiveis para a sua area estudo para o seu trabalho de fim de curso.'
      },
      {
        icone: 'subject',
        titulo: 'Temas para trabalho de fim de curso',
        descricao: 'Encontre temas sugeridos pelos docentes para trabalho de fim de curso.'
      },
      {
        icone: 'date_range',
        titulo: 'Pre-Defesa e Defesa de trabalhos',
        descricao: 'Saiba as datas de realizacao de pre-defesa e defesas de trabalhos assim como o local da realizacao ' +
        'deste evento.'
      },



    ];
  }
}
