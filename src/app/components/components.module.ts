import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

//modulo de slider llamado swiper
import { SwiperModule } from 'swiper/angular';

import { PipesModule } from '../pipes/pipes.module';
import { SlidehowBackdropComponent } from './slidehow-backdrop/slidehow-backdrop.component';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';
import { DetalleComponent } from './detalle/detalle.component';


@NgModule({
  declarations: [
    SlidehowBackdropComponent, //recuerda declarar los compontes
    SlideshowPosterComponent,
    SlideshowParesComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    IonicModule, //emplear componentes de ionic 
    SwiperModule, //emplear el nuevo slider
    PipesModule // pipes personalizados
  ],
  exports: [
    SlidehowBackdropComponent, //Lo quermos emplear fuera de este modulo
    SlideshowPosterComponent,
    SlideshowParesComponent,
    DetalleComponent
  ]
})
export class ComponentsModule { }
