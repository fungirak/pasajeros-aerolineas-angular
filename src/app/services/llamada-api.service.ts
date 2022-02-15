import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LlamadaApiService {
  misPasajeros: any = [];

  constructor(private http:HttpClient) { }

  obtenerDatos(): Observable<any>{
    return this.http.get("https://api.instantwebtools.net/v1/passenger?page=1&size=1000");
  }

}
