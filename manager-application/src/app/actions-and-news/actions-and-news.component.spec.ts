import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsAndNewsComponent } from './actions-and-news.component';

describe('ActionsAndNewsComponent', () => {
  let component: ActionsAndNewsComponent;
  let fixture: ComponentFixture<ActionsAndNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionsAndNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsAndNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
