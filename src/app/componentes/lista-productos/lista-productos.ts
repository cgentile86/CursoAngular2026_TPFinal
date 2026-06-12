import { Component, inject, OnInit } from '@angular/core';
import { CurrencyPipe,DatePipe, PercentPipe } from '@angular/common';
import { DescuentoPipe } from '../../pipes/descuento-pipe'; 
import { Producto, Productos } from '../../servicios/productos';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-lista-productos',
  imports: [
    CurrencyPipe,
    DatePipe,
    DescuentoPipe, 
    PercentPipe,
    RouterLink
  ],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css',
})
export class ListaProductos implements OnInit {

listaProductos : Producto[] = [];

private productosService = inject(Productos)

ngOnInit(): void {
  console.log('ListaProductos component initialized');
  this.cargarProductos()
}

cargarProductos(): void{
  this.listaProductos = this.productosService.getProductos()
}

agregarProductoRandom(): void {

const nombresRandom = [ 'Televisión', 
                        'Cocina', 
                        'Celular',
                        'Plancha', 
                        'Termotanques',
                        'Lavarropas',
                        'Aire acondicionado',
                        'Calefactor',
                        'Ventilador',
                        'Microondas'
                        ]
const marcasRandom = ['Philips',
                      'Peabody',
                      'Atma',
                      'HP',
                      'Lenovo',
                      'Samsung',
                      'Sony',
                      'LG',
                      'Drean',
                      'Rheem'
                    ]
  
const nombreAleatorio = nombresRandom[Math.floor(Math.random()*nombresRandom.length)]
const marcaAleatoria = marcasRandom[Math.floor(Math.random()*marcasRandom.length)]  
const precioAleatorio = Math.floor(Math.random()*1000000)

// Descuento aleatorio entre 0% y 50%
const descuentoAleatorio = parseFloat((Math.random()*0.5).toFixed(2))

// Fecha de lanzamiento aleatoria entre el año pasado y hoy
const ahora: Date = new Date();
const anoPasado: Date = new Date();
anoPasado.setFullYear(ahora.getFullYear() - 1);
const tiempoMinimo: number = anoPasado.getTime();
const tiempoMaximo: number = ahora.getTime();
const tiempoAleatorio: number = tiempoMinimo + Math.random() * (tiempoMaximo - tiempoMinimo);
const fechaLanzamiento_aleatoria = new Date(tiempoAleatorio)

// Creo un producto simulado con los datos aleatorios generados
const productoSimulado : Omit<Producto,'id'> = {
    codigo: `COD${Math.floor(Math.random()*100000)}`,
    nombre: nombreAleatorio,
    marca: marcaAleatoria,
    precio: precioAleatorio,
    descuento: descuentoAleatorio,
    fechaLanzamiento: fechaLanzamiento_aleatoria
 }

  this.productosService.addProducto(productoSimulado)
  this.cargarProductos()

}

eliminarProducto(idProducto:number): void{
  if(this.productosService.deleteProductoById(idProducto)){ 
    this.cargarProductos()
  }
  
} 

}