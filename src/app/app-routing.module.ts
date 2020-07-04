import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: 'drone-virtual-lab', loadChildren: () => import('./drone-virtual-lab/drone-virtual-lab.module').then(m => m.DroneVirtualLabModule) },
  { path: 'security-lab', loadChildren: () => import('./security-lab/security-lab.module').then(m => m.SecurityLabModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
