import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'encuesta',
        component: EncuestaComponent,
      },
      {
        path: 'estadisticas',
        component: EstadisticasComponent,
      },
      { path: '**', redirectTo: 'encuesta' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
