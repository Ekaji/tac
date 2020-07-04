import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityLabComponent } from './security-lab.component';

describe('SecurityLabComponent', () => {
  let component: SecurityLabComponent;
  let fixture: ComponentFixture<SecurityLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
