import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { PChartComponent } from './p-chart/p-chart.component';
import { RemoteFormsComponent } from './remote-forms/remote-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SampleComponent } from './sample/sample.component';
import { DummyComponent } from './sample/dummy/dummy.component';
import { SillyComponent } from './sample/silly/silly.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    PChartComponent,
    RemoteFormsComponent,
    SampleComponent,
    DummyComponent,
    SillyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CalendarModule,
    TabViewModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


