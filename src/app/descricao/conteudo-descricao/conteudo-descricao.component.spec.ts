import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoDescricaoComponent } from './conteudo-descricao.component';

describe('ConteudoDescricaoComponent', () => {
  let component: ConteudoDescricaoComponent;
  let fixture: ComponentFixture<ConteudoDescricaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConteudoDescricaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteudoDescricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
