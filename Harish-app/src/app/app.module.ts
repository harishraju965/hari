import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { EventsComponent } from './events/events.component';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RemoteFormsComponent } from "./remote-forms/remote-forms.component";
import { BMIComponent } from './bmi/bmi.component';
import { SimpleCalcComponent } from './simple-calc/simple-calc.component';
import { DummyComponent } from './demo/dummy/dummy.component';
import { SillyComponent } from './demo/silly/silly.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    EventsComponent,
    PipesComponent,
    RemoteFormsComponent,
    BMIComponent,
    SimpleCalcComponent,
    DummyComponent,
    SillyComponent,
    ErrorComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppModule { }
