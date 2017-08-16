import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderBarComponent } from "app/header-bar/header-bar.component";
import { FooterBarComponent } from "app/footer-bar/footer-bar.component";
import { routingComponents, AppRoutingModule } from "app/app-routing.module";
import { SharedModule } from "app/shared/shared.module";
import { CoreModule } from "app/core/core.module";

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
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
