import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { ContenidoappComponent } from './componentes/contenidoapp/contenidoapp.component';
import { HttpClientModule } from '@angular/common/http';
import { PassengersappComponent } from './componentes/passengersapp/passengersapp.component';
import { PassengersappidComponent } from './componentes/passengersappid/passengersappid.component';
import { PortadaappComponent } from './componentes/portadaapp/portadaapp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ContenidoappComponent,
    PassengersappComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    RouterModule.forRoot([
      {path: '', component: PortadaappComponent},
      {path: 'home', component: ContenidoappComponent},
      {path: 'passengers', component: PassengersappComponent},
      {path: 'passengers/:id', component: PassengersappidComponent},
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
