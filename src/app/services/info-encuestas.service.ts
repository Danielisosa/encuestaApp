import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Encuesta } from '../interfaces/encuesta.interface';

@Injectable({
  providedIn: 'root',
})
export class InfoEncuestasService {
  private baseUrl: string = environment.baseUrl;
  encuestas: Encuesta[] = [];
  constructor(private http: HttpClient) {}

  getEstadisticas() {
    return this.http.get<Encuesta[]>(`${this.baseUrl}/encuestas`);
  }
  agregarEncuesta(encuesta: Encuesta): Observable<Encuesta> {
    return this.http.post<Encuesta>(`${this.baseUrl}/encuestas`, encuesta);
  }
}
