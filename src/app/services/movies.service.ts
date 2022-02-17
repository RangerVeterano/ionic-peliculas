import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RespuestaMDB } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

const url = environment.url; //Constante con la url para las peticiones
const apiKey = environment.apikey; // Constante con la apikey

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  //inyectamos servicio de peticiones http
  constructor(
    private http: HttpClient
  ) { }

  //Metodo hacer la peticion de todas las peliculas
  getFeature(): Observable<RespuestaMDB> {

    const hoy = new Date();

    //con ultimo dia estamos diciendo que queremos una fecha de hoy
    //Con el año en el que estamos y con el mismo mes, pero a ese mes le sumamos 1 mes para que sea el siguiente
    //Luego elegimos el dia 0 (corresponde al ultimo dia del més pasado) / (1 corresponde al dia 1 del mes) 
    const ultimoDia = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0).getDate();

    const mes = hoy.getMonth() + 1; //sacamos el mes en el que estamos

    let mesString;

    //Si el mes es menor a 0 quiere decir que le tenemos que sumar uno
    if (mes < 10) {
      mesString = '0' + mes; //pasamos de numero a cadena de texto
    } else {
      mesString = mes;
    }

    //constante con la fecha de inicio formateada
    const inicio = `${hoy.getFullYear()}-${mesString}-01`
    const fin = `${hoy.getFullYear()}-${mesString}-${ultimoDia}`

    return this.ejecutarQuery<RespuestaMDB>(`/discover/movie?primary_release_date.gte=${inicio}&primary_release_date.lte=${fin}`);
  }

  //metodo privado para realiar las peticiones
  private ejecutarQuery<T>(query: string): Observable<T> {

    query = url + query;//Variable con la sentencia a ejecutar
    query += `&api_key=${apiKey}&language=es&include_image_lenguage=es`;

    return this.http.get<T>(query)
  }
}
