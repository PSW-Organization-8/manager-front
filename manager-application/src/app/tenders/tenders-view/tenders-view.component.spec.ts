import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TendersViewComponent } from './tenders-view.component';

describe('TendersViewComponent', () => {
  let component: TendersViewComponent;
  let fixture: ComponentFixture<TendersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TendersViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TendersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
