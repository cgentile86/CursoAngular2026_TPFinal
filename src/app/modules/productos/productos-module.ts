import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing-module';
import { Productos } from './productos';
import { ListaProductos } from '../../componentes/lista-productos/lista-productos';

@NgModule({
  declarations: [
    Productos
    ],
  imports: [
    CommonModule, 
    ProductosRoutingModule,
    ListaProductos
  ],
})
export class ProductosModule {}
