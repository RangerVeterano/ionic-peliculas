import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pares'
})
export class ParesPipe implements PipeTransform {

  //Esta funcion coge un arreglo y lo transforma para que sea un arreglo de pares
  // [1,2,3,4,5,6,7,8] - > [[1,2],[3,4],[5,6],[7,8]] 
  transform(arr: any[]): any[] {

    //el primer parametro es el resultado de la funcion, el segundo el valor actual, el tercero el indice y el ultimo el arreglo inicial,
    //Finalmente se puede pasar que se quiere como inicio del resultado final, en este caso un arreglo vacio
    const pares = arr.reduce((result, value, index, array) => {

      //Si el indice actual su resto es 0 (quiere decir que es par)
      if (index % 2 === 0) {
        //insertamos dentro de nuestro arreglo vacio otro arreglo que es el resultado de dividir nuestro arreglo inicial
        //Solo queremos el indice actual (0) y el sieguiente indice (2) para que la lista resultate se vea de la siguiente forma
        // 0,2,4,6,8 pero el arreglo se ve de la forma en que se ve arriba
        // 1,3,5,7,9
        result.push(array.slice(index, index + 2));
      }
      return result;
    },[]);
    return pares;
  }

}
