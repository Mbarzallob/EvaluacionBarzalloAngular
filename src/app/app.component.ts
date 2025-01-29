import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CandidatoService } from './services/candidato.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'EvaluacionBarzallo';
  nombre = '';
  apellido = '';
  binomio = '';
  candidatos: any[] = [];

  ngOnInit() {
    this.listarCandidatos();
  }
  constructor(private candidatoService: CandidatoService) {}
  agregarCandidato() {
    if (this.nombre && this.apellido && this.binomio) {
      this.candidatoService
        .agregarCandidato({
          nombre: this.nombre,
          apellido: this.apellido,
          binomio: this.binomio,
        })
        .subscribe(
          (data) => {
            alert('Guardado correctamente');
            this.nombre = '';
            this.apellido = '';
            this.binomio = '';
            this.listarCandidatos();
          },
          (error) => {
            alert('Error al guardar');
          }
        );
    } else {
      alert('Ingrese los datos');
    }
  }
  listarCandidatos() {
    this.candidatoService.listarCandidatos().subscribe(
      (data: any) => {
        this.candidatos = data;
      },
      (error) => {
        alert('Error al listar candidatos');
      }
    );
  }
}
