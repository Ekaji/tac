import { SupportComponent } from './support/support.component';
import { ContactComponent } from './contact/contact.component';
import { FounderComponent } from './founder/founder.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { PartnersComponent } from './partners/partners.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: 'about', component: AboutUsComponent },
  { path: 'founder', component: FounderComponent},
  { path: 'team', component: OurTeamComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'support', component: SupportComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
