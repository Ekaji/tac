import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { LabsComponent } from './labs/labs.component';


@NgModule({
  declarations: [HomepageComponent, NavComponent, HeaderComponent, LabsComponent],
  imports: [
    CommonModule, 
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
