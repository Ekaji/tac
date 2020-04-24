import { DroneVirtualLabModule } from './drone-virtual-lab/drone-virtual-lab.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Third Party Module
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Feature Modules
import { HomepageModule } from './homepage/homepage.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    // NgbModule,

    //Feature Modules
    HomepageModule,
    DroneVirtualLabModule,

    //Core Modules
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
