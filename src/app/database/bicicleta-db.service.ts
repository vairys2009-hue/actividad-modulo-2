import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';

export interface BicicletaLocal {
  id?: number;
  modelo: string;
  color: string;
}

@Injectable({
  providedIn: 'root'
})
export class BicicletaDbService extends Dexie {

  bicicletas!: Table<BicicletaLocal, number>;

  constructor() {
    super('BiciShopDB');

    this.version(1).stores({
      bicicletas: '++id, modelo, color'
    });
  }

  async guardarBicicleta(bicicleta: BicicletaLocal): Promise<number> {
    return await this.bicicletas.add(bicicleta);
  }

  async obtenerBicicletas(): Promise<BicicletaLocal[]> {
    return await this.bicicletas.toArray();
  }
}