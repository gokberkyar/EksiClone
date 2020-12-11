import { TestBed } from '@angular/core/testing';

import { BaslikService } from './baslik.service';

describe('BaslikService', () => {
  let service: BaslikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaslikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
