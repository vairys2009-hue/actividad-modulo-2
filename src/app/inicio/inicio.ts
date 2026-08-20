import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class InicioComponent {

  mensajeRecibido = '';

  recibirFormulario(mensaje: string): void {
    this.mensajeRecibido = mensaje;
  }
}
