import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoctorShiftComponent } from './doctor-shift.component';



describe('DoctorShiftComponent', () => {
  let component: DoctorShiftComponent;
  let fixture: ComponentFixture<DoctorShiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorShiftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});