import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMedicationConsumptionReportComponent } from './create-medication-consumption-report.component';

describe('CreateMedicationConsumptionReportComponent', () => {
  let component: CreateMedicationConsumptionReportComponent;
  let fixture: ComponentFixture<CreateMedicationConsumptionReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMedicationConsumptionReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMedicationConsumptionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
