import { Component, OnInit, inject } from '@angular/core';
import { Usuario, Usuarios } from '../../../servicios/usuarios';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-usuario-detalle',
  imports: [],
  templateUrl: './usuario-detalle.html',
  styleUrl: './usuario-detalle.css',
})
export class UsuarioDetalle implements OnInit {

  private route = inject(ActivatedRoute)
  private router = inject(Router)
  private usuarioService = inject(Usuarios)

  usuario: Usuario | undefined
  errorMsg = ''
  
  ngOnInit(): void {
    this.CargarUsuario()
  }

  CargarUsuario(): void{
   
    const id_usuario_param = this.route.snapshot.paramMap.get('id')
    if(id_usuario_param){
      const id = parseInt(id_usuario_param)
      console.log("el id es: " + id)
      this.usuario = this.usuarioService.getUsuarioById(id)
      if(!this.usuario){
        this.errorMsg = `Usuario con ID #${id} no encontrado.`
      }
    }
    else{
      this.errorMsg = 'ID del usuario no especificado'
    }
  }
  
  volver (): void{
    this.router.navigate(['usuarios'])
  }
  
}

