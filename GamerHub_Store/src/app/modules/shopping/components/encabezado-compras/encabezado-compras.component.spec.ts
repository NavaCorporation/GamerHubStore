import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoComprasComponent } from './encabezado-compras.component';

describe('EncabezadoComprasComponent', () => {
  let component: EncabezadoComprasComponent;
  let fixture: ComponentFixture<EncabezadoComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncabezadoComprasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EncabezadoComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
