import { TestBed } from '@angular/core/testing';

import { SuperuserserviceService } from './superuserservice.service';

describe('SuperuserserviceService', () => {
  let service: SuperuserserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperuserserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
