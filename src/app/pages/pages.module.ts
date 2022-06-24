import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EncuestaComponent, EstadisticasComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
  ],
})
export class PagesModule {}
