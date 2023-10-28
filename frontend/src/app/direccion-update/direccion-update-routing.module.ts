import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DireccionUpdatePage } from './direccion-update.page';

const routes: Routes = [
  {
    path: '',
    component: DireccionUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DireccionUpdatePageRoutingModule {}
