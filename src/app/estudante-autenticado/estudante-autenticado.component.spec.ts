import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudanteAutenticadoComponent } from './estudante-autenticado.component';

describe('EstudanteAutenticadoComponent', () => {
  let component: EstudanteAutenticadoComponent;
  let fixture: ComponentFixture<EstudanteAutenticadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudanteAutenticadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudanteAutenticadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
