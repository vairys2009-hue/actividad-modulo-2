import { createAction, props } from '@ngrx/store';

export const agregarElemento = createAction(
  '[Votos] Agregar elemento',
  props<{ nombre: string }>()
);

export const borrarElemento = createAction(
  '[Votos] Borrar elemento',
  props<{ id: number }>()
);

export const votoPositivo = createAction(
  '[Votos] Voto positivo',
  props<{ id: number }>()
);

export const votoNegativo = createAction(
  '[Votos] Voto negativo',
  props<{ id: number }>()
);

export const bicicletaAgregada = createAction(
  '[Bicicletas API] Bicicleta agregada',
  props<{
    bicicleta: {
      id: number;
      modelo: string;
      color: string;
    };
  }>()
);