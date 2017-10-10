import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudantePaginaInicialComponent } from './estudante-pagina-inicial.component';

describe('EstudantePaginaInicialComponent', () => {
  let component: EstudantePaginaInicialComponent;
  let fixture: ComponentFixture<EstudantePaginaInicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudantePaginaInicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudantePaginaInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
