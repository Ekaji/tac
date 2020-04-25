import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DroneVirtualLabRoutingModule } from './drone-virtual-lab-routing.module';
import { DroneVirtualLabComponent } from './drone-virtual-lab.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { InlineStakeholdersComponent } from './inline-stakeholders/inline-stakeholders.component';

@NgModule({
  declarations: [DroneVirtualLabComponent, NavComponent, HeaderComponent, InlineStakeholdersComponent],
  imports: [
    CommonModule,
    DroneVirtualLabRoutingModule,
    SharedModule,
  ]
})
export class DroneVirtualLabModule { }
