import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from "app/home/home.component";
import { HeaderBarComponent } from "app/header-bar/header-bar.component";
import { FooterBarComponent } from "app/footer-bar/footer-bar.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderBarComponent,
    FooterBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
