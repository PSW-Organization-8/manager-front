import { TestBed } from '@angular/core/testing';

import { ActionsAndNewsService } from './actions-and-news.service';

describe('ActionsAndNewsService', () => {
  let service: ActionsAndNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionsAndNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
