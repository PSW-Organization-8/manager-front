import { TestBed } from '@angular/core/testing';

import { CreateObjectionService } from './create-objection.service';

describe('CreateObjectionService', () => {
  let service: CreateObjectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateObjectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
