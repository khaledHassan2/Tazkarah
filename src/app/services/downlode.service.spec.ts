import { TestBed } from '@angular/core/testing';

import { DownlodeService } from './downlode.service';

describe('DownlodeService', () => {
  let service: DownlodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownlodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
