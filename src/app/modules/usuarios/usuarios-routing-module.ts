import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Usuarios } from './usuarios/usuarios';
import { UsuarioDetalle } from './usuario-detalle/usuario-detalle';
import { UsuarioNuevo } from './usuario-nuevo/usuario-nuevo';

const routes: Routes = [
  {
    path: '',
    component: Usuarios
  },
  {
    path: 'consulta/:id',
    component:  UsuarioDetalle
  },
  {
    path: 'crear',
    component: UsuarioNuevo
  },
  {
      path:'**',
      redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosRoutingModule {}
