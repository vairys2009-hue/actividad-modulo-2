import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  agregarElemento,
  borrarElemento,
  votoNegativo,
  votoPositivo
} from '../store/votos.actions';

import { VotosState } from '../store/votos.reducer';

interface AppState {
  votos: VotosState;
}

@Component({
  selector: 'app-votos',
  standalone: false,
  styleUrl: './votos.css',
  templateUrl: './votos.html',
})
export class Votos {

  elementos$;
  tracking$;

  nuevoElemento = '';

  idAnimado: number | null = null;

  constructor(private store: Store<AppState>) {

    this.elementos$ = this.store.select(
      (state: AppState) => state.votos.elementos
    );

    this.tracking$ = this.store.select(
      (state: AppState) => state.votos.tracking
    );
  }

  agregar(): void {
    const nombre = this.nuevoElemento.trim();

    if (!nombre) {
      return;
    }

    this.store.dispatch(agregarElemento({ nombre }));

    this.nuevoElemento = '';
  }

  votarPositivo(id: number): void {
    this.store.dispatch(votoPositivo({ id }));

    this.idAnimado = null;

    setTimeout(() => {
      this.idAnimado = id;
    }, 0);

    setTimeout(() => {
      if (this.idAnimado === id) {
        this.idAnimado = null;
      }
    }, 500);
  }

  votarNegativo(id: number): void {
    this.store.dispatch(votoNegativo({ id }));
  }

  borrar(id: number): void {
    this.store.dispatch(borrarElemento({ id }));
  }
}