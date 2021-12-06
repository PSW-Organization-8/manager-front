import { TestBed } from '@angular/core/testing';

import { AllPharmaciesViewService } from './all-pharmacies-view.service';

describe('AllPharmaciesViewService', () => {
  let service: AllPharmaciesViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllPharmaciesViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
