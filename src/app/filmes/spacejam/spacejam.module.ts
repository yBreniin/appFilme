import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpacejamPageRoutingModule } from './spacejam-routing.module';

import { SpacejamPage } from './spacejam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpacejamPageRoutingModule
  ],
  declarations: [SpacejamPage]
})
export class SpacejamPageModule {}
