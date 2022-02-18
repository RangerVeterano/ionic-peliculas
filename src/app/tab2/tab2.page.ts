import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  //Variable para la busqueda de la pelicula
  textoBuscar: string;

  //Variable para mostrar las ideas de busqueda
  ideas: string[] = ['Spiderman', 'Avengers', 'El señor de los añillos', 'La vida es bella'];

  //variable para almacenar las peliculas
  peliculas: Pelicula[] = [];

  //Variable para controlar la busqueda de elementos
  busqueda: boolean = false; //no estamos buscando por defecto

  constructor(
    private ms: MoviesService,
    private modalCtrl: ModalController
    ) { }

  buscar(ev) {
    const valor: string = ev.detail.value.trim(' ');
    console.log(valor);

    this.busqueda = true; //indicamos que estmaos buscando texto

    //Si la cadena de texto está vacia
    if (valor.length === 0) {
      this.busqueda = false; //marcamos que no estamos buscando
      this.peliculas = []; //vaciamos nuestras peliculas
      return; //nos salimos de la funcion
    }

    this.ms.buscarPeliculas(valor)
      .subscribe(reps => {
        this.peliculas = reps['results'];
        this.busqueda = false; //Marcamos la busqueda como completada
      })

  }

  //modal para mostrar los detalles de la pelicula
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
