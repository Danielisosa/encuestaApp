import { Component } from '@angular/core';
import { Encuesta } from '../../interfaces/encuesta.interface';
import { InfoEncuestasService } from '../../services/info-encuestas.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css'],
})
export class EncuestaComponent {
  iniciarEncuesta: boolean = false;
  estadoCorreo: boolean = true;
  estadoSexo: boolean = false;
  estadoRedFavorita: boolean = false;
  estadoTF: boolean = false;
  estadoTI: boolean = false;
  estadoTW: boolean = false;
  estadoTT: boolean = false;
  estadoTTk: boolean = false;
  estadoRespuesta: boolean = false;

  edades: string[] = ['18-25', '26-33', '34-40', '40+'];
  redesSociales: string[] = [
    'Facebook',
    'Instagram',
    'WhatsApp',
    'Twitter',
    'Tiktok',
  ];
  horas: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  encuesta: Encuesta = {
    correo: '',
    edad: '',
    sexo: '',
    redSocial: '',
    tiempoFacebook: 0,
    tiempoWhatsapp: 0,
    tiempoTwitter: 0,
    tiempoInstagram: 0,
    tiempoTiktok: 0,
  };

  constructor(private infoEncuestaService: InfoEncuestasService) {}
  cambiarEstado(valor: any) {
    switch (valor) {
      case 'iniciar':
        this.iniciarEncuesta = true;
        this.estadoCorreo = true;
        break;
      case 'correo':
        if (
          this.encuesta.correo.trim().length === 0 ||
          this.encuesta.edad.trim().length === 0
        ) {
          return;
        }
        this.estadoCorreo = false;
        this.estadoSexo = true;
        break;
      case 'sexo':
        if (this.encuesta.sexo.trim().length === 0) {
          return;
        }
        this.estadoSexo = false;
        this.estadoRedFavorita = true;
        break;
      case 'red':
        if (this.encuesta.redSocial.trim().length === 0) {
          return;
        }
        this.estadoRedFavorita = false;
        this.estadoTF = true;
        break;
      case 'TF':
        this.estadoTF = false;
        this.estadoTI = true;
        break;
      case 'TI':
        this.estadoTI = false;
        this.estadoTW = true;
        break;
      case 'TW':
        this.estadoTW = false;
        this.estadoTT = true;
        break;
      case 'TT':
        this.estadoTT = false;
        this.estadoTTk = true;
        break;
      case 'TTk':
        this.estadoTTk = false;
        this.estadoRespuesta = true;
        break;
      default:
        console.log('valor invalido');
        break;
    }
  }

  guardarEncuesta() {
    this.infoEncuestaService
      .agregarEncuesta(this.encuesta)
      .subscribe((resp) => {
        this.estadoRespuesta = false;
        this.iniciarEncuesta = false;
        this.encuesta.correo = '';
        this.encuesta.edad = '';
        this.encuesta.sexo = '';
        this.encuesta.redSocial = '';
        this.encuesta.tiempoFacebook = 0;
        this.encuesta.tiempoInstagram = 0;
        this.encuesta.tiempoWhatsapp = 0;
        this.encuesta.tiempoTiktok = 0;
        this.encuesta.tiempoTwitter = 0;

        console.log('respuesta', resp);
      });
  }
}
