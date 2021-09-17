import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Johnwick3Page } from './johnwick3.page';

const routes: Routes = [
  {
    path: '',
    component: Johnwick3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Johnwick3PageRoutingModule {}
