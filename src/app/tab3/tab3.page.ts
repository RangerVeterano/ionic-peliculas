import { Component } from '@angular/core';
import { Genre, PeliculaDetalle } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  peliculas: PeliculaDetalle[] = [];
  generos: Genre[] = [];

  favoritoGenero: any[] = [];

  constructor(
    private dataLocal: DataLocalService,
    private movieService: MoviesService
  ) { }


  //metodo del ciclo de vida de ionic que se dispara cada vez que se entra a la vista
  async ionViewWillEnter() {
    this.actualizarFavoritos()

  }

  async actualizarFavoritos() {
    this.peliculas = await this.dataLocal.cargarPeliculas();
    this.generos = await this.movieService.cargarGenero();
    this.pelisPorGenero(this.generos, this.peliculas)
  }

  pelisPorGenero(generos: Genre[], peliculas: PeliculaDetalle[]) {

    //vaciamos para no arrastrar datos
    this.favoritoGenero = []

    //Separamos todos los generos y preparamos nuestro arreglo de favoritos
    generos.forEach(genero => {
      this.favoritoGenero.push({
        genero: genero.name,
        peliculas: []
      })
    })

    //Para cada elemento de favorito vamos que genero es
    this.favoritoGenero.map(favoritoGenero => {

      //Para cada pelicula comprobamos que generos tiene 
      peliculas.forEach(peli => {

        //Array temporal para ver que generos cumple la pelicula
        let genPelistmp = [];

        //LLenamos el array temporal con los generos de la pelicula
        peli.genres.forEach(genero => {
          genPelistmp.push(genero.name)
        })

        //comprobamos para cada genero si se incluye dentro del arreglo de generos
        if (genPelistmp.includes(favoritoGenero.genero)) {
          //Si está dentro se inserta la pelicula dentro de favorito
          favoritoGenero.peliculas.push(peli)
        }
      })
    })

    //Quitamos todos los generos que esten vacios
    this.favoritoGenero = this.favoritoGenero.filter(favorito => favorito.peliculas.length !== 0);

  }

  otraFormaArriba(generos: Genre[], peliculas: PeliculaDetalle[]) {

    //vaciamos arreglo de favoritos
    this.favoritoGenero = [];

    //Para cada genero lo insertamos dentro de nuestro arreglo de favoritos
    generos.forEach(genero => {

      //insertamos el objeto maquetado
      this.favoritoGenero.push({
        //nombre del genero como genero
        genero: genero.name,
        //dentro de las peliculas vamos a filtrar las que cumplen con los generos
        peliculas: peliculas.filter(peli => {
          //Decimos que nos devuelva la peli cuyo generos tenga el genero 
          return peli.genres.find(generoPeli => generoPeli.id === genero.id)
        })
      })
    })
  }
}
