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

  //inyectamos nuestro servicio de peliculas
  constructor(
    private ms: MoviesService
  ) { }

  ngOnInit(): void {
    this.ms.getFeature()
      .subscribe({
        next: resp => {

          //Guardamos las peliculas de la peticion dentro de nuestra variable local
          this.peliculasRecientes = resp.results;

        }
      })
  }
}
