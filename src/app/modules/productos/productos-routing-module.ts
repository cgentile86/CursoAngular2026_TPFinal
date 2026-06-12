import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductos } from '../../componentes/lista-productos/lista-productos';
import { ProductoDetalle } from './producto-detalle/producto-detalle';
import { Productos } from './productos';

const routes: Routes = [
  {
    path: '',
    component: Productos
  },
  {
    path: ':id',
    component:  ProductoDetalle
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
export class ProductosRoutingModule {
  
}
