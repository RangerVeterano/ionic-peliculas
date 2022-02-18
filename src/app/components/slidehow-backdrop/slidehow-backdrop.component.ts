import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

//Para poder manejar con comodidad las opciones del swipe tenemos que imporar lo que queremos
import SwiperCore, { FreeMode, SwiperOptions } from 'swiper';
import { Pelicula } from '../../interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

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

  @Input() peliculasRecientes: Pelicula[]; //Declaracion de las peliculas

  //inyectamos controlador para los modales
  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() { }

  async verDetalles(id: number) {

    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    })

    modal.present();
  }

}
