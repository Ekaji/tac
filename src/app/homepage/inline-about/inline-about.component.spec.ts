import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineAboutComponent } from './inline-about.component';

describe('InlineAboutComponent', () => {
  let component: InlineAboutComponent;
  let fixture: ComponentFixture<InlineAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
