import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseTenderOrdersComponent } from './choose-tender-orders.component';

describe('ChooseTenderOrdersComponent', () => {
  let component: ChooseTenderOrdersComponent;
  let fixture: ComponentFixture<ChooseTenderOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseTenderOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseTenderOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
