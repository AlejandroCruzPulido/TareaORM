import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilAddPageRoutingModule } from './perfil-add-routing.module';

import { PerfilAddPage } from './perfil-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilAddPageRoutingModule
  ],
  declarations: [PerfilAddPage]
})
export class PerfilAddPageModule {}
