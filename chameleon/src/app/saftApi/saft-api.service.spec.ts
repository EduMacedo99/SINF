import { TestBed } from '@angular/core/testing';

import { SaftApiService } from './saft-api.service';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaftApiService = TestBed.get(SaftApiService);
    expect(service).toBeTruthy();
  });
});
