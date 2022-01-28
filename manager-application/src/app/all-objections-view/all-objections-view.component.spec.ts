import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllObjectionsViewComponent } from './all-objections-view.component';

describe('AllObjectionsViewComponent', () => {
  let component: AllObjectionsViewComponent;
  let fixture: ComponentFixture<AllObjectionsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllObjectionsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllObjectionsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
