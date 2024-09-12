import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraDeMediaComponent } from './calculadora-de-media.component';

describe('CalculadoraDeMediaComponent', () => {
  let component: CalculadoraDeMediaComponent;
  let fixture: ComponentFixture<CalculadoraDeMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraDeMediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraDeMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
