import { TestBed } from '@angular/core/testing';

import { LlamadaApiService } from './llamada-api.service';

describe('LlamadaApiService', () => {
  let service: LlamadaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LlamadaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
