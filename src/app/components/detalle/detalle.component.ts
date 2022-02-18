import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { PeliculaDetalle, Cast, Pelicula } from '../../interfaces/interfaces';
import SwiperCore, { FreeMode, SwiperOptions } from 'swiper';
import { ModalController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';

SwiperCore.use([FreeMode])

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {


  //configuraciones de slider
  sliderOpt: SwiperOptions = {
    slidesPerView: 3.3,
    spaceBetween: -5,
    freeMode: {
      momentumVelocityRatio: 1.1,
      sticky: true
    }
  }

  @Input() id: string;

  //Variable para tener acceso a las propiedades de la pelicula
  pelicula: PeliculaDetalle;

  //Variable para almacenar los actores
  actores: Cast[] = [];

  //Variable para acortar el texto de la descripcion de la pelicula
  oculto: number = 150;

  //variable para marcar detalle del favorito
  estrella: boolean =  true;

  //inyectamos servicio de peliculas
  //inyectamos servicio para controlar lo modales
  constructor(
    private ms: MoviesService,
    private modalCtrl: ModalController,
    private dataLocal: DataLocalService
  ) { }

  async ngOnInit() {

    this.estrella = await this.dataLocal.existePelicula(this.id)

    this.ms.getPeliculaDetalle(this.id)
      .subscribe(resp => {
        this.pelicula = resp;
      });

    this.ms.getActoresPelicula(this.id)
      .subscribe(resp => {
        this.actores = resp.cast;
      });

  }

  //Metodo para tirar para atrás
  regresar() {    
    this.modalCtrl.dismiss();
  }

  //metodo para guardar las peliculas favoritas
  favorito() {

    //no necesitamos enviar ningun parámetro porque ya lo tenemos en el componente 
    this.estrella = this.dataLocal.guardarPelicula(this.pelicula)

  }

}
