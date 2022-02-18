import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';

//Le indicamos al nucleo del swipe que queremos emplear

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  //Variable para almacenar las peliculas recientes
  peliculasRecientes: Pelicula[] = []

  //Variable para almacenar las peliculas más populares
  populares: Pelicula[] = [];

  //inyectamos nuestro servicio de peliculas
  constructor(
    private ms: MoviesService
  ) { }

  ngOnInit(): void {

    //Peticion para todas las peliculas del mes actual
    this.ms.getFeature()
      .subscribe({
        next: resp => {

          //Guardamos las peliculas de la peticion dentro de nuestra variable local
          this.peliculasRecientes = resp.results;

        }
      })

    this.getPopulares();

  }

  //Metodo que me sirve para cargar más peliculas destacadas
  cargarMas() {
    this.getPopulares();
  }

  private getPopulares() {

    //peticion para las peliculas más populares
    this.ms.getPopulates()
      .subscribe({
        next: resp => {

          const arrTemp = [...this.populares, ...resp.results]

          this.populares = arrTemp;
        }
      })
  }
}
