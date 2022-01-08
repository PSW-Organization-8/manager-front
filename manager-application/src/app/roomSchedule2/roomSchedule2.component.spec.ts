import { ComponentFixture,TestBed } from '@angular/core/testing';
import { RoomSchedule2Component } from './roomSchedule2.component';

describe('RoomSchedule2Component', () => {
  let component: RoomSchedule2Component;
  let fixture: ComponentFixture<RoomSchedule2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomSchedule2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomSchedule2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});