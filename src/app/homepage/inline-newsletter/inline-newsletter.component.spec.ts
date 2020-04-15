import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineNewsletterComponent } from './inline-newsletter.component';

describe('InlineNewsletterComponent', () => {
  let component: InlineNewsletterComponent;
  let fixture: ComponentFixture<InlineNewsletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineNewsletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
