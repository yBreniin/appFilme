import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HappyfeetPageRoutingModule } from './happyfeet-routing.module';

import { HappyfeetPage } from './happyfeet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HappyfeetPageRoutingModule
  ],
  declarations: [HappyfeetPage]
})
export class HappyfeetPageModule {}
