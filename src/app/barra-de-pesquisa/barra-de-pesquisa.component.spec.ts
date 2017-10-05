import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraDePesquisaComponent } from './barra-de-pesquisa.component';

describe('BarraDePesquisaComponent', () => {
  let component: BarraDePesquisaComponent;
  let fixture: ComponentFixture<BarraDePesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraDePesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraDePesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
