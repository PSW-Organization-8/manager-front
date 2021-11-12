import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrgentProcurementOfMedicationComponent } from './urgent-procurement-of-medication.component';

describe('UrgentProcurementOfMedicationComponent', () => {
  let component: UrgentProcurementOfMedicationComponent;
  let fixture: ComponentFixture<UrgentProcurementOfMedicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrgentProcurementOfMedicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrgentProcurementOfMedicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
