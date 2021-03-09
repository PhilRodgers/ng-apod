import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../src/app/app-routing.module';
import { AppComponent } from '../src/app/app.component';
import { ApodComponent } from '../src/app/apod/apod.component';

// Relative import from the current directory to your PC's file system
import { NgApodConfig } from '../config/ng-apod.config';

@NgModule({
  declarations: [
    AppComponent,
    ApodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    NgApodConfig //Add as a provider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }