import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BMIComponent } from './bmi/bmi.component';
import { DemoComponent } from './demo/demo.component';
import { DummyComponent } from './demo/dummy/dummy.component';
import { SillyComponent } from './demo/silly/silly.component';
import { ErrorComponent } from './error/error.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  {
    path: "bmi",
    component: BMIComponent
  },
  {
    path: "events",
    component: EventsComponent
  },
  {
    path: "demo/:id",
    component: DemoComponent,
    children: [
      {
        path: "dummy",
        component: DummyComponent
      },
      {
        path: "silly",
        component: SillyComponent
      },
      {
        path: "**",
        component: ErrorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
