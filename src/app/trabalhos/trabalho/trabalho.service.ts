import { Injectable } from '@angular/core';

@Injectable()
export class TrabalhoService {

  constructor() { }

  getTrabalhos() {
    return [
      {
        estudante: 'Ercilio Marques',
        tema: 'Problematica da capacidade de nao perca de foco ao encontrar mocas',
        nrPalavras: '2009',
        nrPaginas: '190',
        curso: 'INFORMATICA',
        area: 'Saude Mental'
      },
      {
        estudante: 'Herquiloide Hele',
        tema: 'Sistema de Lemrancas quando o nivel de esquecimento tende a ser muito ...',
        nrPalavras: '1023',
        nrPaginas: '130',
        curso: 'INFORMATICA',
        area: 'Saude Mental'
      },
      {
        estudante: 'Alfredo',
        tema: 'Sistema de Auto-Analise e Engenharia de Requisitos',
        nrPalavras: '200',
        nrPaginas: '10',
        curso: 'INFORMATICA',
        area: 'Bem estar do Programador'
      },
      {
        estudante: 'Ercilio Marques',
        tema: 'Tema',
        nrPalavras: '2009',
        nrPaginas: '190',
        curso: 'INFORMATICA',
        area: 'Saude Mental'
      },
    ];
  }

}
