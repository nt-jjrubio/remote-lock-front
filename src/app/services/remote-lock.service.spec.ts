import { TestBed } from '@angular/core/testing';

import { RemoteLockService } from './remote-lock.service';

describe('RemoteLockService', () => {
  let service: RemoteLockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoteLockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
