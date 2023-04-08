import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropdownComponent } from './dropdown/dropdown.component';
import { PChartComponent } from './p-chart/p-chart.component';
import { RemoteFormsComponent } from './remote-forms/remote-forms.component';
import { SampleComponent } from './sample/sample.component';
import { DummyComponent } from './sample/dummy/dummy.component';
import { SillyComponent } from './sample/silly/silly.component';

const routes: Routes = [
  { path: "dropdown", component: DropdownComponent },
  { path: "pchart", component: PChartComponent },
  { path: "remoteforms", component: RemoteFormsComponent },
  {
    path: "sample/:id", component: SampleComponent,
    children: [{
      path: "dummy", component: DummyComponent
    },
    {
      path: "silly", component: SillyComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
