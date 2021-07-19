import { TestBed } from '@angular/core/testing';

import { FinaleService } from './finale.service';

describe('FinaleService', () => {
  let service: FinaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
