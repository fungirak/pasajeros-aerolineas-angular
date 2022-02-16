import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { LlamadaApiService } from './../../services/llamada-api.service';


@Component({
  selector: 'app-passengersapp',
  templateUrl: './passengersapp.component.html',
  styleUrls: ['./passengersapp.component.css']
})
export class PassengersappComponent implements OnInit {

  misPasajeros: any = [];
  id: any;
  cargado: boolean = false;



  constructor(private service: LlamadaApiService) { }

  ngOnInit(): void {
      this.cargarDatos();
   }

   cargarDatos(){
      this.service.obtenerDatos().subscribe(data => {
        this.misPasajeros = data;
        localStorage.setItem('totalPasajeros', JSON.stringify(this.misPasajeros.data));
        console.log(this.misPasajeros.data);
        this.cargaCompleta();
      });
   }

   cargaCompleta(){
     this.cargado = true;
   }

   public pageSlice = this.misPasajeros.slice(0, 10);



  changePage(event: PageEvent){
    console.log(event)
   const startIndex = event.pageIndex * event.pageSize;
   let endIndex = startIndex + event.pageSize;
   if(endIndex > this.misPasajeros.data.length){
     endIndex = this.misPasajeros.data.length;
   }
   this.pageSlice = this.misPasajeros.data.slice(startIndex, endIndex);

  }

  guardarID(idpasajero : string){
    this.id= idpasajero;
    localStorage.setItem('pasajeroID', this.id);
    console.log(this.id);
  }



}
