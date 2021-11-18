import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMedicationSpecificationReportComponent } from './create-medication-specification-report.component';

describe('CreateMedicationSpecificationReportComponent', () => {
  let component: CreateMedicationSpecificationReportComponent;
  let fixture: ComponentFixture<CreateMedicationSpecificationReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMedicationSpecificationReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMedicationSpecificationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
