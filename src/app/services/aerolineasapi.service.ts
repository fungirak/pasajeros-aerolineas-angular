import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AerolineasapiService {

  constructor(private http:HttpClient) { }

  obtenerDatosApi():Observable<any>{
    console.log("Servicio AerolineasapiService de obtener datos de la api en funcionamiento");

    return this.http.get('./assets/data/data.json');
  }
}
