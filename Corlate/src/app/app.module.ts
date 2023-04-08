import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForwardSGComponent } from './forward-sg/forward-sg.component';
import { DetailsComponent } from './forward-sg/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    ForwardSGComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
