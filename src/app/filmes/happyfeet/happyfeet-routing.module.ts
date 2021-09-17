import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HappyfeetPage } from './happyfeet.page';

const routes: Routes = [
  {
    path: '',
    component: HappyfeetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HappyfeetPageRoutingModule {}
