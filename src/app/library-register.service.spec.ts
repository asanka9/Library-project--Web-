import { TestBed } from '@angular/core/testing';

import { LibraryRegisterService } from './library-register.service';

describe('LibraryRegisterService', () => {
  let service: LibraryRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibraryRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
