import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPharmaciesViewComponent } from './all-pharmacies-view.component';

describe('AllPharmaciesViewComponent', () => {
  let component: AllPharmaciesViewComponent;
  let fixture: ComponentFixture<AllPharmaciesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPharmaciesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPharmaciesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
