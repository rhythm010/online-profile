import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightDetailsPanelComponent } from './right-details-panel.component';

describe('RightDetailsPanelComponent', () => {
  let component: RightDetailsPanelComponent;
  let fixture: ComponentFixture<RightDetailsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightDetailsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightDetailsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
