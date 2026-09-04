import {
  votosReducer,
  initialState,
  VotosState
} from '../votos.reducer';

import {
  agregarElemento,
  borrarElemento,
  votoPositivo,
  votoNegativo,
  bicicletaAgregada,
  registrarClick
} from '../votos.actions';

describe('votosReducer', () => {

  it('debe agregar un elemento', () => {
    const nuevoEstado = votosReducer(
      initialState,
      agregarElemento({ nombre: 'Angular nuevo' })
    );

    expect(nuevoEstado.elementos.length)
      .toBe(initialState.elementos.length + 1);

    expect(nuevoEstado.elementos[nuevoEstado.elementos.length - 1].nombre)
      .toBe('Angular nuevo');
  });

  it('debe borrar un elemento', () => {
    const nuevoEstado = votosReducer(
      initialState,
      borrarElemento({ id: 1 })
    );

    expect(nuevoEstado.elementos.some(elemento => elemento.id === 1))
      .toBeFalse();

    expect(nuevoEstado.elementos.length)
      .toBe(initialState.elementos.length - 1);
  });

  it('debe aumentar los votos positivos', () => {
    const nuevoEstado = votosReducer(
      initialState,
      votoPositivo({ id: 1 })
    );

    const elemento = nuevoEstado.elementos.find(
      elemento => elemento.id === 1
    );

    expect(elemento?.votosPositivos).toBe(1);
  });

  it('debe aumentar los votos negativos', () => {
    const nuevoEstado = votosReducer(
      initialState,
      votoNegativo({ id: 1 })
    );

    const elemento = nuevoEstado.elementos.find(
      elemento => elemento.id === 1
    );

    expect(elemento?.votosNegativos).toBe(1);
  });

  it('debe agregar una bicicleta', () => {
    const bicicleta = {
      id: 1,
      modelo: 'Montaña',
      color: 'Rojo'
    };

    const nuevoEstado = votosReducer(
      initialState,
      bicicletaAgregada({ bicicleta })
    );

    expect(nuevoEstado.bicicletas.length)
      .toBe(initialState.bicicletas.length + 1);

    expect(nuevoEstado.bicicletas[0])
      .toEqual(bicicleta);
  });

  it('debe registrar un click de tracking', () => {
    const nuevoEstado = votosReducer(
      initialState,
      registrarClick({ etiqueta: 'voto-positivo' })
    );

    expect(nuevoEstado.tracking['voto-positivo'])
      .toBe(1);
  });

  it('debe acumular varios clicks de la misma etiqueta', () => {
    let estado = votosReducer(
      initialState,
      registrarClick({ etiqueta: 'voto-positivo' })
    );

    estado = votosReducer(
      estado,
      registrarClick({ etiqueta: 'voto-positivo' })
    );

    estado = votosReducer(
      estado,
      registrarClick({ etiqueta: 'voto-positivo' })
    );

    expect(estado.tracking['voto-positivo'])
      .toBe(3);
  });

  it('debe registrar diferentes etiquetas por separado', () => {
    let estado = votosReducer(
      initialState,
      registrarClick({ etiqueta: 'voto-positivo' })
    );

    estado = votosReducer(
      estado,
      registrarClick({ etiqueta: 'voto-negativo' })
    );

    expect(estado.tracking['voto-positivo'])
      .toBe(1);

    expect(estado.tracking['voto-negativo'])
      .toBe(1);
  });

  it('no debe modificar el estado original', () => {
    const estadoOriginal: VotosState = JSON.parse(
      JSON.stringify(initialState)
    );

    votosReducer(
      initialState,
      votoPositivo({ id: 1 })
    );

    expect(initialState).toEqual(estadoOriginal);
  });

  it('no debe modificar el estado original al registrar tracking', () => {
    const estadoOriginal: VotosState = JSON.parse(
      JSON.stringify(initialState)
    );

    votosReducer(
      initialState,
      registrarClick({ etiqueta: 'prueba' })
    );

    expect(initialState).toEqual(estadoOriginal);
  });

});