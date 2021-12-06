import { TestBed } from '@angular/core/testing';

import { CreateMedicationConsumptionReportService } from './create-medication-consumption-report.service';

describe('CreateMedicationConsumptionReportService', () => {
  let service: CreateMedicationConsumptionReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateMedicationConsumptionReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
