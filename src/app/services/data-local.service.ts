import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { Storage } from '@ionic/storage-angular';
import { PeliculaDetalle } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  private _storage: Storage | null = null;

  //Variable local con nuestras peliculas
  peliculas: PeliculaDetalle[] = []

  //Inyectamos servicio para almacenamiento local
  //Inyectamos controlador de los mensajes toasts
  constructor(
    private storage: Storage,
    private toastCtrl: ToastController
  ) { this.init() }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  //metodo para guardar peliculas
  guardarPelicula(pelicula: PeliculaDetalle) {

    let existe: boolean = false;
    let mensaje: string = '';

    for (const peli of this.peliculas) {
      if (peli.id === pelicula.id) {
        existe = true;
        break;
      }
    }

    if (existe) {
      this.peliculas = this.peliculas.filter(peli => peli.id !== pelicula.id)
      mensaje = 'Pelicula borrada de favoritos';
    } else {
      this.peliculas.push(pelicula) //insertamos la pelicula
      mensaje = 'Pelicula añadida a favoritos';
    }

    this.presentToast(mensaje); //mostramos mensaje informativo 
    this._storage.set('peliculas', this.peliculas);

    return !existe;
  }

  //metodo asincrono para recoger nuestras peliculas
  async cargarPeliculas() {

    //Guardamos en una constante las peliculas de nuestro almacenamiento
    const peliculas = await this.storage.get('peliculas');

    //Las insertamos dentro de nuestro arreglo local, Puede ser null ( insertamos arreglo vacio )
    this.peliculas = peliculas || [];

    //Devolvenos nuestro arreglo local de peliculas
    return this.peliculas;
  }

  async existePelicula(id) {

    await this.cargarPeliculas();
    const existe = this.peliculas.find(peli => peli.id === id)

    return (existe) ? true : false;
  }

  //metodo para mostrar mensajes toast
  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

}
