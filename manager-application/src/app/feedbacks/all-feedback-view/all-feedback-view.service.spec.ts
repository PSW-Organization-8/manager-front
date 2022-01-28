import { TestBed } from '@angular/core/testing';

import { AllFeedbackViewService } from './all-feedback-view.service';

describe('AllFeedbackViewService', () => {
  let service: AllFeedbackViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllFeedbackViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
