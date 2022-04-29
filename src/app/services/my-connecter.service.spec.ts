import { TestBed } from '@angular/core/testing';

import { MyConnecterService } from './my-connecter.service';

describe('MyConnecterService', () => {
  let service: MyConnecterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyConnecterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
