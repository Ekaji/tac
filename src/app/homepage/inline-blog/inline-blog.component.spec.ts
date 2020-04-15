import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineBlogComponent } from './inline-blog.component';

describe('InlineBlogComponent', () => {
  let component: InlineBlogComponent;
  let fixture: ComponentFixture<InlineBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
