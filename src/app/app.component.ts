import { Component } from '@angular/core';
import { InfoEncuestasService } from './services/info-encuestas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'encuestaApp';
  constructor(public _infoEncuestaService: InfoEncuestasService) {}
}
