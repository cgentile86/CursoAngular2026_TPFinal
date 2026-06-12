import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto, Productos } from '../../../servicios/productos';
import { CurrencyPipe, DatePipe, PercentPipe } from '@angular/common';
import { DescuentoPipe } from '../../../pipes/descuento-pipe';

@Component({
  selector: 'app-producto-detalle',

  templateUrl: './producto-detalle.html',
  styleUrl: './producto-detalle.css',
  imports: [
    CurrencyPipe,
    DatePipe,
    DescuentoPipe, 
    PercentPipe
  ]
})
export class ProductoDetalle implements OnInit {

  private route = inject(ActivatedRoute)
  private router = inject(Router)
  private productoService = inject(Productos)

  producto: Producto | undefined
  errorMsg = ''

  ngOnInit(): void {
    //Acceder al id del usuario de la URL
    const id_producto_param = this.route.snapshot.paramMap.get('id')
    if(id_producto_param){
      const id = parseInt(id_producto_param)

      //Llamar al metodo getUserById y obtener el usuario
      this.producto = this.productoService.getProductoById(id)
      if(!this.producto){
        this.errorMsg = `Producto con ID #${id} no encontrado.`
      }
    }
    else{
      this.errorMsg = 'ID del producto no especificado'
    }
  }

  volver (): void{
    this.router.navigate(['productos'])
  } 

}
