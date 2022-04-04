import { TestBed } from '@angular/core/testing';

import { ListCandidatService } from './list-candidat.service';

describe('ListCandidatService', () => {
  let service: ListCandidatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCandidatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
