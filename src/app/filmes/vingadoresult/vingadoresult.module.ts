import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VingadoresultPageRoutingModule } from './vingadoresult-routing.module';

import { VingadoresultPage } from './vingadoresult.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VingadoresultPageRoutingModule
  ],
  declarations: [VingadoresultPage]
})
export class VingadoresultPageModule {}
