import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DireccionUpdatePageRoutingModule } from './direccion-update-routing.module';

import { DireccionUpdatePage } from './direccion-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DireccionUpdatePageRoutingModule
  ],
  declarations: [DireccionUpdatePage]
})
export class DireccionUpdatePageModule {}
