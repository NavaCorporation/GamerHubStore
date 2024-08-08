import { TestBed } from '@angular/core/testing';

import { CarritopruebaService } from './carritoprueba.service';

describe('CarritopruebaService', () => {
  let service: CarritopruebaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarritopruebaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
