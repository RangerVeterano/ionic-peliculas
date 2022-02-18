import { Component, OnInit, Input } from '@angular/core';
import SwiperCore, { FreeMode, SwiperOptions } from 'swiper';
import { DetalleComponent } from '../detalle/detalle.component';
import { ModalController } from '@ionic/angular';


SwiperCore.use([FreeMode])

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {

  @Input() peliculasRecientes; //Declaracion de las peliculas

  //Opciones del slider
  sliderOpt: SwiperOptions = {
    slidesPerView: 3.3, //indicamos cuanto se ve el siguiente slider, en este caso 1 y medio mas    
    freeMode: {
      momentumVelocityRatio: 1.1,
      sticky: true
    }
  }

  constructor(private modalCtrl: ModalController) { }

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
