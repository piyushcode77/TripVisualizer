import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TripInputComponent } from './trip-input/trip-input.component';
import { TripTimelineComponent } from './trip-timeline/trip-timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    TripInputComponent,
    TripTimelineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
