import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Usuario, Usuarios } from '../../servicios/usuarios';
import { CommonModule } from '@angular/common';
import {Validators} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario-usuario',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './formulario-usuario.html',
  styleUrl: './formulario-usuario.css',
})
export class FormularioUsuario {

  formulario: FormGroup
  datosEnviados: boolean = false

  constructor(private fb: FormBuilder, private usuariosService: Usuarios) {
    this.formulario = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      rol: ['', [Validators.required]]
    })
  }

  submitFormulario(): void {
    if (this.formulario.valid) {
      const nuevoUsuario : Omit<Usuario, 'id'> = {
        username: this.formulario.value.username,
        email: this.formulario.value.email,
        rol: this.formulario.value.rol,
        estado: 'activo'
      }
      this.usuariosService.addUsuario(nuevoUsuario)
      this.datosEnviados = true
    } else {
      alert('Por favor, complete el formulario correctamente antes de enviar.')
    }
  } 

  getFormularioError(fieldName: string): string {
    const field = this.formulario.get(fieldName)

    //Si el usuario no toco el campo no mostrar error  
    if(!field?.touched) {
      return '';
    }

    //En caso de que tu campo no este correctamente controlado, devolver ''
    if(!field){
      return '';
    }
    if (field?.hasError(ERRORS.REQUIRED.NAME)) {
      return 'Este campo es obligatorio.';
    }
    if (field?.hasError(ERRORS.EMAIL.NAME)) {
      return 'Ingrese un correo electrónico válido.';
    }
    if (field?.hasError(ERRORS.MIN_LENGTH.NAME)) {
      return 'El campo debe tener al menos 3 caracteres.';
    }
    return '';
  
  }
}

const ERRORS = {
  MIN_LENGTH: {
    NAME: 'minlength',
  },
  REQUIRED: {
    NAME: 'required'
  },
  PATTERN: {
    NAME: 'pattern'
  },
  EMAIL: {
    NAME: 'email'
  } 

}