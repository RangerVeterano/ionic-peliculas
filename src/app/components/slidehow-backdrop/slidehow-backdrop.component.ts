import { Component, Input, OnInit } from '@angular/core';

//Para poder manejar con comodidad las opciones del swipe tenemos que imporar lo que queremos
import SwiperCore, { FreeMode, SwiperOptions } from 'swiper';

SwiperCore.use([FreeMode]);//Indicamos que use el modo libre

@Component({
  selector: 'app-slidehow-backdrop',
  templateUrl: './slidehow-backdrop.component.html',
  styleUrls: ['./slidehow-backdrop.component.scss'],
})
export class SlidehowBackdropComponent implements OnInit {

  //Opciones del slider
  sliderOpt: SwiperOptions = {
    slidesPerView: 1.3, //indicamos cuanto se ve el siguiente slider, en este caso 1 y medio mas    
    freeMode: {
      momentumVelocityRatio: 1.1,
      sticky: true
    }
  }

  @Input() peliculasRecientes; //Declaracion de las peliculas

  constructor() { }

  ngOnInit() { }

}
