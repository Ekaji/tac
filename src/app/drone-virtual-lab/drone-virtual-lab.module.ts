import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DroneVirtualLabRoutingModule } from './drone-virtual-lab-routing.module';
import { DroneVirtualLabComponent } from './drone-virtual-lab.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [DroneVirtualLabComponent, NavComponent],
  imports: [
    CommonModule,
    DroneVirtualLabRoutingModule
  ]
})
export class DroneVirtualLabModule { }
