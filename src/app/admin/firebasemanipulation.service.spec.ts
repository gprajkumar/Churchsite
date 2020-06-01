import { TestBed } from '@angular/core/testing';

import { FirebasemanipulationService } from './firebasemanipulation.service';

describe('FirebasemanipulationService', () => {
  let service: FirebasemanipulationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebasemanipulationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
