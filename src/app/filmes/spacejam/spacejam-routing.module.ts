import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpacejamPage } from './spacejam.page';

const routes: Routes = [
  {
    path: '',
    component: SpacejamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpacejamPageRoutingModule {}
