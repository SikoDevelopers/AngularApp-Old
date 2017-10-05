import { TestBed, inject } from '@angular/core/testing';

import { ConteudoDescricaoService } from './conteudo-descricao.service';

describe('ConteudoDescricaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConteudoDescricaoService]
    });
  });

  it('should be created', inject([ConteudoDescricaoService], (service: ConteudoDescricaoService) => {
    expect(service).toBeTruthy();
  }));
});
