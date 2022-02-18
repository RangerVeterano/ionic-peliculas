import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//Para poder manejar con comodidad las opciones del swipe tenemos que imporar lo que queremos
import SwiperCore, { FreeMode, SwiperOptions } from 'swiper';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

SwiperCore.use([FreeMode]);//Indicamos que use el modo libre

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {

  //Opciones del slider
  sliderOpt: SwiperOptions = {
    slidesPerView: 3.3, //indicamos cuanto se ve el siguiente slider, en este caso 1 y medio mas    
    spaceBetween: -10, //Espacio entre los sliders
    freeMode: {
      momentumVelocityRatio: 1.3,
      sticky: true
    }

  }

  @Input('peliculasRecientes') peliculasPopulares; //Declaracion de las peliculas
  @Output() cargarMas = new EventEmitter(); //emitimos un evento al padre

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

  //Metodo para cargar mas peliculas populares
  masPeliculas() {
    console.log('dispara');
    this.cargarMas.emit(); //emitivos el evento al padre
  }

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
