import { Component, OnInit } from '@angular/core';
import { InfoEncuestasService } from '../../services/info-encuestas.service';
import { Encuesta } from '../../interfaces/encuesta.interface';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css'],
})
export class EstadisticasComponent implements OnInit {
  constructor(private infoEncuestaService: InfoEncuestasService) {}

  totalEncuestas: number = 0;
  TPromedioFacebook = 0;
  TPromedioInstagram = 0;
  TPromedioWhatsaap = 0;
  TPromedioTwitter = 0;
  TPromedioTiktok = 0;
  redFavorita = '';
  redMenosUsada = '';
  rangoPorEdad: string[] = [];

  ngOnInit(): void {
    this.infoEncuestaService.getEstadisticas().subscribe((resp) => {
      this.totalEncuestas = resp.length;
      this.TPromedioFacebook = this.calcularPromedio(resp, 1);
      this.TPromedioInstagram = this.calcularPromedio(resp, 2);
      this.TPromedioWhatsaap = this.calcularPromedio(resp, 3);
      this.TPromedioTwitter = this.calcularPromedio(resp, 4);
      this.TPromedioTiktok = this.calcularPromedio(resp, 5);
      this.redFavorita = this.redSocialFavorita(resp);
      this.redMenosUsada = this.redMenosFavorita(resp);

    });
  }

  calcularPromedio(encuest: Encuesta[], parametro: number): number {
    let valor = 0;

    encuest.forEach((encuesta) => {
      if (parametro == 1) {
        valor += encuesta.tiempoFacebook;
      } else if (parametro == 2) {
        valor += encuesta.tiempoInstagram;
      } else if (parametro == 3) {
        valor += encuesta.tiempoWhatsapp;
      } else if (parametro == 4) {
        valor += encuesta.tiempoTwitter;
      } else if (parametro == 5) {
        valor += encuesta.tiempoTiktok;
      } else {
        console.log('valor no valido');
      }
    });
    valor = valor / encuest.length;
    return Number(valor.toFixed(2));
  }
  redSocialFavorita(encuest: Encuesta[]): string {
    let masRepetida = '';
    let contador = 0;
    let cuenta = 0;

    encuest.map(({ redSocial }) => {
      cuenta = 0;
      encuest.map((e) => {
        let v = e.redSocial;
        if (redSocial == v) {
          cuenta++;
        }
      });
      if (cuenta > contador) {
        contador = cuenta;
        masRepetida = redSocial;
      }
    });
    return masRepetida;
  }
  redMenosFavorita(encuest: Encuesta[]): string {
    let menosRepetida = '';
    let cuenta = 0;

    encuest.map(({ redSocial }) => {
      cuenta = 0;
      encuest.map((e) => {
        let v = e.redSocial;
        if (redSocial == v) {
          cuenta++;
        }
      });
      if (Math.min(cuenta)) {
        menosRepetida = redSocial;
      }
    });
    return menosRepetida;
  }


}
