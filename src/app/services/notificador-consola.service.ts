import { Injectable } from '@angular/core';
import { Notificador } from './notificador';

@Injectable()
export class NotificadorConsolaService implements Notificador {

  notificar(mensaje: string): string {
    return `Notificación: ${mensaje}`;
  }
}