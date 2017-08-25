import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderBarComponent } from "app/header-bar/header-bar.component";
import { FooterBarComponent } from "app/footer-bar/footer-bar.component";
import { routingComponents, AppRoutingModule } from "app/app-routing.module";
import { SharedModule } from "app/shared/shared.module";
import { CoreModule } from "app/core/core.module";
import { AgmCoreModule } from '@agm/core';
import { environment } from "environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderBarComponent,
    FooterBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googlekey,
      libraries: ["places"]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
