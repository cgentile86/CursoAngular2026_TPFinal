import { Injectable } from '@angular/core';

export interface Producto {
  id: number;
  codigo: string;
  nombre: string;
  marca: string;
  precio: number;
  descuento: number;
  fechaLanzamiento: Date
}

@Injectable({
  providedIn: 'root',
})
export class Productos {


private listaProductos: Producto[] = [
  { id: 1, codigo: 'TV12345',  nombre: 'Televisión 42 pulgadas', precio: 350000 , marca: 'Philips', descuento: 0.2, fechaLanzamiento: new Date('2026-05-01') },
  { id: 2, codigo: 'HOME12314',  nombre: 'Microondas 10Lts', precio: 250000 , marca: 'Peabody', descuento: 0.1, fechaLanzamiento: new Date('2026-06-01') },
  { id: 3, codigo: 'HOME12315',  nombre: 'Heladera con freezer', precio: 850000 , marca: 'Atma', descuento: 0.15, fechaLanzamiento: new Date('2026-04-01') },
  { id: 4, codigo: 'PC12315',  nombre: 'Notebook HP 15-fc0025wm Ryzen 5 7520U 8Gb Ssd 1Tb 15.6', precio: 900000 , marca: 'HP', descuento: 0.15, fechaLanzamiento: new Date('2026-01-01')},
  { id: 5, codigo: 'PC12316',  nombre: 'Notebook Laptop Lenovo Ideapad Ryzen 5 7520U 8gb 256gb Ssd Win 11 82VG00WXUS', precio: 715000 , marca: 'Lenovo', descuento: 0.10, fechaLanzamiento: new Date('2026-01-01') }
];

getProductos(){
  return [...this.listaProductos]
}

addProducto(producto_raw : Omit<Producto,'id'>): Producto {
  const newId = this.listaProductos.length > 0 ? Math.max(...this.listaProductos.map(producto => producto.id))+1 : 1 
  const newProducto : Producto = { id : newId,  ...producto_raw }
  this.listaProductos.push(newProducto)
  return newProducto
}


deleteProductoById (idProducto:number) : boolean{
  const cantidadProductosOriginal = this.listaProductos.length

  //filtro productos que no tengan el id a borrar para actualizar lista
  this.listaProductos = this.listaProductos.filter((producto) => {return producto.id != idProducto} )

  return this.listaProductos.length < cantidadProductosOriginal

}

getProductoById(idProducto:number) : Producto |undefined{
  const producto = this.listaProductos.find((producto) => {return producto.id === idProducto})
  return producto;
}









}

