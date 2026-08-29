import { Injectable } from '@angular/core';
import { NotificadorBaseService } from './notificador-base.service';

@Injectable()
export class NotificadorDetalleService extends NotificadorBaseService {

  detalle(): string {
    return 'Notificación detallada';
  }
}