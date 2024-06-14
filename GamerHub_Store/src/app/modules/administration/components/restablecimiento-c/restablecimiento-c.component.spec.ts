import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestablecimientoCComponent } from './restablecimiento-c.component';

describe('RestablecimientoCComponent', () => {
  let component: RestablecimientoCComponent;
  let fixture: ComponentFixture<RestablecimientoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestablecimientoCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestablecimientoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
