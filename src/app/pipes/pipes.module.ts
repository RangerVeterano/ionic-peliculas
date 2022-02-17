import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenPipe } from './imagen.pipe';


//Los pipes se tienen que declarar dentro del modulo, como se quiere emplear fuera de este modulo lo tenemos que exportar
@NgModule({
  declarations: [
    ImagenPipe
  ],
  exports: [
    ImagenPipe //exportamos nuestro pipe personalizado de imagenes
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
