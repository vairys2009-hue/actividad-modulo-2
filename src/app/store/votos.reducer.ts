import { createReducer, on } from '@ngrx/store';
import {
  agregarElemento,
  borrarElemento,
  votoPositivo,
  votoNegativo
} from './votos.actions';

export interface ElementoVoto {
  id: number;
  nombre: string;
  votosPositivos: number;
  votosNegativos: number;
}

export interface VotosState {
  elementos: ElementoVoto[];
}

export const initialState: VotosState = {
  elementos: [
    {
      id: 1,
      nombre: 'Angular',
      votosPositivos: 0,
      votosNegativos: 0
    },
    {
      id: 2,
      nombre: 'Redux',
      votosPositivos: 0,
      votosNegativos: 0
    },
    {
      id: 3,
      nombre: 'TypeScript',
      votosPositivos: 0,
      votosNegativos: 0
    }
  ]
};

export const votosReducer = createReducer(
  initialState,

  on(agregarElemento, (state, { nombre }) => ({
    ...state,
    elementos: [
      ...state.elementos,
      {
        id: Date.now(),
        nombre,
        votosPositivos: 0,
        votosNegativos: 0
      }
    ]
  })),

  on(borrarElemento, (state, { id }) => ({
    ...state,
    elementos: state.elementos.filter(elemento => elemento.id !== id)
  })),

  on(votoPositivo, (state, { id }) => ({
    ...state,
    elementos: state.elementos.map(elemento =>
      elemento.id === id
        ? {
            ...elemento,
            votosPositivos: elemento.votosPositivos + 1
          }
        : elemento
    )
  })),

  on(votoNegativo, (state, { id }) => ({
    ...state,
    elementos: state.elementos.map(elemento =>
      elemento.id === id
        ? {
            ...elemento,
            votosNegativos: elemento.votosNegativos + 1
          }
        : elemento
    )
  }))
);