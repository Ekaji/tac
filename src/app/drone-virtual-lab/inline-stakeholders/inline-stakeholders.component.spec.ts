import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineStakeholdersComponent } from './inline-stakeholders.component';

describe('InlineStakeholdersComponent', () => {
  let component: InlineStakeholdersComponent;
  let fixture: ComponentFixture<InlineStakeholdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineStakeholdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineStakeholdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
