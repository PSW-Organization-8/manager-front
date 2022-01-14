import { ComponentFixture,TestBed } from '@angular/core/testing';
import { RoomSchedule3Component } from './roomSchedule3.component';

describe('RoomSchedule3Component', () => {
  let component: RoomSchedule3Component;
  let fixture: ComponentFixture<RoomSchedule3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomSchedule3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomSchedule3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});