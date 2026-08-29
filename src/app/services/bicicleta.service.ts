import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Store } from '@ngrx/store';

import { bicicletaAgregada } from '../store/votos.actions';
import {
  BicicletaDbService,
  BicicletaLocal
} from '../database/bicicleta-db.service';

export interface Bicicleta {
  id: number;
  modelo: string;
  color: string;
}

@Injectable({
  providedIn: 'root'
})
export class BicicletaService {

  private apiUrl = 'http://localhost:3001/api/bicicletas';

  constructor(
    private http: HttpClient,
    private store: Store,
    private db: BicicletaDbService
  ) {}

  obtenerBicicletas(): Observable<Bicicleta[]> {
    return this.http.get<Bicicleta[]>(this.apiUrl);
  }

  agregarBicicleta(
    bicicleta: Omit<Bicicleta, 'id'>
  ): Observable<Bicicleta> {

    return from(
      new Promise<Bicicleta>((resolve, reject) => {

        this.http.post<Bicicleta>(
          this.apiUrl,
          bicicleta
        ).subscribe({

          next: async (bicicletaCreada) => {

            // 1. Notificar a Redux
            this.store.dispatch(
              bicicletaAgregada({
                bicicleta: bicicletaCreada
              })
            );

            // 2. Guardar también en Dexie
            const bicicletaLocal: BicicletaLocal = {
              id: bicicletaCreada.id,
              modelo: bicicletaCreada.modelo,
              color: bicicletaCreada.color
            };

            await this.db.guardarBicicleta(bicicletaLocal);

            resolve(bicicletaCreada);
          },

          error: (error) => {
            reject(error);
          }

        });

      })
    );
  }
}