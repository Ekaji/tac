import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { HeaderComponent } from './header/header.component';
import { LabsComponent } from './labs/labs.component';
import { InlineAboutComponent } from './inline-about/inline-about.component';
import { InlineNewsletterComponent } from './inline-newsletter/inline-newsletter.component';
import { InlineBlogComponent } from './inline-blog/inline-blog.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HeaderPageNavComponent } from './header-page-nav/header-page-nav.component';
import { FounderComponent } from './founder/founder.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { PartnersComponent } from './partners/partners.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';
import { SupportComponent } from './support/support.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [HomepageComponent, HeaderComponent, LabsComponent, InlineAboutComponent, InlineNewsletterComponent, InlineBlogComponent, AboutUsComponent, HeaderPageNavComponent, FounderComponent, OurTeamComponent, PartnersComponent, ContactComponent, GalleryComponent, BlogComponent, SupportComponent, PageNotFoundComponent, BlogDetailComponent],
  imports: [
    CommonModule, 
    HomepageRoutingModule,
    DragScrollModule,
    HttpClientModule,
    SharedModule,
    RouterModule,
    MarkdownModule.forChild(),
  ]
})
export class HomepageModule { }
