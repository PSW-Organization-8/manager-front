import { TestBed } from '@angular/core/testing';

import { MoveEquipmentService } from './moveEquipment.service';

describe('MoveEquipmentService', () => {
  let service: MoveEquipmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoveEquipmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});