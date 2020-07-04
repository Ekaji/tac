import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityLabRoutingModule } from './security-lab-routing.module';
import { SecurityLabComponent } from './security-lab.component';
import { SharedModule } from '../shared/shared.module';
import { MarkdownModule } from 'ngx-markdown';
import { TacHeaderComponent } from './tac-header/tac-header.component';
import { SubjectMattersComponent } from './subject-matters/subject-matters.component';


@NgModule({
  declarations: [SecurityLabComponent, TacHeaderComponent, SubjectMattersComponent],
  imports: [
    CommonModule,
    SecurityLabRoutingModule,
    SharedModule,
    MarkdownModule.forChild(),
  ]
})
export class SecurityLabModule { }
