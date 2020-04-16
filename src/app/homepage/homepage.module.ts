import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { LabsComponent } from './labs/labs.component';
import { InlineAboutComponent } from './inline-about/inline-about.component';
import { InlineNewsletterComponent } from './inline-newsletter/inline-newsletter.component';
import { InlineBlogComponent } from './inline-blog/inline-blog.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [HomepageComponent, NavComponent, HeaderComponent, LabsComponent, InlineAboutComponent, InlineNewsletterComponent, InlineBlogComponent, FooterComponent, AboutUsComponent],
  imports: [
    CommonModule, 
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
