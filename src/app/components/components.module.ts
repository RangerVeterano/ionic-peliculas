import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

//modulo de slider llamado swiper
import { SwiperModule } from 'swiper/angular';

import { PipesModule } from '../pipes/pipes.module';
import { SlidehowBackdropComponent } from './slidehow-backdrop/slidehow-backdrop.component';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';


@NgModule({
  declarations: [
    SlidehowBackdropComponent, //recuerda declarar los compontes
    SlideshowPosterComponent
  ],
  imports: [
    CommonModule,
    IonicModule, //emplear componentes de ionic 
    SwiperModule, //emplear el nuevo slider
    PipesModule // pipes personalizados
  ],
  exports: [
    SlidehowBackdropComponent, //Lo quermos emplear fuera de este modulo
    SlideshowPosterComponent
  ]
})
export class ComponentsModule { }
