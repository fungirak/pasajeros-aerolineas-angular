import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-passengersapp',
  templateUrl: './passengersapp.component.html',
  styleUrls: ['./passengersapp.component.css']
})
export class PassengersappComponent implements OnInit {

  misPasajeros: any = [];
  id: any;


  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.obtenerDatos();
   }

   public pageSlice = this.misPasajeros.slice(0, 10);

  obtenerDatos(){
        this.http.get("https://api.instantwebtools.net/v1/passenger?page=1&size=1000").subscribe( Response => {
          this.misPasajeros=Response;
          localStorage.setItem('totalPasajeros', JSON.stringify(this.misPasajeros.data));
          console.log(this.misPasajeros.data);
        });
  }



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
