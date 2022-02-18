import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenPipe } from './imagen.pipe';
import { ParesPipe } from './pares.pipe';


//Los pipes se tienen que declarar dentro del modulo, como se quiere emplear fuera de este modulo lo tenemos que exportar
@NgModule({
  declarations: [
    ImagenPipe,
    ParesPipe
  ],
  exports: [
    ImagenPipe, //exportamos nuestro pipe personalizado de imagenes
    ParesPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
