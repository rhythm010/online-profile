import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleProgressComponent } from './bubble-progress.component';

describe('BubbleProgressComponent', () => {
  let component: BubbleProgressComponent;
  let fixture: ComponentFixture<BubbleProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BubbleProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BubbleProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
