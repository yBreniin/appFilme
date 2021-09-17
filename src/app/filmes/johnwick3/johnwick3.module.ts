import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Johnwick3PageRoutingModule } from './johnwick3-routing.module';

import { Johnwick3Page } from './johnwick3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Johnwick3PageRoutingModule
  ],
  declarations: [Johnwick3Page]
})
export class Johnwick3PageModule {}
