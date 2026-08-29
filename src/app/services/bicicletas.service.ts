import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Bicicleta {
  id: number;
  modelo: string;
  color: string;
}

@Injectable({
  providedIn: 'root'
})
export class BicicletasService {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:3001/api/bicicletas';

  obtenerBicicletas(): Observable<Bicicleta[]> {
    return this.http.get<Bicicleta[]>(this.apiUrl);
  }

  agregarBicicleta(bicicleta: {
    modelo: string;
    color: string;
  }): Observable<Bicicleta> {
    return this.http.post<Bicicleta>(this.apiUrl, bicicleta);
  }
}