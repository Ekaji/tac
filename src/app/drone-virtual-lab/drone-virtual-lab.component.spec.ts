import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneVirtualLabComponent } from './drone-virtual-lab.component';

describe('DroneVirtualLabComponent', () => {
  let component: DroneVirtualLabComponent;
  let fixture: ComponentFixture<DroneVirtualLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroneVirtualLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DroneVirtualLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
