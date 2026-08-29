import { Injectable } from '@angular/core';

@Injectable()
export class NotificadorBaseService {

  notificar(mensaje: string): string {
    return `Mensaje: ${mensaje}`;
  }
}