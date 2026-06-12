import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descuento',
})
export class DescuentoPipe implements PipeTransform {
  transform(valor: number, porcentajeDescuento: number): number {
    
    if(!valor || isNaN(valor)){
      return 0
    } 

    if(!porcentajeDescuento || isNaN(porcentajeDescuento)|| porcentajeDescuento <= 0){
      return 0
    } 

    return valor - (valor * porcentajeDescuento)

  }
}
