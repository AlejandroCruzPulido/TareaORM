import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'usuario-list',
    loadChildren: () => import('./usuario-list/usuario-list.module').then( m => m.UsuarioListPageModule)
  },
  {
    path: 'usuario-add',
    loadChildren: () => import('./usuario-add/usuario-add.module').then( m => m.UsuarioAddPageModule)
  },
  {
    path: 'usuario-update/:id',
    loadChildren: () => import('./usuario-update/usuario-update.module').then( m => m.UsuarioUpdatePageModule)
  },
  {
    path: 'direccion-list',
    loadChildren: () => import('./direccion-list/direccion-list.module').then( m => m.DireccionListPageModule)
  },
  {
    path: 'direccion-add',
    loadChildren: () => import('./direccion-add/direccion-add.module').then( m => m.DireccionAddPageModule)
  },
  {
    path: 'direccion-update/:id',
    loadChildren: () => import('./direccion-update/direccion-update.module').then( m => m.DireccionUpdatePageModule)
  },
  {
    path: 'perfil-list',
    loadChildren: () => import('./perfil-list/perfil-list.module').then( m => m.PerfilListPageModule)
  },
  {
    path: 'perfil-add',
    loadChildren: () => import('./perfil-add/perfil-add.module').then( m => m.PerfilAddPageModule)
  },
  {
    path: 'perfil-update/:id',
    loadChildren: () => import('./perfil-update/perfil-update.module').then( m => m.PerfilUpdatePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
