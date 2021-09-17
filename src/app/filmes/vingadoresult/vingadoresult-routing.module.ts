import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VingadoresultPage } from './vingadoresult.page';

const routes: Routes = [
  {
    path: '',
    component: VingadoresultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VingadoresultPageRoutingModule {}
