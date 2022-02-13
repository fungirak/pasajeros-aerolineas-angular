import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import { Input } from '@angular/core';

@Component({
  selector: 'app-passengersappid',
  templateUrl: './passengersappid.component.html',
  styleUrls: ['./passengersappid.component.css']
})
export class PassengersappidComponent implements OnInit {

  pasajeroID:any;
  id: any;


  constructor(private http:HttpClient, private location: Location) { }



  ngOnInit(): void {
    this.id = localStorage.getItem('pasajeroID');
    this.datosPasajero(this.id);
  }

  datosPasajero(id: string){
    this.http.get(`https://api.instantwebtools.net/v1/passenger/${id}` ).subscribe( Response => {
      this.pasajeroID=Response;
      console.log(this.pasajeroID);
    });
  }

  getRutaAnterior(){
    this.location.back();
  }



}
