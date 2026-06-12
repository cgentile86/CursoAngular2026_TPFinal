import { Injectable } from '@angular/core';

export interface Usuario {
  id: number
  username: string
  email: string
  rol: 'admin' | 'user'
  estado: 'activo' | 'inactivo'
}

@Injectable({
  providedIn: 'root',
})

export class Usuarios {
  private listaUsuarios: Usuario[] = [ 
    { id: 1, username: 'admin1', email: 'administrador1@dummy.com', rol: 'admin', estado: 'activo' },
    { id: 2, username: 'admin2', email: 'administrador2@dummy.com', rol: 'admin', estado: 'inactivo' },
    { id: 3, username: 'usergenerico1', email: 'user1@example.com', rol: 'user', estado: 'activo' },
    { id: 4, username: 'usergenerico2', email: 'user2@example.com', rol: 'user', estado: 'inactivo' },
  ];

  getUsuarios() {
    return [...this.listaUsuarios]
  }
  
  addUsuario(usuario_raw: Omit<Usuario, 'id'>): Usuario {
    const newId = this.listaUsuarios.length > 0 ? Math.max(...this.listaUsuarios.map(usuario => usuario.id)) + 1 : 1
    const newUsuario: Usuario = { id: newId, ...usuario_raw }
    this.listaUsuarios.push(newUsuario)
    return newUsuario
  } 

  deleteUsuarioById(idUsuario: number): boolean {
    const cantidadUsuariosOriginal = this.listaUsuarios.length

    this.listaUsuarios = this.listaUsuarios.filter((usuario) => { return usuario.id != idUsuario })
    
    return this.listaUsuarios.length < cantidadUsuariosOriginal
  }

  getUsuarioById(idUsuario: number): Usuario | undefined {
    const usuario = this.listaUsuarios.find((usuario) => { return usuario.id === idUsuario })
    return usuario;
  }

  cambiarEstadoUsuario(idUsuario: number, nuevoEstado: 'activo' | 'inactivo'): boolean {
    const usuario = this.listaUsuarios.find((usuario) => { return usuario.id === idUsuario })

    if (usuario) {
      usuario.estado = nuevoEstado
      return true
    }
    return false
  }


      
}
