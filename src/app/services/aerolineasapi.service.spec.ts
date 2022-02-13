import { TestBed } from '@angular/core/testing';

import { AerolineasapiService } from './aerolineasapi.service';

describe('AerolineasapiService', () => {
  let service: AerolineasapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AerolineasapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
