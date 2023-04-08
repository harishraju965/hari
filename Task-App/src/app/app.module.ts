import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AwesomeComponent } from './awesome/awesome.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { LoremComponent } from './lorem/lorem.component';
import { CopyComponent } from './copy/copy.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AwesomeComponent,
    SubscribeComponent,
    LoremComponent,
    CopyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
