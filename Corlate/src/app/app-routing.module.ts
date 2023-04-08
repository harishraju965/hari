import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForwardSGComponent } from './forward-sg/forward-sg.component';

const routes: Routes = [
  {
    path: "fsg",
    component: ForwardSGComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
