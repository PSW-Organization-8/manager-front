import { TestBed } from '@angular/core/testing';

import { AllObjectionsViewService } from './all-objections-view.service';

describe('AllObjectionsViewService', () => {
  let service: AllObjectionsViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllObjectionsViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
