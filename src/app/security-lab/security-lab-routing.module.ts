import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecurityLabComponent } from './security-lab.component';

const routes: Routes = [{ path: '', component: SecurityLabComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityLabRoutingModule { }
