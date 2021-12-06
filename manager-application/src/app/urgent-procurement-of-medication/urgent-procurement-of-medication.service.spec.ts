import { TestBed } from '@angular/core/testing';

import { UrgentProcurementOfMedicationService } from './urgent-procurement-of-medication.service';

describe('UrgentProcurementOfMedicationService', () => {
  let service: UrgentProcurementOfMedicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrgentProcurementOfMedicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
