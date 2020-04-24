import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DroneVirtualLabComponent } from './drone-virtual-lab.component';

const routes: Routes = [{ path: '', component: DroneVirtualLabComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DroneVirtualLabRoutingModule { }
