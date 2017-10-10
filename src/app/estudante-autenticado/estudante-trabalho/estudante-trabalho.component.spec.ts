import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudanteTrabalhoComponent } from './estudante-trabalho.component';

describe('EstudanteTrabalhoComponent', () => {
  let component: EstudanteTrabalhoComponent;
  let fixture: ComponentFixture<EstudanteTrabalhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudanteTrabalhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudanteTrabalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
