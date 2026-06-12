import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing-module';
import { Usuarios } from './usuarios/usuarios';
import { ListaUsuarios } from '../../componentes/lista-usuarios/lista-usuarios';
import { FormularioUsuario } from '../../componentes/formulario-usuario/formulario-usuario';
import { UsuarioNuevo } from './usuario-nuevo/usuario-nuevo';

@NgModule({
  declarations: [Usuarios, UsuarioNuevo],
  imports: [CommonModule, UsuariosRoutingModule, ListaUsuarios, FormularioUsuario],
})
export class UsuariosModule {}
