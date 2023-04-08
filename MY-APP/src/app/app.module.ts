import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextcomponentComponent } from './textcomponent/textcomponent.component';
import { ImagecomponentComponent } from './imagecomponent/imagecomponent.component';
import { EmpInfoComponent } from './emp-info/emp-info.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateComponent } from './date/date.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    TextcomponentComponent,
    ImagecomponentComponent,
    EmpInfoComponent,
    FormComponentComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
