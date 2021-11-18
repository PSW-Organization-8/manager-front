import { TestBed } from '@angular/core/testing';

import { CreateMedicationSpecificationReportService } from './create-medication-specification-report.service';

describe('CreateMedicationSpecificationReportService', () => {
  let service: CreateMedicationSpecificationReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateMedicationSpecificationReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
