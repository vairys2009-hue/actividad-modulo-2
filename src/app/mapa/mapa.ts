import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  MapComponent,
  MarkerComponent,
  PopupComponent
} from 'ngx-mapbox-gl';

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [
    CommonModule,
    MapComponent,
    MarkerComponent,
    PopupComponent
  ],
  templateUrl: './mapa.html',
  styleUrls: ['./mapa.css']
})
export class MapaComponent {

  mapaEstilo = 'mapbox://styles/mapbox/streets-v11';

  centro: [number, number] = [-88.1965, 19.1817];

  zoom = 12;

  mostrarMensaje = false;

  bicicleta = {
    latitud: 19.1817,
    longitud: -88.1965,
    nombre: 'Bicicleta disponible'
  };

  mostrarPopup(): void {
    this.mostrarMensaje = true;
  }

  cerrarPopup(): void {
    this.mostrarMensaje = false;
  }
}