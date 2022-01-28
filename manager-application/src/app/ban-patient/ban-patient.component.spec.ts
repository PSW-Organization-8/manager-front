import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanPatientComponent } from './ban-patient.component';

describe('BanPatientComponent', () => {
  let component: BanPatientComponent;
  let fixture: ComponentFixture<BanPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
