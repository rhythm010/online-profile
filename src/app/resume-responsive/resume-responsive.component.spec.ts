import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeResponsiveComponent } from './resume-responsive.component';

describe('ResumeResponsiveComponent', () => {
  let component: ResumeResponsiveComponent;
  let fixture: ComponentFixture<ResumeResponsiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeResponsiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
