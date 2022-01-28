import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFeedbackViewComponent } from './all-feedback-view.component';

describe('AllFeedbackViewComponent', () => {
  let component: AllFeedbackViewComponent;
  let fixture: ComponentFixture<AllFeedbackViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFeedbackViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFeedbackViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
