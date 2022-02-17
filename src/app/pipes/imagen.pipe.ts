import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

//Constante de la url para las imágenes
const url: string = environment.imgPath;

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {


  transform(img: string, size: string = 'w500'): string {

    //comprobamos que la imagen exista
    if (!img) {

      //Si no hay imagen se ponge una por defecto
      return './assets/no-image-banner.jpg'
    }

    return `${url}/${size}${img}`;
  }

}
