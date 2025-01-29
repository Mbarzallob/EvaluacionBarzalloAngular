import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CandidatoService {
  constructor(private http: HttpClient) {}

  agregarCandidato(candidato: any) {
    return this.http.post(
      'http://localhost:8080/EvaluacionBarzallo/api/candidato',
      candidato
    );
  }
  listarCandidatos() {
    return this.http.get(
      'http://localhost:8080/EvaluacionBarzallo/api/candidato'
    );
  }
}
