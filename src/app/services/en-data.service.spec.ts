import { TestBed } from '@angular/core/testing';

import { EnDataService } from './en-data.service';

describe('EnDataService', () => {
  let service: EnDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
