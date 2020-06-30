import { TimelineComponent } from './timeline/timeline.component';
import { SubjectMattersComponent } from './subject-matters/subject-matters.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DroneVirtualLabRoutingModule } from './drone-virtual-lab-routing.module';
import { DroneVirtualLabComponent } from './drone-virtual-lab.component';
import { HeaderComponent } from './header/header.component';
import { InlineStakeholdersComponent } from './inline-stakeholders/inline-stakeholders.component';

@NgModule({
  declarations: [DroneVirtualLabComponent, HeaderComponent, InlineStakeholdersComponent, SubjectMattersComponent, TimelineComponent],
  imports: [
    CommonModule,
    DroneVirtualLabRoutingModule,
    SharedModule,
  ]
})
export class DroneVirtualLabModule { }
