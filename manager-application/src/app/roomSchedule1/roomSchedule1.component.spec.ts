import { ComponentFixture,TestBed } from '@angular/core/testing';
import { RoomSchedule1Component } from './roomSchedule1.component';

describe('RoomSchedule1Component', () => {
  let component: RoomSchedule1Component;
  let fixture: ComponentFixture<RoomSchedule1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomSchedule1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomSchedule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});